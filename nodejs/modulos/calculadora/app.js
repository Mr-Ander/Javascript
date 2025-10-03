// Importa as funções matemáticas do módulo 'funcoes_matematicas.js'
// Cada função realiza uma operação básica: soma, subtração, multiplicação e divisão
//const { soma, subtrai, multiplica, divide } = require('./funcoes_matematicas');
// Importa todas as funções do módulo 'funcoes_matematicas.js' como objeto 'funcoes'
import * as funcoes from './modulos/funcoes_matematicas.js';
// Importa todas as funções do módulo 'calculadora_idade.js' como objeto 'calculadora_idade'
import * as calculadora_idade from './modulos/calculadora_idade.js';

// Exemplos de uso das funções matemáticas:
// Chama a função soma passando 5 e 3 como argumentos
console.log('Soma:', funcoes.soma(5, 3));
// Chama a função subtrai passando 10 e 4 como argumentos
console.log('Subtração:', funcoes.subtrai(10, 4));
// Chama a função multiplica passando 2 e 7 como argumentos
console.log('Multiplicação:', funcoes.multiplica(2, 7));
// Chama a função divide passando 20 e 5 como argumentos
// A função divide retorna o resultado ou uma mensagem de erro se tentar dividir por zero
console.log('Divisão:', funcoes.divide(20, 5));

