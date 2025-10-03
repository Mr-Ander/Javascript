// Importa o módulo nativo 'http' do Node.js para realizar requisições HTTP
const http = require('http');
// Realiza uma requisição GET para a URL especificada
http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
    let data = '';

    // Recebe os dados em pedaços (chunks) e acumula na variável 'data'
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Quando todos os dados forem recebidos, processa a resposta
    res.on('end', () => {
        try {
            // Converte a string recebida em objeto JSON
            const resultado = JSON.parse(data);
            console.log(resultado);
        } catch (erro) {
            // Caso ocorra erro na conversão, exibe mensagem de erro
            console.error('Erro ao converter resposta em JSON:', erro);
        }
    });

}).on('error', (err) => {
    // Trata erros de requisição
    console.error("Erro: " + err.message);
});