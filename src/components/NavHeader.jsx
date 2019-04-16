import React from "react";
import { Heading, Anchor, Box, Text, Tabs, Tab, ResponsiveContext } from "grommet";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import styled from 'styled-components';


const NavHeader = ({ history }) => (
    <ResponsiveContext.Consumer>
        {size => (
            <Box
                background="white"
                direction="row"
                justify="center"
                alignSelf="start"
                fill
                pad={{ horizontal: "large" }}
                elevation="small"
            >
                <NavLinkS exact to="/" activeClassName="selected-menu-item" activeStyle={{
                }}>
                    <Box pad="medium">
                        <Heading color="dark-1" level="3" margin="none">PersianAmouz</Heading>
                    </Box>
                </NavLinkS>
                <Box
                    flex="grow"
                    direction="row"
                    justify="center"
                    alignSelf="center"
                    justify="end"
                >
                    <NavLinkS exact to="/about" activeClassName="selected-menu-item" activeStyle={{
                    }}>
                        <Box pad="medium">
                            <Heading color="dark-1" level="3" margin="none">About</Heading>
                        </Box>
                    </NavLinkS>
                    <NavLinkS exact to="/contact" activeClassName="selected-menu-item" activeStyle={{
                    }}>
                        <Box pad="medium">
                            <Heading color="dark-1" level="3" margin="none">Contact</Heading>
                        </Box>
                    </NavLinkS>
                    {/* <NavLinkS to="/search" activeClassName="selected-menu-item" activeStyle={{
                    }}>
                        <Box pad="medium">
                            <Heading color="dark-1" level="3" margin="none">SEARCH</Heading>
                        </Box>
                    </NavLinkS> */}
                </Box>
                {/* <Box background="white"
                    flex="grow"
                    justify="center"
                >
                </Box> */}
            </Box>
        )}
    </ResponsiveContext.Consumer>
);

export default withRouter(NavHeader);


let NavLinkS = styled(NavLink)`
    text-decoration: none;
    &:hover 
        {
            text-decoration:none;   
        }
`;