import React, { Component } from "react";
import SideBar from "../components/SideBar"
import { render } from "react-dom";
import data from "../data.json";
import { Link as LinkRoute } from "react-router-dom";
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';



import {
    Box,
    Button,
    CheckBox,
    Heading,
    Grommet,
    Paragraph,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    Text,
    Layer,
    ResponsiveContext,
    Grid,
    Anchor,
    InfiniteScroll
} from "grommet";

import { Link, Video, CatalogOption, RadialSelected, AssistListening, Workshop, Chat, Edit } from "grommet-icons";
import { sortBy, uniq, uniqBy } from "lodash";
import FilterSelect from "../components/FilterSelect"
import FilterSelectMobile from "../components/FilterSelectMobile";

const itemsPerPage = 16;
const PROJECT_STATUS_COLOR = {
    "In Progress": "status-ok",
    Blocked: "status-critical"
};

const filterFields = data.reduce((a, c) => {
    a.category = [...a.category, ...c.category];
    a.proficiency = [...a.proficiency, ...c.proficiency];
    a.skill = [...a.skill, ...c.skill];
    a.type = [...a.type, ...c.type];
    return a;
}, {
        category: [],
        proficiency: [],
        skill: [],
        type: []
    })

const uniqFilterFields = {
    category: uniq(filterFields.category),
    proficiency: uniq(filterFields.proficiency),
    skill: uniq(filterFields.skill),
    type: uniq(filterFields.type)
};

const proficiencyOrder = [
    "novice",
    "intermediate",
    "advanced",
    "superior"
];

const colorKey = {
    "novice": "#17397C",
    "intermediate": "#66C430",
    "advanced": "#F68713",
    "superior": "#FDDD03"
};
const skillKey = {
    "reading": CatalogOption,
    "listening": AssistListening,
    "watching": Video,
    "speaking": Chat,
    "writing": Edit
};

const CircleIcon = (color, size) => (
    <svg width={size} height={size} viewBox='0 0 24 24'>
        <circle cx='12' cy='12' r='11' fill={color} />
    </svg>
);

const allFilters = {
    category: {
        name: "Category",
        options: uniqFilterFields.category.sort()
    },
    proficiency: {
        name: "Proficiency",
        options: uniqFilterFields.proficiency.sort((a, b) => (
            proficiencyOrder.indexOf(a) - proficiencyOrder.indexOf(b)
        )),
        icons: Object.keys(colorKey).reduce((a, c) => {
            a[c] = CircleIcon(colorKey[c], 15);
            return a;
        }, {})
    },
    skill: {
        name: "Skill",
        options: uniqFilterFields.skill.sort(),
        icons: Object.keys(skillKey).reduce((a, c) => {
            a[c] = React.createElement(skillKey[c])
            return a;
        }, {})
    },
    type: {
        name: "Type",
        options: uniqFilterFields.type.sort()
    },
};

const initData = [...data];

class Search extends Component {
    constructor() {
        super();
        this.state = {
            currentFilters: {},
            currentItems: initData,
            // filters: { ...allFilters }
            filterOpen: false,
            filterChange:false,
            message: "",
            offset: 0,
            pageItems: initData.slice(0,itemsPerPage),
            pageCount: Math.ceil(initData.length/itemsPerPage),
            currentPage: 0
        }
    };

    componentDidUpdate(prevProps) {
        if(this.state.filterChange) {
            console.log('bitch')
            this.updateCurrentItems()
            // this.setState({filterChange: false})
        }
    };

    applyOffset = ()=> {
        this.setState({
            pageItems:this.state.currentItems.slice(this.state.offset, this.state.offset + itemsPerPage)
        })
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * itemsPerPage);

