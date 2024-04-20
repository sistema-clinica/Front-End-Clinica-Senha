import { useState } from 'react';
import BarraDeMenu from '../../components/barraDeMenu/barraDeMenu';
import Botao from '../../components/botao/botao';
import { IoIosAddCircleOutline } from "react-icons/io";
import CadastroPaciente from '../../components/cadastroPaciente/cadastroPaciente';
import Fila from '../../components/fila/fila';
import { getAtendimentoFila, getNaTriagem, getTriagemFila } from '../../services/apiServices';
import style from './menu-principal.module.css'

function MenuPricipal() {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };




    return(
        <div className={style.menuTotal}>
            <BarraDeMenu/>
            <div className={style.menuConteudo}>
                <div className={style.secaoBotao}>
                    <Botao text='Chamar triagem' icon={<IoIosAddCircleOutline />} onClick={toggleModal} backgroundColor={"var(--azul-escuro)"}/>
                    <Botao text='Chamar atendimento' icon={<IoIosAddCircleOutline />} onClick={toggleModal}/>
                    <Botao text='Realizar triagem' icon={<IoIosAddCircleOutline />} onClick={toggleModal} backgroundColor={"var(--azul-escuro)"}/>
                    <Botao text='Chamar novamente' icon={<IoIosAddCircleOutline />} onClick={toggleModal}/>
                    <Botao text='Novo Paciente' icon={<IoIosAddCircleOutline />} onClick={toggleModal} backgroundColor={"var(--azul-escuro)"}/>
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
        </div>

    );
}

export default MenuPricipal;

