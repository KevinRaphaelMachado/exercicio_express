function soma(body)
{
    return (parseFloat(body.n1) + parseFloat(body.n2));

}

function subtrair(body) {
    return (parseFloat(body.n1) - parseFloat(body.n2));
    
}

function multiplicar(body) {
    return (parseFloat(body.n1) * parseFloat(body.n2));
}

function dividir(body) {
    return (parseFloat(body.n1) / parseFloat(body.n2))
    
}
module.exports = {
    soma,
    subtrair,
    multiplicar,
    dividir
}