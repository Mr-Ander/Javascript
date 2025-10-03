// Função de soma, aceita três números
export function soma(num1, num2, num3) {
    return num1 + num2 + num3;
}

// Função de subtração
export function subtrai(a, b) {
    return a - b;
}

// Função de multiplicação
export function multiplica(a, b) {
    return a * b;
}

// Função de divisão, retorna erro se tentar dividir por zero
export function divide(a, b) {
    return b === 0 ? 'Erro: Divisão por zero' : a / b;
}