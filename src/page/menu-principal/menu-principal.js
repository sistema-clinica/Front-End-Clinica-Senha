import { useState } from 'react';
import BarraDeMenu from '../../components/barraDeMenu/barraDeMenu';
import Botao from '../../components/botao/botao';
import { IoIosAddCircleOutline  } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import CadastroPaciente from '../../components/cadastroPaciente/cadastroPaciente';
import Fila from '../../components/fila/fila';
import { getAtendimentoFila, getNaTriagem, getTriagemFila } from '../../services/apiServices';
import style from './menu-principal.module.css'
import {stompClient} from "../../services/webSocketService";
import { getUtimoPaciente, chamarPacienteAtendimento, chamarPacienteEspera } from '../../services/apiServices';
import ChamarGeral from '../../components/chamarGeral/chamarGeral';
import RealizarTriagem from '../../components/realizarTriagem/realizarTriagem';

function MenuPricipal() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const [modalOpen4, setModalOpen4] = useState(false);
    const [localAtendimento, setLocalAtendimento] = useState("")

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const toggleModal2 = () => {
        setModalOpen2(!modalOpen2);
    };

    
    const toggleModal3 = () => {
        setModalOpen3(!modalOpen3);
    };

    const toggleModal4 = () => {
        setModalOpen4(!modalOpen4);
    };

    const HandleChamarPaciente = async () => {
        try {
            const response = await getUtimoPaciente();
            setLocalAtendimento(response);
            stompClient.send('/painel', {}, JSON.stringify(response));
        } catch (error) {
            console.error('Erro ao obter a fila de atendimentos:', error);
        }
    };

    return(
        <div className={style.menuTotal}>
            <BarraDeMenu/>
            <div className={style.menuConteudo}>
                <div className={style.secaoBotao}>
                    <Botao text='Chamar triagem' icon={<IoIosAddCircleOutline />} onClick={toggleModal3} backgroundColor={"var(--azul-escuro)"}/>
                    <Botao text='Chamar atendimento' icon={<IoIosAddCircleOutline />} onClick={toggleModal2}/>
                    <Botao text='Realizar triagem' icon={<IoIosAddCircleOutline />} onClick={toggleModal4} backgroundColor={"var(--azul-escuro)"}/>
                    <Botao text='Chamar novamente' icon={<IoIosAddCircleOutline />} onClick={HandleChamarPaciente}/>
                    <Botao text='Novo Paciente' icon={<IoPersonAdd />} onClick={toggleModal} backgroundColor={"var(--azul-escuro)"}/>
                </div>
                <div className={style.secaoImfo}>
                    <div className={style.fila}> 
                        <Fila titulo={'Fila de Atendimento'} funcao={getAtendimentoFila}/>
                        <Fila titulo={'Fila de Triagem'} funcao={getTriagemFila}/>
                        <Fila titulo={'Em Triagem'} funcao={getNaTriagem}/>
                    </div>
                    <div className={style.imagem}>
                        <h2>Curar é mais do que tratar, é trazer esperança, conforto e confiança. </h2>
                    </div>
                </div>
            </div>
            <CadastroPaciente isOpen={modalOpen}  onClose={toggleModal}/>
            <ChamarGeral
             isOpen={modalOpen2}
             onClose={toggleModal2}
             titulo={'Selecione o local de atendimento'}
             placeholder={'Local de atendimento'}
             funcao={chamarPacienteAtendimento}
             titulo2={'Atendimento Finalizado'}
             tesxt={'O atendimento do paciente foi finalizado'}
             botao={'Chamar outro paciente para atendimento'}/>
            <ChamarGeral
             isOpen={modalOpen3}
             onClose={toggleModal3}
             titulo={'Selecione o local da Triagem'}
             placeholder={'Local da Triagem'}
             funcao={chamarPacienteEspera}
             titulo2={'Triagem concluída'}
             tesxt={'O paciente já está em triagem'}
             botao={'Chamar outro paciente para triagem'}/>
            <RealizarTriagem isOpen={modalOpen4}  onClose={toggleModal4}/>
        </div>

    );
}

export default MenuPricipal;

