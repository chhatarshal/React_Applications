import {Fragment, useState} from 'react';
import { Container, FormLabel, Input, Center, Button, Grid, Box } from "@chakra-ui/react"


const IdeaForm = (props) => {

    const [idea, setIdea] = useState('');

    const submitIdea = (event) => {
        console.log(event);
        event.preventDefault();        
        props.sendIdea(idea);
        setIdea('');
    }

    const onChageInputHandler = (event) => {
        console.log(event.target.value);
        setIdea(event.target.value);
    }

    return <Fragment>
       <Container>
        <Center bg="light green" h="100px" color="Black">
            <form id="idea" onSubmit={submitIdea}>
                <FormLabel size="sm">What is your Idea ?</FormLabel>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box w="100%" h="20" > <Input placeholder="Idea" value={idea}  onChange={onChageInputHandler} size="sm"/> </Box>
                    <Box w="100%" h="10" >  <Button colorScheme="blue" size="sm" type="submit"  >Add</Button>  </Box>          
                </Grid>
            </form>
        </Center>         
        </Container>
    </Fragment>
}

export default IdeaForm;