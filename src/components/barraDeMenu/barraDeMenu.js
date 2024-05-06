import React, {useContext, useState} from 'react';
import Logo from '../../assets/images/Vector3.png';
import Saida from '../../assets/images/IconSair.png';
import styles from './barraDeMenu.module.css';
import {Link} from 'react-router-dom';
import CadastroPaciente from '../cadastroPaciente/cadastroPaciente';
import {Context} from "../../context/AuthContext";

function BarraDeMenu() {
    const [modalOpen, setModalOpen] = useState(false);
    const { handleLogout } =  useContext(Context)

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
                <li><Link to={"/"}>Menu Principal</Link></li>
                <li><Link to={"/painel/senhas"}>Painel de Senhas</Link></li>
                <li><a onClick={toggleModal}>Novo Paciente</a></li>
                <li><a>Triagem</a></li>
                <li><Link to={"/cadastro"}>Novo Admin</Link></li>
                <li><a onClick={handleLogout}><img src={Saida} alt="Saida"/></a></li>
            </ul>
            <CadastroPaciente isOpen={modalOpen} onClose={toggleModal}/>
        </nav>
    );
}

export default BarraDeMenu;
