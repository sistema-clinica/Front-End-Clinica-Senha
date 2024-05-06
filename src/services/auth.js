// Função para verificar o token JWT
function verificarToken() {
    const token = localStorage.getItem('token'); // Recupere o token armazenado no localStorage
    if (!token) {
        // Se o token não estiver presente, redirecione para a página de login
        window.location.href = '/login';
        return false;
    }

    // Verifique se o token é válido (pode depender da biblioteca que você está usando para JWT)
    const tokenExpirado = verificarSeTokenExpirou(token); // Implemente esta função de acordo com a sua lógica
    if (tokenExpirado) {
        // Se o token estiver expirado, redirecione para a página de login
        window.location.href = '/login';
        return false;
    }

    return true; // O token é válido
}

// Função para verificar se o token JWT expirou (exemplo)
function verificarSeTokenExpirou(token) {
    // Implemente a lógica para decodificar o token JWT e verificar se está expirado
    // Por exemplo, se você estiver usando a biblioteca jsonwebtoken, pode fazer algo assim:
    const jwt = require('jsonwebtoken'); // Importe a biblioteca jsonwebtoken

    try {
        const tokenDecodificado = jwt.verify(token, 'seu_segredo'); // Decodifique o token com sua chave secreta
        const dataExpiracao = tokenDecodificado.exp; // Obtenha a data de expiração do token
        const dataAtual = Math.floor(Date.now() / 1000); // Obtenha a data atual em segundos

        return dataExpiracao < dataAtual; // Retorna verdadeiro se o token estiver expirado
    } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return true; // Trate o erro como se o token estivesse expirado
    }
}

// Verificar o token JWT em cada rota
router.addListener('navigate', (location) => {
    if (location.pathname !== '/login') {
        verificarToken(); // Verifique o token JWT em todas as rotas, exceto /login
    }
});
