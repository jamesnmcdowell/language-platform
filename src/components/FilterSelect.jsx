import React, { useContext, useState, PureComponent } from "react";

import { Anchor, Box, CheckBox, Select, Text, ThemeContext } from "grommet";
import { FormClose, FormNext, Sort } from "grommet-icons";

class FilterSelectOption extends PureComponent {
    render() {
        const { checked, option, optionLabel, icon } = this.props;

        console.log(icon)
        return (
            <Box direction="row" align="center" pad="medium" justify="between" flex={false}>
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
                    onChange={event => event.stopPropagation()}
                />
                {
                    icon}
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

const FilterSelect = props => {
    const {
    filters,
        filterTitle = "Refine By",
        onChange,
        renderHeader,
        value
  } = props;
    const theme = useContext(ThemeContext);
    const [activeFilter, setActiveFilter] = useState(undefined);

    const renderFilter = key => {
        const { children, name, optionLabel, render, icons, ...rest  } = filters[key];
        const innerOnChange = (event = { value: undefined, target: {} }) => {
            console.log(event);
            return onChange(key, event);
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
                    <Select
                        plain
                        onOpen={() => setActiveFilter(key)}
                        onClose={() => setActiveFilter(undefined)}
                        id={key}
                        icon={isActive ? FormClose : FormNext}
                        name={name}
                        searchPlaceholder={`Search ${name}...`}
                        emptySearchMessage={`No ${name} found`}
                        multiple
                        dropAlign={{ top: "top", left: "right" }}
                        onChange={innerOnChange}
                        value={value[key]}
                        closeOnChange={false}
                        valueLabel={
                            <FilterSelectValue
                                id={key}
                                name={name}
                                value={value[key]}
                                active={isActive}
                                onClear={innerOnChange}
                            />
                        }
                        {...rest}
                    >
                        {children
                            ? children
                            : option => (
                                <FilterSelectOption
                                    option={option}
                                    icon={(icons && icons[option])? icons[option] : null}
                                    optionLabel={optionLabel}
                                    checked={
                                        isMultiple
                                            ? (value[key] || []).includes(option)
                                            : value[key]
                                    }
                                />
                            )}
                    </Select>
                </Box>
            );
    };

    return (
        <Box round="xsmall" background="white" elevation="small" overflow="hidden">
            {renderHeader || (
                <Box
                    tag="header"
                    background="brand"
                    direction="row"
                    align="center"
                    justify="between"
                    pad="medium"
                >
                    <Text>
                        <strong>{filterTitle.toUpperCase()}</strong>
                    </Text>
                    <Sort/>
                </Box>
            )}
            {Object.keys(filters).map(renderFilter)}
        </Box>
    );
};

export default FilterSelect;
