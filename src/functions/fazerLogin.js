function fazerLogin(usuario, senha) {
    const apiUrl = 'http://ec2-3-85-49-103.compute-1.amazonaws.com:8080/login';

    const dadosUsuario = {
        usuario: usuario,
        senha: senha
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosUsuario)
    };

    return fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha na solicitação');
            }
            return response.json();
        })
        .then(data => {
            return data.token;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

export default fazerLogin;