import React from "react"
import Perfil from "./Imagens/perfil.jpg"
import Instagram from "./Imagens/instagram1.png"
import GitHub from "./Imagens/github.png"
import Linkedin from "./Imagens/linkedin1.png"
import * as S from "./Style.jsx"
import { Link } from "react-router-dom"

function Inicio(){
    return(
        <S.SectionInicio>

            <img src={Perfil} alt="Foto de Perfil" />
            <S.ContainerDivs>
                <S.BoxInicio>
                    
                        <h2>Olá, sou a Ana!</h2>
                   
                </S.BoxInicio>
                <S.BoxInicio2>
                <a href="https://github.com/AnaGomes-1"><img className="redesSociais" src={GitHub} alt="Logo do GitHub" /></a>
                <a href="https://www.linkedin.com/in/ana-beatriz-gomes-62b52070/"><img className="redesSociais" src={Linkedin} alt="Logo do Linkedin" /></a>
                <a href="https://www.instagram.com/sweetieab/"><img className="redesSociais" src={Instagram} alt="Logo do Instagram" /></a>
                </S.BoxInicio2>
            </S.ContainerDivs>


        </S.SectionInicio>
    )
}

export default Inicio