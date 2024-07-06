import React from "react"
import Vnw from "./Imagens/vnw.png"
import Senai from "./Imagens/FirjanSENAI-01.png"
import Css from "./Imagens/css.png"
import Html from "./Imagens/html.png"
import Js from "./Imagens/javascript.png"
import SQL from "./Imagens/sql1.png"
import Java from "./Imagens/java.png"
import Phyton from "./Imagens/python.png"

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
                    <img src={Vnw} alt="Logo do Vai na Web" />

                <div>
                    <h2>Desenvolvimento Back-End</h2>
                    <h2>JULHO/2023 - DEZ/2023</h2>
                </div>
                    <img className="LogoSenai" src={Senai} alt="Logo do Senai" />

                <div>
                    <h2>Técnico em Informática</h2>
                    <h2>AGO/2023 - DEZ/2024</h2>
                </div>
                    <img className="LogoSenai" src={Senai} alt="Logo do Senai" />
                    
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

                <div>
                    <img src={SQL} alt="" />
                    <h3>SQL</h3>
                </div>

                <div>
                    <img src={Phyton} alt="" />
                    <h3>Python</h3>
                </div>

                <div>
                    <img src={Java} alt="" />
                    <h3>Java</h3>
                </div>
            </S.Habilidades>

            
        </S.Sobre>
    )
}

export default Sobre