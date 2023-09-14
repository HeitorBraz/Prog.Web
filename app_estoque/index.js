const express = require('express')
const estoque = require('./estoque/estoque')
const app = express()

app.get("/api/estoque/cadastrar/:id/:nome/:qtd", function(req, res){
    let id = req.params.id
    let nome = req.params.nome
    let qtd = req.params.qtd
    let p = estoque.criar_produto(id, nome, qtd)
    estoque.adicionar_produto(p)
    res.json(p)
})

app.get("/api/estoque/listar", function(req, res){
    res.json(estoque.listar_produtos())
})

app.get("/api/estoque/editar/:id/:qtd", function(req, res){
    let id = res.params.id
    let qtd = res.params.qtd
    res.json(estoque.editar_produto(id, qtd))
})

const PORT = 8080
app.listen(PORT, function () {
    console.log("app rodando na porta: " + PORT)
})