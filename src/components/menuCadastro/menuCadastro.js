import React, { useState } from 'react';
import Logo from './img/Vector.png';
import styles from './menuCadastro.module.css';
import { url } from '../../services/fumcoes';

const MenuCadastro = () => {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleCadastro = () => {
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }

        const dadosUsuario = {
            username: username,
            senha: senha
        };

        fetch(url + '/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosUsuario)
        })
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Erro ao fazer cadastro');
            }
            return resp.json();
        })
        .then(data => {
            console.log('Token JWT:', data.token);
        })
        .catch(err => console.error(err));
    };

    return (
        <div className={styles.quadradoCadastro}>
            <div className={styles.logoCadastro}>
                <img src={Logo} alt="Logo" />
                <h3>Cadastre um novo administrador</h3>
            </div>
            <div className={styles.inputCadstro}>
                <input
                    type='text'
                    placeholder='Digite seu Usuário'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                    type='password'
                    placeholder='Digite sua senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                ></input>
                <input
                    type='password'
                    placeholder='Confirme sua senha'
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                ></input>
            </div>
            <div className={styles.botaoCadastro}>
                <button onClick={handleCadastro}>
                    Cadastrar
                </button>
            </div>
        </div>
    );
}

export default MenuCadastro;
