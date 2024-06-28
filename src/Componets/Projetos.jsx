import React from "react";
import * as S from "./Style";

import Loja from "./Imagens/lojinha.png";
import Witcher from "./Imagens/thewitcher.png";
import Cartoon from "./Imagens/lojinha.png";
//import Loja from "./Imagens/lojinha.png";
//import Loja from "./Imagens/lojinha.png";
//import Loja from "./Imagens/lojinha.png";

function Projetos() {
  return (
    <S.SectionProjetos>
      <S.Projetos>
        <img src={Loja} alt="Loja da Beca" />
        <h2>Loja da Bia</h2>
        <h3>HTML, CSS, Javascript BootStrap</h3>
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Visite a Loja
        </a>
      </S.Projetos>

        <S.Projetos>
          <img src={Witcher} alt="" />
          <h2>The Witcher</h2>
          <h3>HTML, CSS</h3>
          <a href="" target="_blank" rel="noopener noreferrer">Visite o site</a>
        </S.Projetos>

          <S.Projetos>
            <img src={Cartoon} alt="" />
            <h2>Cartoon Network</h2>
            <h3>HTML, CSS E JAVASCRIPT</h3>
            <a href="" target="_blank" rel="noopener noreferrer">Visite o codigo</a>
          </S.Projetos>

          {/* <S.Projetos>
            <img src={TheWitcher} alt="" />
            <h2>The Witcher</h2>
            <h3>HTML, CSS</h3>
            <a href="" target="_blank" rel="noopener noreferrer">Visite o site</a>
          </S.Projetos>

          <S.Projetos>
            <img src={Disney} alt="" />
            <h2>Disney</h2>
            <h3>HTML, CSS</h3>
            <a href="" target="_blank" rel="noopener noreferrer">Visite o site</a>
          </S.Projetos> */}

    </S.SectionProjetos>
  );
}

export default Projetos;