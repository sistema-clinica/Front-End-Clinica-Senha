// chamarAtendimento.js
import style from './chamarGeral.module.css'
import { useState } from 'react';
import GeralFinalizado from '../geralFinalizado/geralFinalizado';
import { stompClient } from '../../services/webSocketService';

function ChamarGeral({ isOpen, onClose, placeholder, titulo, funcao, tesxt, titulo2, botao }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [localDeAtendimento, setLocalDeAtendimento] = useState('');

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleReturnToChamarAtendimento = () => {
        toggleModal(); // Fechar o modal de Atendimento Finalizado
        onClose(); // Fechar o modal de Chamar Atendimento
    };

    const HandleChamarPaciente = async () => {
        const dadosUsuario = {
            localDeAtendimento: localDeAtendimento,
        };

        try {
            const response = await funcao(dadosUsuario);
            stompClient.send('/painel', {}, JSON.stringify(response));
            onClose();
            toggleModal();
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <>
            {isOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.conteiner}>
                        <div className={style.conteiner2}>
                            <div className={style.cima}>
                                <h3>{titulo}</h3>
                            </div>
                            <div className={style.meio}>
                                <input placeholder={placeholder} onChange={(e) => setLocalDeAtendimento(e.target.value)} value={localDeAtendimento} />
                            </div>
                            <div className={style.baixo}>
                                <div className={style.conteiner3}>
                                    <button className={style.cancelar} onClick={onClose}>Cancelar</button>
                                    <button className={style.comfirmar} onClick={HandleChamarPaciente}>Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <GeralFinalizado isOpen={modalOpen} onClose={toggleModal} onReturn={handleReturnToChamarAtendimento} tesxt={tesxt} titulo={titulo2} botao={botao} />
        </>
    );
}

export default ChamarGeral;
