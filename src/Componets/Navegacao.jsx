import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import Galeria from "./Galeria.jsx"
import * as S from "./Style.jsx"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

//BrowserRouter: Sempre será o primeiro, a função dele é ser a caixa que vai englobar/envolver todo o caminho (rotas).

//Routes: Dentro  dessa caixa é onde começaremos a arquitetar os nossos caminhos. Determina para onde cada rota vai. <Routes> <Route/> </Routes>

//Route: <Route /> Específico para cada rota, uma Route para cada - Sobre, Início e Projetos.

//Link: Quando eu clicar em um lugar espec[ifico me leve para outro lugar "dentro da minha própria página", o Link vai dentro da li.

function Navegacao(){
    return(
        <BrowserRouter>
            <S.Nav>
                <S.Ul>

                    <li> <Link to="/"> Início</Link></li>
                    <li><Link to="/Sobre"> Sobre</Link></li>
                    <li><Link to="/Projetos"> Projetos</Link></li>
                    <li><Link to="/Galeria"> Galeria</Link></li>

                </S.Ul>
            </S.Nav>

            <Routes>
            
                <Route path="/" element={<Inicio/>} />
                <Route path="Sobre" element={<Sobre/>} />
                <Route path="Projetos" element={<Projetos/>} />
                <Route path="Galeria" element={<Galeria/>} />

            </Routes>
        </BrowserRouter>

    )

}

export default Navegacao