import styled from "styled-components";
import LivrosRecomendados from "../../home/LivrosRecomendados/LivrosRecomendados";
import { Titulo } from "../../home/titulos/index";

export const ConteudoContainer = styled.footer`
    background-color: #e6e6e6;
    border-radius: 12px;
    align-items: center;
    width: 60%;
    height: 98%;
    margin: 10px 0px;
`;

function ConteudoFav({ livrosFiltrados, titulo }) {
    return (
        <ConteudoContainer>
            <Titulo
            Sombreamento="0 4px 6px rgba(0, 0, 0, 0.25)"
            Arredondamento="10px 10px 0 0">
            
            {titulo} SEUS FAVORITOS:
            </Titulo>
        </ConteudoContainer>
    )
}

export default ConteudoFav;