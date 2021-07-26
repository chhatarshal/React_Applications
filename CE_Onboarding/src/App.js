import * as React from "react";
import IdeaForm from "./Components/IdeaInfo/IdeaForm";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import { Grid, Box, Center,WrapItem, Wrap, Container, Input, Stack } from "@chakra-ui/react"

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
        <IdeaForm></IdeaForm> 
    </ChakraProvider>
  )
}

export default App;
