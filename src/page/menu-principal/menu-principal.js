import { useState } from 'react';
import BarraDeMenu from '../../components/barraDeMenu/barraDeMenu';
import './menu-principal.css'
import Botao from '../../components/botao/botao';
import Novo from './img/novo.png'
import CadastroPaciente from '../../components/cadastroPaciente/cadastroPaciente';
import Fila from '../../components/fila/fila';
import { getAtendimentoFila, getNaTriagem, getTriagemFila } from '../../services/apiServices';

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
                <Fila titulo={'Fila de Atendimento'} fucao={getAtendimentoFila}/>
                <Fila titulo={'Fila de Triagem'} fucao={getTriagemFila}/>
                <Fila titulo={'Em Triagem'} fucao={getNaTriagem}/>
            </div>
        </div>

    );
}

export default MenuPricipal;

