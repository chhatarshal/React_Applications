import * as React from "react";
import {useState, Fragment, useEffect} from "react";
import IdeaForm from "./Components/IdeaInfo/IdeaForm";
import Header from "./Components/Layout/Header";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import ShowIdea from './Components/DisplayContent/ShowIdea';
import LoginForm from './Components/Login/LoginForm';

function App({ Component }) {
  let [idea, setIdea] = useState([]);
  let [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token.length > 0) {
      setLoggedIn(true);
    }
  }, []);
  const logged = (val) => {
    
    console.log('geting.......');
    console.log(localStorage.getItem('token'));
  }

  const sendIdeaHere = (valueOfIdea) => {
    
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization' : localStorage.getItem('token')
    });

    const myRequest = new Request('http://localhost:8099/idea/getIdeas', {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    });

    fetch(myRequest)
      .then(response => response.json())
      .then(mydata => {
        console.log('mylob....')
        console.log(mydata);
        let ids  = [];
        mydata.map(val => ids.push(val.detail));
        console.log('------------ after processing.. ' + ids);
        setIdea(ids);
      });
         
  }

  // 2. Use at the root of your apps
  return (
    <ChakraProvider>
        <Header />
        <main>
        {!loggedIn &&
        <LoginForm logged = {logged}/>
        }
        {loggedIn && 
        <Fragment>
          <IdeaForm sendIdea={sendIdeaHere} ></IdeaForm>
          <ShowIdea idea={idea}/>
        </Fragment>        
        }
        </main>
    </ChakraProvider>
  )
}

export default App;
