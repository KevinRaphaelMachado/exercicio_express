const express = require('express');
const app = express();
const porta = 3000;
// req e res (requisição e resposta)colocado por necessitar de 2 parametros.
app.get('/', (req, res) => {
    res.send("bem vindo")
})

app.get('/criacao/:nome/:idade/:curso', (req, res) => {
    req.params;
    res.send(`Seja bem vindo ${req.params.nome} voce tem ${req.params.idade} anos e esta cadastrado no curso de ${req.params.curso}`)    
})


app.listen(porta, () => {
    console.log(`o servidor iniciou a porta ${porta}`);
});
