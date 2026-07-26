import OpcoesNav from "../opcoesNav";
import Logo from "../logo";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: #FFF;
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

function Header({ setLivrosFiltrados }) {
  return (
    <HeaderContainer>
      <HeaderLink to="/">
        <Logo/>
      </HeaderLink>
      <OpcoesNav setLivrosFiltrados={setLivrosFiltrados} />
    </HeaderContainer>
  );
}

export default Header;