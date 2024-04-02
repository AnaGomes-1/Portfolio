import React from "react"
import Vnw from "./Imagens/vnw.png"
import Css from "./Imagens/css.png"
import Html from "./Imagens/html.png"
import Js from "./Imagens/javascript.png"
import Mic from "./Imagens/mic.png"
import * as S from "./Style.jsx"


function Sobre(){
    return(
        <S.Sobre>

            <S.Estudos>
                <h2>ESTUDOS</h2>
                <div>
                    <h2>Desenvolvimento Front-End</h2>
                    <h3>AGO/2023 - MAIO/2024</h3>
                </div>
                    <img src={Vnw} alt="" />
            </S.Estudos>

            <S.Habilidades>
                <h2>HABILIDADES</h2>
                <div>
                    <img src={Css} alt="" />
                    <h3>Css</h3>
                </div>

                <div>
                    <img src={Js} alt="" />
                    <h3>JavaScript</h3>
                </div>

                <div>
                    <img src={Html} alt="" />
                    <h3>HTML</h3>
                </div>
            </S.Habilidades>

            <S.Profissional>
                <h2>PROFISSIONAL</h2>
                    <h2>Cantora, compositora, produtora musicas e atriz</h2>
                    <img src={Mic} alt="" />
            </S.Profissional>

        </S.Sobre>
    )
}

export default Sobre