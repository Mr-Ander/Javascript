const clientesModel = require('../models/clientesModel');

module.exports = {
     formLogin: (req, res) => {
    res.sendFile('formLogin.html', { root: './views' });
  },
listarClientes: (req, res) => {
    const { login, senha } = req.body;
    const mensagemAcesso = clientesModel.verrificarlogin(login, senha);
    res.send(`<h1>${mensagemAcesso}</h1>`);
    }
};