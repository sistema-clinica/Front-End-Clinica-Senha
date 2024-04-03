import MenuLogin from '../../components/menuLogin/menuLogin';
import styles from './login.module.css';
import Onda from './image/Ondulação_Footer.png';

function Login() {
    return (
        <main className={styles.login}>
            <div className={styles.subQuadradoLogin}>
                <MenuLogin/>
                <div className={styles.cabesalhoLogin}>
                    <div className={styles.tituloLogin}>
                        <h1>Página de Login</h1>
                    </div>
                    <h2>Painel de gerenciamento de senhas para clínica médica</h2>
                </div>
            </div>
            <div className={styles.imagemBaixo}>
                <img src={Onda} alt='Onda'/>
            </div>
        </main>
    );
}

export default Login;
