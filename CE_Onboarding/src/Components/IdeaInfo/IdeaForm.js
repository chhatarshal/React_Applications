import {Fragment} from 'react';
import { Container, FormControl, FormLabel, Input, Center } from "@chakra-ui/react"


const IdeaForm = (props) => {

    return <Fragment>
       <Container>
                        <Center bg="tomato" h="100px" color="white">
                            <FormControl id="idea" isRequired>
                                <FormLabel size="sm">What is your Idea ?</FormLabel>
                                <Input placeholder="Idea"  size="sm"/>
                            </FormControl>
                        </Center>         
                        </Container>
    </Fragment>
}

export default IdeaForm;