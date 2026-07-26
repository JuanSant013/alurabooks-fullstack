import styled from "styled-components";
import {Titulo} from "../titulos";

const CardContainer = styled.div`
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 40px auto;
    max-width: 800px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
`;

const Botao = styled.button`
    background-color: #f3a704;
    color: #ffffff;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 146px;

    &:hover {
        cursor: pointer;
        background-color: #e59400;
    }
`;

const Descricao = styled.p`
    max-width: 300px;
`;

const Subtitulo = styled.h4`
    color: #002f52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`;

const imgLivro = styled.img`
    width: 150px;
`

function CardRecomenda({ titulo, subtitulo, descricao, img, }) {
    return (
        <CardContainer>
            <div>
                <Titulo display="flex">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <img src={img} alt={titulo} />
                <Botao>Saiba mais</Botao>
            </div>
        </CardContainer>
    )
}

export default CardRecomenda;