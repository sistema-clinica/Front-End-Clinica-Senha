import Logo from './img/Vector.png';
import styles from './menuLogin.module.css';

function MenuLogin() {
    return (
        <div className={styles.quadradoLogin}>
            <div className={styles.logoLogin}>
                <img src={Logo} alt="Logo" />
                <h3>Bem vindo</h3>
            </div>
            <div className={styles.inputLogin}>
                <input
                    type='text'
                    placeholder='afadfal@gmail.com'
                ></input>
                <input
                    type='password'
                    placeholder='senha'
                ></input>
            </div>
            <div className={styles.botaoLogin}>
                <button>
                    Login
                </button>
            </div>
        </div>
    );
}

export default MenuLogin;
