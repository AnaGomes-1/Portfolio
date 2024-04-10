import React from "react"
import Fantastika from "./Imagens/fantastika.png"
import Witcher from "./Imagens/thewitcher.png"
import Primeiro from "./Imagens/primeiro_projeto.png"
import Cartoon from "./Imagens/cartoon.png"
import * as S from "./Style.jsx"
import Carousel from "nuka-carousel";

function Projetos(){

    const imagens = [
        {imagem: Fantastika, titulo: "Fantastika", link: "https://www.bing.com/", descricao:"HTML, CSS, Responsivo"},
        {imagem: Witcher, titulo: "The Witcher", link: "https://www.bing.com/", descricao:"react, map, styled-components, useState, useEffect, filter"},
        {imagem: Primeiro, titulo: "Primeiro Projeto", link: "https://www.bing.com/", descricao:"Lógica - JS"},
        {imagem: Cartoon, titulo: "Cartoon Network", link: "https://www.bing.com/", descricao:"html, css, position"}
    ]

    const Carrosel = {
        width: "99vw",
        heigth: "80vh",
        backgroundColor: "black",
    };

    const params = {
        wrapAround: true,
        animation: 'zoom',
        slidesToShow: 1, //de 3 em 3 imagens
        style: Carrosel,
        autoplay: true, //passar sozinho
        autoplayInterval: 3000, //passar de 3 em 3 seguntos automático
        cellAlign: 'left',
        swiping: true, //arrastar o carousel,
        zoomScale: 0.85,
        className: 'teste',
    
        defaultControlsConfig: {
    
          nextButtonText: '»',
          nextButtonStyle: {
            //position:"relative",
            // top:"-6.5vh",
            marginRight: '3.8vw',
            // color: "#ffffff",
            color: 'red',
            fontSize: '192px',
            backgroundColor: 'transparent',
            width: '2vw',
            // height: '8vh',
            fontFamily: "Inconsolata",
          },
    
          prevButtonText: '«',
          prevButtonStyle: {
            // position: "relative",
            // top:"-6.5vh",
            // color: "#ffffff",
            color: 'red',
            fontSize: '192px',
            backgroundColor: 'transparent',
            width: '2vw',
            // height: '8vh', 
            fontFamily: "Inconsolata",
            Dots: "red",
            
          },
        }
    
      }


    return(
       <>
            <Carousel {...params}>
                {desafios.map((item) =>(
                    <div>
                    <a href={item.link} target="_blank">   <img src={item.imagem} alt={item.titulo} /> </a>
                    <h2>{item.titulo}</h2>
                    <h2>{item.descricao}</h2>
                </div>
                ))}
            
            </Carousel>
       </>
    )
}

export default Projetos