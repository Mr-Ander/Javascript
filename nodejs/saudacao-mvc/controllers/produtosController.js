// Controller de produtos
// Fornece rotas que servem as páginas (HTML) e uma pequena API em memória

let produtos = [
	{ id: 1, nome: 'Camiseta Azul', preco: 49.9 },
	{ id: 2, nome: 'Camiseta Branca', preco: 39.9 }
];

let nextId = produtos.length + 1;

module.exports = {
	// Renderiza a página principal de produtos
	produtos: (req, res) => {
		res.sendFile('produtos.html', { root: './views' });
	},

	// Renderiza a página de camisetas
	camisetas: (req, res) => {
		res.sendFile('camisetas.html', { root: './views' });
	},

	// Formulário de cadastro (página)
	formcadproduto: (req, res) => {
		res.sendFile('cadastrar.html', { root: './views' });
	},

	// Recebe submissão do formulário (HTML) — simples resposta de confirmação
	cadastro: (req, res) => {
		const { nome, preco, quantidade, descricao } = req.body;
		if (!nome || !preco) {
			return res.status(400).send('Campos "nome" e "preco" são obrigatórios.');
		}
		const produto = { id: nextId++, nome, preco: Number(preco) };
		produtos.push(produto);
		// Após cadastrar, redireciona para a lista de produtos (página)
		res.redirect('/produtos');
	},

	// --- API JSON ---
	// Lista todos os produtos
	listar: (req, res) => {
		res.json(produtos);
	},

	// Mostra um produto por id
	mostrar: (req, res) => {
		const id = Number(req.params.id);
		const produto = produtos.find(p => p.id === id);
		if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
		res.json(produto);
	},

	// Cria um novo produto (JSON)
	criar: (req, res) => {
		const { nome, preco } = req.body;
		if (!nome || preco === undefined) {
			return res.status(400).json({ error: 'Campos "nome" e "preco" são obrigatórios' });
		}
		const produto = { id: nextId++, nome, preco: Number(preco) };
		produtos.push(produto);
		res.status(201).json(produto);
	},

	// Atualiza um produto por id
	atualizar: (req, res) => {
		const id = Number(req.params.id);
		const produto = produtos.find(p => p.id === id);
		if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });

		const { nome, preco } = req.body;
		if (nome !== undefined) produto.nome = nome;
		if (preco !== undefined) produto.preco = Number(preco);

		res.json(produto);
	},

	// Deleta um produto por id
	deletar: (req, res) => {
		const id = Number(req.params.id);
		const index = produtos.findIndex(p => p.id === id);
		if (index === -1) return res.status(404).json({ error: 'Produto não encontrado' });
		produtos.splice(index, 1);
		res.status(204).send();
	}
};

