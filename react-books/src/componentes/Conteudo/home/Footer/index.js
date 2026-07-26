import styled from "styled-components";
import LivrosRecomendados from "../LivrosRecomendados/LivrosRecomendados";
import CardRercomenda from "../CardRecomenda/Index";  
import LivroRecomenda from "../../../../imagens/livro2.png";
import { Titulo } from "../titulos/index";

export const ConteudoContainer = styled.footer`
    background-color: #e6e6e6;
    border-radius: 12px;
    align-items: center;
    width: 60%;
    height: 98%;
    margin: 10px 0px;
`;

function Conteudo({ livrosFiltrados, titulo }) {
    return (
        <ConteudoContainer>
            <Titulo
            Sombreamento="0 4px 6px rgba(0, 0, 0, 0.25)"
            Arredondamento="10px 10px 0 0">
            
            {titulo}
            </Titulo>
            <LivrosRecomendados livrosFiltrados={livrosFiltrados} />
            <CardRercomenda
                titulo="Mais Vendido"
                subtitulo="Angular 11"
                descricao="Constuindo uma aplicação com a plataforma do Google."
                img={LivroRecomenda}
            />
        </ConteudoContainer>
    )
}

export default Conteudo;