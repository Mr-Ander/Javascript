import http from 'http';

const porta = 3000;

// Cria o servidor HTTP e trata rotas básicas
const servidor = http.createServer((req, res) => {
    // Obtém a URL e o método da requisição
    const url = req.url || '/';
    const metodo = req.method || 'GET';

    // Normaliza o caminho (remove query string, se existir)
    const caminho = url.split('?')[0];

    // Função auxiliar para enviar resposta com status e conteúdo HTML
    function enviarResposta(status, html) {
        res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
    }

    // Roteamento simples
    if (caminho === '/' && metodo === 'GET') {
        enviarResposta(200, '<h1>Bem-vindo à página inicial!</h1>');
    } else if (caminho === '/sobre' && metodo === 'GET') {
        enviarResposta(200, '<h1>Sobre nós</h1><p>Esta é a página sobre nós.</p>');
    } else if (caminho === '/contato' && metodo === 'GET') {
        enviarResposta(200, '<h1>Fale conosco</h1><p>Envie um e-mail para contato@exemplo.com</p>');
        } else if (caminho === '/fotos' && metodo === 'GET') {
            enviarResposta(200, '<h1>Fotos</h1><p>Galeria de fotos.</p>');
        } else if (caminho === '/imagens' && metodo === 'GET') {
            // Página de exemplo com imagens externas (placeholders)
            const html = `
                <h1>Imagens</h1>
                <p>Exemplos de imagens externas:</p>
                <div style="display:flex;gap:12px;flex-wrap:wrap;">
                    <div><img src="https://placekitten.com/240/160" alt="Gatinho" style="max-width:240px;border-radius:8px;"/><p>Gatinho</p></div>
                    <div><img src="https://picsum.photos/240/160" alt="Paisagem" style="max-width:240px;border-radius:8px;"/><p>Paisagem</p></div>
                    <div><img src="https://placebear.com/240/160" alt="Urso" style="max-width:240px;border-radius:8px;"/><p>Urso</p></div>
                </div>
                <p><a href="/">Voltar à página inicial</a></p>
            `;
            enviarResposta(200, html);
        } else {
            enviarResposta(404, '<h1>404 - Página não encontrada</h1>');
        }
    });
    
    servidor.listen(porta, () => {
        console.log(`Servidor rodando em http://localhost:${porta}`);
    });