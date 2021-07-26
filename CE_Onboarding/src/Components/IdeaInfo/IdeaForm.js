import {Fragment} from 'react';
import { Container, FormControl, FormLabel, Input, Center, Button, Grid, Box } from "@chakra-ui/react"


const IdeaForm = (props) => {

    return <Fragment>
       <Container>
        <Center bg="light green" h="100px" color="Black">
            <FormControl id="idea" isRequired>
                <FormLabel size="sm">What is your Idea ?</FormLabel>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box w="100%" h="10" > <Input placeholder="Idea"  size="lg"/> </Box>
                    <Box w="100%" h="10" >  <Button colorScheme="blue" size="sm">Button</Button>  </Box>          
                </Grid>
            </FormControl>
        </Center>         
        </Container>
    </Fragment>
}

export default IdeaForm;