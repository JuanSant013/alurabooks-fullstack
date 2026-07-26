const { Router } = require("express")
const { getFavoritos, postFavoritos, deleteFavorito } = require("../Controladores/favoritos")


const router = Router()

router.get('/', getFavoritos)

router.post('/:id', postFavoritos)

router.delete('/:id', deleteFavorito)

module.exports = router