
import React, {Fragment, useState} from 'react';
import { Container, FormLabel, Input, Center, Button, Grid, Box } from "@chakra-ui/react"


const LoginForm = (props) => {

    const loginHandler = (event) => {
        console.log(event);
        event.preventDefault();
        console.log('--------');
        console.log(username);
        console.log(password);
        getSessionId();
       
    }

    async function getSessionId() {
        const userInfo = {
            "username" : username,
            "password" : password
        };
        
        const myHeaders = new Headers({
            'Content-Type': 'application/json'
          });


        const myRequest = new Request('http://localhost:8099/auth/authenticate', {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body :JSON.stringify(userInfo)
          });
      
          fetch(myRequest)
            .then(response =>
              {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                console.log(response.string);
            return response.json();
            })
            .then(mydata => {              
              console.log('mylob....')
              console.log(mydata['jwt']);
              localStorage.setItem('token', 'Bearer ' + mydata['jwt']);
              props.logged(true);
              console.log('------------ after processing.login. ');
            }).catch((error) => {
              console.error('Error:', error);
            });






        setUserName('');
        setPassword('');
    }

    const onChageInputHandlerUserName = (event) => {
        setUserName(event.target.value);
    }
    
    const onChageInputHandlerPassword = (event) => {
        setPassword(event.target.value);
    }

    const logout = (event) => {
        localStorage.removeItem('token');
    }

    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    
    return <Fragment>
                 <Container>
                    <Center bg="light green" h="100px" color="Black">
                        <form id="idea" onSubmit={loginHandler}>
                            <FormLabel size="sm">Login Please </FormLabel>
                            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                <FormLabel size="sm">UserName: </FormLabel>
                                <Box w="100%" h="20" > <Input placeholder="UserName" value={username}  onChange={onChageInputHandlerUserName} size="sm"/> </Box>
                            </Grid>
                            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                <FormLabel size="sm">Password: </FormLabel>
                                <Box w="100%" h="20" > <Input placeholder="Password" value={password}  onChange={onChageInputHandlerPassword} size="sm"/> </Box>
                            </Grid>
                            <Box w="100%" h="10" >  <Button colorScheme="blue" size="sm" type="submit"  >Login</Button>  </Box>
                            <Box w="100%" h="10" >  <Button colorScheme="blue" size="sm" type="submit" onClick={logout} >Logout</Button>  </Box>
                        </form>
                    </Center>         
                </Container>
        </Fragment>
}

export default LoginForm;