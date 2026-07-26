import Conteudo from '../componentes/Conteudo/home/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: linear-gradient(90deg,#002F52 35%,#326589 165%);
  justify-content: center;
  overflow: hidden;
  display: flex;
  width: 100vw;
  height: 84.8vh;
`

function Home({ livrosFiltrados }) {
  const titulo = livrosFiltrados.length === 0 ? "CARREGANDO..." : "ULTIMOS LANÇAMENTOS";

  return (
    <AppContainer>
      <Conteudo livrosFiltrados={livrosFiltrados} titulo={titulo} />
    </AppContainer>
  );
}

export default Home;