import perfil from '../../../imagens/perfil.svg';
import sacola from '../../../imagens/sacola.svg';
import styled from 'styled-components';
import Pesquisa from '../pesquisa';
import { Link } from 'react-router-dom';

const OpcoesContainer = styled.nav`
  background-color: #a3c6e4;
  justify-content: space-between;
  align-items: center;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  height: 100%;
  padding: 5px;
`

const NavegacaoLi = styled.div`
  display: flex;
  align-items: center;
  li {
    cursor: pointer;
    padding: 2px 5px;
    margin: 0px 13px;
    transition: color 0.2s ease;
    &:hover {
      color: #2877b3;
    }
  }
`
const NavegacaoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`


const TextoOpcoes = ['FAVORITOS', 'CATEGORIAS', 'ASSINATURAS', 'ESTANTE'];
const icones = [perfil, sacola];

function OpcoesNav({ setLivrosFiltrados }) {
    return (
        <OpcoesContainer>
          <NavegacaoLi>
            {TextoOpcoes.map((texto) => (
              <NavegacaoLink key={texto} to={`/${texto.toLowerCase()}`}>
                <li><p>{texto}</p></li>
              </NavegacaoLink>
              ))}
          </NavegacaoLi>
          
          <NavegacaoLi>
            <Pesquisa setLivrosFiltrados={setLivrosFiltrados} />
            {icones.map((icone) => (<li><img src={icone} alt="Ícone" /></li>))}
          </NavegacaoLi>
        </OpcoesContainer >
    )
}

export default OpcoesNav;