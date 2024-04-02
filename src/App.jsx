import React from "react"
import {createGlobalStyle} from "styled-components"
import Navegacao from "./Componets/Navegacao.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;

}
`

function App(){
  return(
    <>
    <GlobalStyle/>
    <Navegacao/>
    </>
  )
}

export default App