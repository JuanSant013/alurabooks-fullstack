import styled from "styled-components";
import imgLivro from "../../../../imagens/livro.png"
import { postFavorito } from "../../../../servicos/favoritos";

const LivrosContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 10px;
        cursor: pointer;
    }
`

function LivrosRecomendados({ livrosFiltrados }) {
    async function insertFavorito(id) {
        await postFavorito(id);
        alert(`Livro ${id} adicionado aos favoritos!`);
    }

    return (
        <LivrosContainer >
            { livrosFiltrados.slice(0, 4).map (livro => (
                <div key={livro.id} onClick={() => insertFavorito(livro.id)}>
                    <img src={imgLivro} alt={livro.nome} />
                    <p>{livro.nome}</p>
                </div>
             ))}
        </LivrosContainer>
    )
}

export default LivrosRecomendados;