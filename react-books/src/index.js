import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Cabeçalho/header';
import Favoritos from './rotas/Favoritos';
import { getLivros } from './servicos/livros';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}  
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);

useEffect(() => {
  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivrosFiltrados(livrosDaAPI);
  }
  fetchLivros();
}, []);

  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Header setLivrosFiltrados={setLivrosFiltrados} />
        <Routes>
          <Route path='/favoritos' element={<Favoritos livrosFiltrados={livrosFiltrados} setLivrosFiltrados={setLivrosFiltrados} />} />
          <Route path='/' element={<Home livrosFiltrados={livrosFiltrados} setLivrosFiltrados={setLivrosFiltrados} />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
