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
    <ResponsiveContext.Consumer>
        {size => (
            <Box overflow="auto"
                flex="true"
                basis="auto"
                direction="column"
                pad={size === 'small' ? "medium" : "medium"}
            >
                <div>
                    <Box background="white" elevation="small" flex pad="xlarge" basis="auto" direction="column">

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
                                    PersianAmouz is an open source platform for teachers and learners of the Persian language. The goal of this platform is to create a singular hub of knowledge for learners and instructors that is comprehensive, up to date, and delivered through a modern interface. In addition to compiling and curating the best of existing external resources for learning and teaching of Persian we create original resources (video, podcast, and instructive material.
                        </Paragraph>
                                <Paragraph size="large" >
                                    Created by Ayda Melika and James McDowell, this project has been supported by the School of Modern Languages and a grant from the Digital Integrative Liberal Arts Center (DILAC) at Georgia Institute of Technology. PersianAmouz is an ongoing project that hopes to be in the long-term self-sustaining with the support of other passionate individuals within the community. Please be patient with us as we get this platform started.
                        </Paragraph>
                            </Box>
                        </Grid>
                    </Box>
                </div>
            </Box>
        )}
    </ResponsiveContext.Consumer>
);

export default About;