module.exports = {
 verificarlogin: (login, senha ) => {
    let acesso;

    if (login === "Ander" && senha === "1234") {
      acesso = "logado";
    } else { 
      acesso = "negado";
    
    }

    return `Olá, ${login}, seu acesso foi ${acesso}.`;
  }
};
