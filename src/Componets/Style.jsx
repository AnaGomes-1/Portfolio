import styled from "styled-components"

//-----Estilização da navegação

export const Nav = styled.nav`
background-color: #1f0322e1;
`

export const Ul = styled.ul`
height: 10vh;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;
a{
    font-size: 1.3rem;
    text-decoration: none;
    color: white;

}
li:hover{
    transform: scale(1.2); 
    transition: transform 0.4s ease-in-out;
}
a:hover{
    color: gold;
}
`

//-----Estilização para o Início
export const SectionInicio = styled.section`
height: 80vh;
display: flex;
justify-content: space-evenly;
align-items: center;
//padding: 3rem;
background-color: #ff4f78eb;


img{
    height: 38vh;
    border-radius: 40%;
}

h2{
    color: white;
    padding: 0.5rem;
}
`

export const ContainerDivs = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 40vh;
`

export const BoxInicio = styled.div`
display: flex ;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`


export const BoxInicio2 = styled.div`
display: flex;
justify-content: space-evenly;

img{
    height: 5vh;
    border-radius: 10%;
}
`

//-----Estilização do Sobre

export const Sobre = styled.main`
    display: flex;
    justify-content: space-evenly;
`

export const Estudos = styled.section`
    width: 30vw;
    height: 50vh;
    border: solid red;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Habilidades = styled.section`
    width: 30vw;
    border: solid red;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

div{
    display: flex;
    align-items: center;

}

img{
    height: 8vh;
}
`

export const Profissional = styled.section`
width: 30vw;
border: solid red;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
background-image: url("");

h2{
    text-align: center;
}
`
    
