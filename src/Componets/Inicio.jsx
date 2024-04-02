import React from "react"
import Perfil from "./Imagens/penelope.png"
import Instagram from "./Imagens/instagram.png"
import Facebook from "./Imagens/facebook.png"
import Linkedin from "./Imagens/linkedin.png"
import * as S from "./Style.jsx"
import { Link } from "react-router-dom"

function Inicio(){
    return(
        <S.SectionInicio>

            <img src={Perfil} alt="Foto de Perfil" />
            <S.ContainerDivs>
                <S.BoxInicio>
                    <h2>Olá, sou a Penelope!</h2>
                </S.BoxInicio>
                <S.BoxInicio2>
                <img src={Instagram} alt="Logo do Instagram" />
                <img src={Facebook} alt="Logo do Facebook" />
                <img src={Linkedin} alt="Logo do Linkedin" />
                </S.BoxInicio2>
            </S.ContainerDivs>


        </S.SectionInicio>
    )
}

export default Inicio