import React from 'react';
import Logo from './img/Vector.png';
import styles from './menuCadastro.module.css'; // Importando o arquivo de módulo CSS

const MenuCadastro = () => {
    return (
        <div className={styles.quadradoCadastro}>
            <div className={styles.logoCadastro}>
                <img src={Logo} alt="Logo" />
                <h3>Cadastre um novo administrador</h3>
            </div>
            <div className={styles.inputCadastro}>
                <input
                    type='text'
                    placeholder='Digite seu e-mail'
                ></input>
                <input
                    type='password'
                    placeholder='Digite sua senha'
                ></input>
                <input
                    type='password'
                    placeholder='Confirme sua senha'
                ></input>
            </div>
            <div className={styles.botaoCadastro}>
                <button>
                    Cadastrar
                </button>
            </div>
        </div>
    );
}

export default MenuCadastro;
