import { useState } from 'react';
import BarraDeMenu from '../../components/barraDeMenu/barraDeMenu';
import './menu-principal.css'
import Botao from '../../components/botao/botao';
import Novo from './img/novo.png'
import CadastroPaciente from '../../components/cadastroPaciente/cadastroPaciente';

function MenuPricipal() {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return(
        <div className='menuTotal'>
            <BarraDeMenu/>
            <div className='menuConteudo'>
                <Botao text='Novo Paciente' imagem={Novo} onClick={toggleModal}/>
                <CadastroPaciente isOpen={modalOpen}  onClose={toggleModal}/>
            </div>
        </div>

    );
}

