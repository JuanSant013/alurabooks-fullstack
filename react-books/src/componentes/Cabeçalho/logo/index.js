import logo from '../../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    
    h1 {
    margin-top: 25px;
    }
`
const LogoImg = styled.img`
    height: 75px;
    margin: 10px;
`

function Logo() {
    return (
        <LogoContainer>
          <LogoImg src={logo} alt="logo"/>
          <h1><strong>Alura</strong>Books</h1>
        </LogoContainer>
    )
}

export default Logo;