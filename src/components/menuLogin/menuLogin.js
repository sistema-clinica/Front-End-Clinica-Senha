import Logo from '../../assets/images/Vector.png';
import styles from './menuLogin.module.css';
import {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {fazerLogin} from "../../services/apiServices";

function MenuLogin() {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    const HandleLogin = () => {
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
