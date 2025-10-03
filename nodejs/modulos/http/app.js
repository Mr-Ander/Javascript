// Importa o módulo nativo 'http' do Node.js
// Este módulo permite criar servidores web e manipular requisições HTTP
const http = require('http');
// Cria um servidor HTTP utilizando o método createServer
// O método createServer recebe uma função callback que será chamada toda vez que o servidor receber uma requisição
// A função callback recebe dois parâmetros:
//   - req: representa a requisição feita pelo cliente (contém informações como URL, método, cabeçalhos, etc)
//   - res: representa a resposta que será enviada de volta ao cliente
http.createServer((req, res) => {
    // Define o cabeçalho da resposta:
    // - Status 200 indica que a requisição foi bem-sucedida
    // - 'Content-Type': 'text/plain' informa que o conteúdo retornado será texto simples
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Envia o corpo da resposta para o cliente
    // Neste exemplo, retorna o texto 'hello world' para qualquer requisição recebida
    res.end('hello world');
    // Após chamar res.end(), a resposta é finalizada e enviada ao cliente
    // O ciclo de vida da requisição termina aqui para cada chamada
// O servidor começa a escutar na porta 8080
// O método listen faz com que o servidor fique aguardando requisições na porta especificada (8080)
// Quando o servidor está rodando, qualquer requisição feita para http://localhost:8080 será tratada pela função callback acima
// Para acessar, abra o navegador e digite: http://localhost:8080
}).listen(8080);