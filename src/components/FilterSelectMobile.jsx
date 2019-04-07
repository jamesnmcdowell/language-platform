import React, { useContext, useState, PureComponent } from "react";

import { Anchor, Box, CheckBox, Select, Text, ThemeContext, Accordion, AccordionPanel, Collapsible } from "grommet";
import { FormClose, FormNext, Sort, Close } from "grommet-icons";

class FilterSelectOption extends PureComponent {
    render() {
        const { checked, option, optionLabel, onChangeFunc } = this.props;
        return (
            <Box direction="row" align="center" pad="medium" flex={false}>
                <CheckBox
                    tabIndex="-1"
                    checked={checked}
                    label={
                        optionLabel ? (
                            optionLabel(option, checked)
                        ) : (
                                <Text weight={500}>{option}</Text>
                            )
                    }
                    onChange={onChangeFunc}
                />
            </Box>
        );
    }
}

class FilterSelectValue extends PureComponent {
    onClearValue = event => {
        event.preventDefault();
        event.stopPropagation();
        const { onClear } = this.props;
        onClear();
    };
    renderSelectValueBadge = () => {
        const { value } = this.props;
        return (
            <Box
                background="brand"
                round="full"
                width="18px"
                height="18px"
                align="center"
                justify="center"
            >
                <Text size="small">{value.length > 9 ? "9+" : value.length}</Text>
            </Box>
        );
    };
    render() {
        const { active, id, name, value } = this.props;
        const hasValue = value && value.length > 0;
        return (
            <Box
                key={`filter-${id}`}
                pad={{ left: "medium", vertical: "medium" }}
                direction="row"
                align="center"
                justify="between"
                flex
                onClick={this.props.onClick}
            >
                <Box height="18px" direction="row" align="center" gap="small">
                    <Text color={active ? "brand" : "dark-3"}>{name}</Text>
                    {hasValue && this.renderSelectValueBadge()}
                </Box>
                {hasValue && (
                    <Anchor href="$" size="small" onClick={this.onClearValue}>
                        clear
          </Anchor>
                )}
            </Box>
        );
    }
}

const FilterSelectMobile = props => {
    const {
    filters,
        filterTitle = "Refine By",
        onChange,
        renderHeader,
        value,
        closeWindow
  } = props;
    const theme = useContext(ThemeContext);
    const [activeFilter, setActiveFilter] = useState(undefined);
    const [open0, setOpen0] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
  
    const renderFilter = (key, open, setOpen) => {
        const { children, name, optionLabel, render, ...rest } = filters[key];
        const innerOnChange = (option)=> { 
            return (event ) => {
                
                let evObj = {};
                if(option) {  
                    let valueArr = (value && value[key]) ? value[key] : [];
                    let newValueArr = filters[key].options.filter((c) => (
                        (event.target.checked) ? 
                            valueArr.includes(c) || c === option :
                            valueArr.includes(c) && c !== option
                    ))
                    evObj = { 
                        value: newValueArr, 
                        target: undefined,
                        option,
                    };
                } else {
                    evObj = {
                        value: [],
                        target: undefined,
                        option
                    };

                }
                return  onChange(key, evObj);
            }
        }
        const activeFilterProps = {};
        const isActive = activeFilter === key;
        const isMultiple = rest.multiple || true;

        if (isActive) {
            activeFilterProps.border = {
                side: "left",
                color: "brand",
                size: "2px"
            };
            activeFilterProps.background = "light-2";
        }
   
        return render ? (
            render(innerOnChange, value[key], { ...props })
        ) : (
                <Box
                    key={`filter-select-${key}`}
                    border={{ side: "left", color: "transparent", size: "2px" }}
                    {...activeFilterProps}
                >
                    <FilterSelectValue
                        id={key}
                        name={name}
                        value={value[key]}
                        active={isActive}
                        onClear={innerOnChange(null)}
                        onClick={()=>{console.log("sup"); setOpen(!open)}}
                    />

                    <Collapsible open={open}>
                        { filters[key].options.map((option, i)=> (
                            <FilterSelectOption
                                option={option}
                                optionLabel={optionLabel}
                                checked={
                                        (value[key] || []).includes(option)
                              
                                }
                                onChangeFunc={innerOnChange(option, i)}
                            />
                        ))}
                    </Collapsible>
                </Box>
            );
    };
    return (
        <Box round="xsmall" background="white" elevation="small" overflow="hidden" pad={{top:"medium"}} >
            {renderHeader || (
                <Box
                    tag="header"
                    background="brand"
                    direction="row"
                    align="center"
                    justify="between"
                    pad="medium"
                >
                    <Box flex="true">
                    <Text>
                        <strong>{filterTitle.toUpperCase()}</strong>
                    </Text>
                    </Box>
                    {/* {theme.filterSelect.icons.next || <Sort />} */}
                    <Box flex="false" onClick={closeWindow}>
                        <Close />
                    </Box>
                </Box>
            )}
            {Object.keys(filters).map((key, i) => (renderFilter(key, eval(`open${i}`), eval(`setOpen${i}`) )))}
        </Box>
    );
};

export default FilterSelectMobile;
