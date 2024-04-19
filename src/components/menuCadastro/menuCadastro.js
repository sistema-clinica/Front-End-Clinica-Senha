import React, {useState} from 'react';
import Logo from '../../assets/images/Vector2.png';
import styles from './menuCadastro.module.css';
import {useQuery} from "@tanstack/react-query";
import {fazerLogin} from "../../services/apiServices";

const MenuCadastro = () => {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const HandleCadastro = () => {
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem');
        }

        const dadosUsuario = {
            username: username,
            senha: senha
        };

        const {data: token, isLoading, error} = useQuery({
            queryKey: "AdminLogin",
            queryFn: () => fazerLogin(dadosUsuario)
        })

        console.log(token)

        if (error) {
            console.log(error)
        }
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
                <button onClick={HandleCadastro}>
                    Cadastrar
                </button>
            </div>
        </div>
    );
}

export default MenuCadastro;
