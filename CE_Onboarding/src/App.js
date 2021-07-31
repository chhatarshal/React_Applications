import * as React from "react";
import {useState} from "react";
import IdeaForm from "./Components/IdeaInfo/IdeaForm";
import Header from "./Components/Layout/Header";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import ShowIdea from './Components/DisplayContent/ShowIdea';
 

function App({ Component }) {
  let [idea, setIdea] = useState([]);

  
  const sendIdeaHere = (valueOfIdea) => {
    console.log('from root component', valueOfIdea);
    setIdea((oldValues) => {
        return [...oldValues, valueOfIdea];
    });
  }

  getAll();

  async function getAll(idea) {

      const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer TOKEN'
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
        <IdeaForm sendIdea={sendIdeaHere} ></IdeaForm>
        <ShowIdea idea={idea} /> 
    </ChakraProvider>
  )
}

export default App;
