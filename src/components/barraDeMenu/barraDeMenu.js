import React from 'react';
import Logo from './img/Vector.png';
import Saida from './img/IconSair.png';
import styles from './barraDeMenu.module.css';

function BarraDeMenu() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoMenu}>
                <img src={Logo} alt="Logo" />
                <h2>Clínica Médica</h2>
            </div>
            <ul>
                <li><a href="">Menu Principal</a></li>
                <li><a href="">Painel de Senhas</a></li>
                <li><a href="">Novo Paciente</a></li>
                <li><a href="">Triagem</a></li>
                <li><a href="">Novo Admin</a></li>
                <li><a href=""><img src={Saida} alt="Saida"/></a></li>
            </ul>
        </nav>
    );
}

export default BarraDeMenu;
