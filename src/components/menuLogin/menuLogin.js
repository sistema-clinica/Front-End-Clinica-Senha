import Logo from '../../assets/images/Vector.png';
import styles from './menuLogin.module.css';
import {useState} from 'react';
import {fazerLogin} from "../../services/apiServices";
import { useNavigate } from 'react-router-dom';

function MenuLogin() {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState('')
    const navegete = useNavigate();

    const handleNavigate = (route) => {
        navegete(route);
    };


    const HandleLogin = async () => {
        const dadosUsuario = {
            username: username,
            senha: senha
        };

        try {
            const response = await fazerLogin(dadosUsuario);
            setToken(response.token);
            localStorage.setItem('token', response.token);
            handleNavigate('/');
        } catch (error) {
            console.log(error);
            alert('SENHA ou USUARIO incoretos')
        }
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
                <button onClick={HandleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default MenuLogin;
