const express = require('express');
const app = express();
const porta = 4000;
const op = require('./modulo.js');

app.use(express.json())

app.get('/calculadora/somar', (req, res) => {

    const result = op.soma(req.body)

    res.send(`A soma é: ${result}`);
})

app.get('/calculadora/subtrair', (req, res) => {

    const result = op.subtrair(req.body)

    res.send(`A subtração é: ${result}`);
})

app.get('/calculadora/multiplicar', (req, res) => {

    const result = op.multiplicar(req.body)

    res.send(`A multiplicação é: ${result}`);
})

app.get('/calculadora/divisao', (req, res) => {

    const result = op.dividir(req.body)

    res.send(`A divisão é: ${result}`);
})

app.listen(porta, () => {
    console.log(`O servidor iniciou na porta ${porta}`);
})