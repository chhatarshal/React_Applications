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
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
        <Header />
        <IdeaForm sendIdea={sendIdeaHere} ></IdeaForm>
        <ShowIdea idea={idea} /> 
    </ChakraProvider>
  )
}

export default App;
