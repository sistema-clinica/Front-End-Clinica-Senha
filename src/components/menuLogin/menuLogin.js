import Logo from './img/Vector.png';
import styles from './menuLogin.module.css';
import { url } from '../../services/fumcoes';
import { useState } from 'react';

function MenuLogin() {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        const dadosUsuario = {
            username: username,
            senha: senha
        };

        fetch(url + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosUsuario)
        })
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Erro ao fazer login');
            }
            return resp.json();
        })
        .then(data => {
            console.log('Token JWT:', data.token);
        })
        .catch(err => {
            alert('Erro ao fazer o login')
            console.error(err);
        });
    };

    return (
        <div className={styles.quadradoLogin}>
            <div className={styles.logoLogin}>
                <img src={Logo} alt="Logo" />
                <h3>Bem vindo</h3>
            </div>
            <div className={styles.inputLogin}>
                <input
                    type='text'
                    placeholder='Nome de usuário'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                    type='password'
                    placeholder='Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                ></input>
            </div>
            <div className={styles.botaoLogin}>
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default MenuLogin;
