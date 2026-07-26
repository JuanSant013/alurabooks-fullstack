import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import livroImg from '../imagens/livro.png'
import { Titulo } from "../componentes/Conteudo/home/titulos/index"
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import ConteudoFav from '../componentes/Conteudo/favoritos/conteudo_favoritos';

const AppContainer = styled.div`
  background: linear-gradient(90deg,#002F52 35%,#326589 165%);
  position: absolute;
  width: 100vw;
  height: 84.8vh;

div {
  justify-content: center;
  overflow: hidden;
  display: flex;      
}
`
export const FavoritoContainer = styled.footer`
    background-color: #e6e6e6;
    border-radius: 12px;
    width: 60%;
    height: 98%;
    margin: 10px 0px;
`

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Resultado = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px;
  cursor: pointer;
`

function Favoritos() {
 const [favoritos, setFavoritos] = useState([])

async function fetchFavoritos() {
     const favoritosDaAPI = await getFavoritos()
     setFavoritos(favoritosDaAPI)
}

async function deletarFavorito(id) {
    await deleteFavorito(id)
    await fetchFavoritos(id)
    alert(`Livro ${id} removido dos favoritos!`)
}

useEffect(() => {
   fetchFavoritos()
}, [])

 return (
  <AppContainer>
  <div>
    <FavoritoContainer>
      <Titulo
      Sombreamento="0 4px 6px rgba(0, 0, 0, 0.25)"
      Arredondamento="10px 10px 0 0">
      
      SEUS FAVORITOS
      </Titulo>
      <ResultadoContainer>
        {
          favoritos.length !== 0 ? favoritos.map(favorito => (
            <Resultado key={favorito.id} onClick={() => deletarFavorito(favorito.id)}>
              <p>{favorito.nome}</p>
              <img src={livroImg} alt={favorito.nome} />
            </Resultado>
          )) : <p style={{ color: '#FFF' }}>Nenhum favorito encontrado.</p>
        }
      </ResultadoContainer>
    </FavoritoContainer>
  </div>
  </AppContainer>
 );
}

export default Favoritos;