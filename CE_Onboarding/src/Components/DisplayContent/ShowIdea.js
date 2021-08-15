 
import {Fragment, useEffect} from 'react';
import { VStack, StackDivider, Box } from "@chakra-ui/react"

const ShowIdea = (props) => {

    let ideasList = <p>No Idea yet</p>
    console.log('show idea', props['idea']);
    if (props.idea.length > 0) {
        ideasList = props.idea.map(value => <Box h="40px" key={value} bg="yellow.200">{value}</Box>   )
    }  

    useEffect(() => {
            console.log('useeffect of show idea')
    }, []);

    return <Fragment>
             <VStack  
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch">               
                {ideasList}    
            </VStack>
       
    </Fragment>
}

export default ShowIdea;