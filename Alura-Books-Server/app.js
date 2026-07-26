const express = require('express');
const rotaLivro = require("./Rotas/Livro")
const rotaFavoritos = require("./Rotas/favoritos")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavoritos)

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);

})