import React from "react"
import {createGlobalStyle} from "styled-components"
import Navegacao from "./Componets/Navegacao.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
  body{
    background-color: #1f0322f2;
  }

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