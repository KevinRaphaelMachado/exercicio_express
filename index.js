const express = require('express');
const app = express();
const porta = 3000;
// req e res (requisição e resposta)colocado por necessitar de 2 parametros.
app.get('/', (req, res) => {
    res.send("hello word")
})

app.get('/segundarota', (req, res) => {
    res.send("segunda rota")    
})

app.get('/prime-day/:produto', (req, res) => {
req.params;
res.send(req.params.produto)
res.send(`o produto comprado foi: ${req.params.produto}`);  
})

app.listen(porta, () => {
    console.log(`o servidor iniciou a porta ${porta}`);
});








