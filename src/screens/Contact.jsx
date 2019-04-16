import React from "react";
import {
    Box,
    Heading,
    Paragraph,
    Image,
    Grid,
    ResponsiveContext,
    Form,
    FormField,
    TextInput,
    Button
} from "grommet";
import Art from "../assets/ceiling-art.jpg";

const Contact = () => (
    <ResponsiveContext.Consumer>
        {size => (
    <Box flex pad={size === 'small' ? "medium" : "medium"} overflow="auto">
        <div>
        <Box background="white" elevation="small" flex>
            <Box
                pad="xlarge"
            >
                        <Grid
                            columns={size === 'small' ? ["1fr"] : ["2fr", "3fr"]}
                            gap="large"
                        >
                                <Box height={size === 'small' ? "medium" : "large"} width="auto">
                                    <Image
                                        fit="cover"
                                        src={Art}
                                    />
                                </Box>
                            <Box direction="column" height="large" width="auto">
                                <Heading level="1" margin="none">GET IN TOUCH</Heading>
                                <Paragraph size="large">
                                If you are interested in the project and would like to provide any feedback or contribute in any way, feel free to reach out to us. 
                                </Paragraph>
                                <Form>
                                    <FormField name="name" label="Name" />
                                    <FormField name="email" label="Email" />

                                    <FormField label="Message">
                                        <TextInput placeholder="type here" />
                                    </FormField>
                                    <Button type="submit" primary label="Submit" />
                                </Form>
                    
                            </Box>

                        </Grid>
                  

            </Box>
        </Box>
        </div>
    </Box>
        )}
    </ResponsiveContext.Consumer>

);

export default Contact;