const fs = require("fs")
const { json } = require("stream/consumers")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("favoritos.json", JSON.stringify(livroFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse (fs.readFileSync("livros.json"))
    const favoritos = JSON.parse (fs.readFileSync("favoritos.json"))

    const favoritoNovo = livros.find(livro => livro.id === id)
    const novaListaDeFavoritos = [...favoritos, favoritoNovo]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito

}