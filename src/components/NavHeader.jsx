import React from "react";
import { Heading, Anchor, Box, Text, Tabs, Tab, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

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
                <Box background="white"
                    flex="grow"
                    justify="center"
                    onClick={() => { history.push('/') }}>
                    <Heading level="3" margin="none">PersianAmouz</Heading>
                </Box>
                <Box
                    flex="grow"
                    direction="row"
                    justify="center"
                    alignSelf="center"
                >
                    <Box pad="medium" onClick={() => { history.push('/about') }}>
                        <Heading level="3" margin="none">ABOUT</Heading>
                    </Box>
                    <Box pad="medium" onClick={() => { history.push('/contact') }}>
                        <Heading level="3" margin="none">CONTACT</Heading>
                    </Box>
                    <Box pad="medium" onClick={() => { history.push('/search') }}>
                        <Heading level="3" margin="none">SEARCH</Heading>
                    </Box>
                </Box>
                <Box background="white"
                    flex="grow"
                    justify="center"
                >
                </Box>
            </Box>
        )}
    </ResponsiveContext.Consumer>
);

export default withRouter(NavHeader);
