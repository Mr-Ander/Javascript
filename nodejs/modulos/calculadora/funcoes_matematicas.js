function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b  || 'Erro: Divisão por zero'; // Evitando divisão por zero
}


module.exports = {
    soma,
    subtrai,
    multiplica,
    divide
};