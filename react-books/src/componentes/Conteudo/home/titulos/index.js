import styled from "styled-components";

const ConteudoWrapper = styled.div`
  margin: 0;
  padding: 0;

  h1, h2, h3, h4, p {
    margin: 0;
  }
`;

export const Titulo = styled.h2`
    background-color: #ffffff;
    width: 100%;
    padding: 30px 0;
    margin: 0 auto 20px;
    display: ${props => props.display || 'block'};
    color: ${props => props.cor || '#EB9B00'};
    font-size: ${props => props.TamanhoFonte || '36px'};
    text-align: ${props => props.Alinhamento || 'center'};
    box-shadow: ${props => props.Sombreamento || 'none'};
    border-radius: ${props => props.Arredondamento || 'none'};
`