        this.setState({ offset: offset, currentPage: selected }, () => {
            this.applyOffset();
        });
    };


    onSearchTeam = query => {
        const { filters } = this.state;
        const newFilters = { ...filters };
        newFilters.team = { ...allFilters.team };
        if (query && query !== "") {
            newFilters.team.options = newFilters.team.options.filter(
                option => option.toLowerCase().indexOf(query.toLowerCase()) >= 0
            );
        }
        this.setState({ filters: newFilters });
    };

    updateCurrentItems = () => {
        let filters = {
            category: new Set(this.state.currentFilters.category),
            proficiency: new Set(this.state.currentFilters.proficiency),
            skill: new Set(this.state.currentFilters.skill),
            type: new Set(this.state.currentFilters.type)
        };

        const newCurrentItems = (
            filters.category.size || filters.proficiency.size || filters.skill.size || filters.type.size
        ) ? data.filter((item) => (this.filterItem(item, filters))) : [...data];

        this.setState({
            currentItems:newCurrentItems,
            filterChange: false,
            message: `${newCurrentItems.length}`,
            pageCount: Math.ceil(newCurrentItems.length/ itemsPerPage),
            offset: 0,
            pageItems: newCurrentItems.slice(0, itemsPerPage),
            currentPage: 0
        })

    }
    onFilterChange = (filterId, event) => {
        const { value, target } = event;
        const newCurrentFilters = { ...this.state.currentFilters };
        // console.dir(newCurrentFilters);
        const newValue =
            value ||
            (typeof target.checked !== "undefined" ? target.checked : target.value);
        if (typeof newValue === "boolean" || newValue) {
            newCurrentFilters[filterId] = newValue;
        } else {
            delete newCurrentFilters[filterId];
        }
        this.setState({
            currentFilters: newCurrentFilters,
            filterChange: true
        });
    };

    filterItem = (item, filters) => (
        (item.category.reduce((a, c) => (a || filters.category.has(c)), false)) ||
        (item.proficiency.reduce((a, c) => (a || filters.proficiency.has(c)), false)) ||
        (item.skill.reduce((a, c) => (a || filters.skill.has(c)), false)) ||
        (item.type.reduce((a, c) => (a || filters.type.has(c)), false))
    )


    toggleFilterOpen = () => {
        this.setState({
            filterOpen: !this.state.filterOpen
        })
    }

    render() {
        const { currentFilters, filters, currentItems, filterOpen, message, pageItems, pageCount, offset } = this.state;
        console.log("rendered");
        return (
            <ResponsiveContext.Consumer>
                {size => (
                    <Box flex="false" fill direction={(size === 'small') ? 'column' : 'row'}>
                        {(size === 'small') ?
                            <Box basis="auto" flex="false" pad={{ top: 'large', left: 'large', right: 'large' }}>
                                <Button label="show" onClick={this.toggleFilterOpen} />
                                {filterOpen && (
                                    <Layer
                                        onEsc={this.toggleFilterOpen}
                                        onClickOutside={this.toggleFilterOpen}
                                    >
                                        <Button pad="medium" label="close" onClick={this.toggleFilterOpen} />
                                        <FilterSelectMobile
                                            value={currentFilters}
                                            filters={allFilters}
                                            onChange={this.onFilterChange}
                                            closeWindow={this.toggleFilterOpen}
                                        />
                                    </Layer>
                                )}
                            </Box>
                            :
                            <Box basis="250px" flex="false" pad={{top:'medium',left:'medium', bottom:'medium'}}>
                                <FilterSelect
                                    value={currentFilters}
                                    filters={allFilters}
                                    onChange={this.onFilterChange}
                                />
                            </Box>
                        }

                        {/* <Grid
                            columns={size === 'small' ? ["250px", "1fr"] : ["250px", "1fr"]}
                            gap="medium"
                        > */}
                           
                            <Box
                                overflow="auto"
                                flex="true"
                                basis="auto"
                                pad={{ top: (size ==='small') ? 'large' : 'medium', left: 'medium', bottom: 'medium', right: 'medium'}}
                            >
                                <Grid
                                    columns={size === 'small' ? ["repeat(auto-fit, minmax(250px, 1fr))"] : ["repeat(auto-fit, minmax(250px, 1fr))"]}
                                    gap="medium"
                                >
                                    {
                                        pageItems.length > 0 ?
                                    
                                            pageItems.map(
                                                (c) => (                                           
                                                <A key={`${c.id}`} href={c.url} target="_blank">
                                                    <Box
                                                        background="white"
                                                        elevation="small"
                                                        pad="small"
                                                        direction="column"
                                                        responsive
                                                        height="100%"
                                                    >
                                                        <Box direction="column">
                                                            <Box
                                                                direction="row"
                                                                justify="between"
                                                                align="center"
                                                            >
                                                                <Heading level="3" margin="none">{c.name}</Heading>
                                                                <Link color="plain" />
                                                            </Box>
                                                            <Box>
                                                                    <Heading color="dark-4" level="4" margin="none">{c.category.join(', ')}</Heading>
                                                            </Box>
                                                        </Box>

                                                        <Box flex="true">
                                                            <Paragraph color="light1" level="4" >{c.description}</Paragraph>
                                                        </Box>
                                                        <Box
                                                            direction="row"
                                                            justify="between"
                                                        >
                                                            <Box direction="row">

                                                                {c.proficiency.map(cc => (
                                                                    <Box pad={{ horizontal: "xxsmall" }} direction="row">
                                                                        {CircleIcon(colorKey[cc], '15')}
                                                                    </Box>
                                                                )
                                                                )}
                                                            </Box>
                                                            <Box direction="row">
                                                                {c.skill.map(cc => (
                                                                    <Box pad={{ horizontal: "xxsmall" }} direction="row">
                                                                        {React.createElement(skillKey[cc])}
                                                                    </Box>
                                                                )
                                                                )}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </A>
                                                )
                                             )
                                            :
                                            <Box flex pad="medium" overflow="auto">
                                                <Box background="white" elevation="small">
                                                    none
                                    </Box>
                                            </Box>
                                    }
                                

                                </Grid>
                            < ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                forcePage={this.state.currentPage}
                                breakClassName={'break-me'}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination-container'}
                                pageClassName={'li-elem'}
                                pageLinkClassName={'a-elem'}
                                activeClassName={'active-page'}
                                activeLinkClassName={'active-a'}
                                previousClassName={'previous-btn'}
                                nextClassName={'next-btn'}
                                previousLinkClassName={'pre'}
                                nextLinkClassName={'nex'}
                                disabledClassName={'x'}
                            />
                            </Box>
                        {/* </Grid> */}
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        )
    }


}

export default Search;

let A = styled.a`
    color: blue;
    text-decoration: none;
`;