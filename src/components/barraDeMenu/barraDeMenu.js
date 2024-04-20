import React from 'react';
import Logo from '../../assets/images/Vector3.png';
import Saida from '../../assets/images/IconSair.png';
import styles from './barraDeMenu.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CadastroPaciente from '../cadastroPaciente/cadastroPaciente';

function BarraDeMenu() {
    const [modalOpen, setModalOpen] = useState(false);
    const navegete = useNavigate();

    const handleNavigate = (route) => {
        navegete(route);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <nav className={styles.nav}>
            <div className={styles.logoMenu}>
                <img src={Logo} alt="Logo" />
                <h2>Clínica Médica</h2>
            </div>
            <ul>
                <li><a href="" onClick={() => handleNavigate('/')}>Menu Principal</a></li>
                <li><a href="" onClick={() => handleNavigate('/painel/senhas')}>Painel de Senhas</a></li>
                <li><a onClick={toggleModal}>Novo Paciente</a></li>
                <li><a href="">Triagem</a></li>
                <li><a href="" onClick={() => handleNavigate('/cadastro')}>Novo Admin</a></li>
                <li><a href="" onClick={() => handleNavigate('/login')}><img src={Saida} alt="Saida"/></a></li>
            </ul>
            <CadastroPaciente isOpen={modalOpen}  onClose={toggleModal}/>
        </nav>
    );
}

export default BarraDeMenu;
