import React from "react";
import {
    Box,
    Heading,
    Paragraph,
    Image,
    Grid,
    ResponsiveContext
} from "grommet";
import Iran from "../assets/iran.jpg";

const About = () => (
    
    <Box background="light-2" flex pad="large" overflow="auto">
        <Box background="white" elevation="small">
            <Box               
                pad="xlarge"
            >
                <ResponsiveContext.Consumer>
                    {size => (
                    <Grid
                        columns={size === 'small' ? ["1fr"] : ["2fr", "3fr"]}
                        gap="large" 
                    >
               
                    <Box height={size === 'small' ? "medium" : "large"} width="auto">
                        <Image
                            fit="cover"
                            src={Iran}
                        />
                    </Box>
                    <Box direction="column" height="large" width="auto">
                        <Heading level="1" margin="none">ABOUT</Heading>
                        <Paragraph size="large">
                        PersianAmouz is an open source platform for the teachers and learners of the Persian language. The goal of this platform is to create a singular hub of knowledge for learners and instructors that is comprehensive, up to date, and delivered through a modern interface. In addition to compiling and curating the best of existing external resources for learning and teaching of Persian we create original resources (video, podcast, and instructive material.
                        </Paragraph>
                        <Paragraph size="large" >
                        Created by Ayda Melika and James McDowell, this project has been supported by the School of Modern Languages and a grant from the Digital Integrative Liberal Arts Center (DILAC) at Georgia Institute of Technology. PersianAmouz is an ongoing project that hopes to be in the long-term self-sustaining with the support of other passionate individuals within the community. Please be patient with us as we get this platform started.
                        </Paragraph>
                    </Box>
    
                </Grid>
                )}
                </ResponsiveContext.Consumer>

            </Box>
        </Box>
    </Box>

);

export default About;