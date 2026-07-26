import { useEffect, useState } from "react";
import Input from "../input_style";
import styled from "styled-components";
import { getLivros } from "../../../servicos/livros";

function Pesquisa({ setLivrosFiltrados }) {
    const [ livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }
 
    return (
        <section>
            <Input 
                placeholder="O que você está procurando?"
                onBlur={evento => {
                    const textoDigitado = evento.target.value;
                    const livrosPesquisados = livros.filter( livro => livro.nome.includes(textoDigitado));
                    setLivrosFiltrados(livrosPesquisados);
                }}
             />
        </section>
    )
}

export default Pesquisa;