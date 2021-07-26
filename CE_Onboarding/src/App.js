import * as React from "react";
import IdeaForm from "./Components/IdeaInfo/IdeaForm";
import Header from "./Components/Layout/Header";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
 

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
        <Header />
        <IdeaForm></IdeaForm> 
    </ChakraProvider>
  )
}

export default App;
