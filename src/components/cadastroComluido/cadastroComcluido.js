import React from "react";
import style from './cadastroComcluido.module.css';
import Exit from '../../assets/images/Exit.svg';

function CadastroComcluido({ isOpen, onClose, senha }) {
    return (
        <>
            {isOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.conteiner}>
                        <div className={style.conteiner2}>
                            <div className={style.cima}>
                                <h3>Cadastro de Paciente</h3>
                                <img src={Exit} alt="Fechar" onClick={onClose} />
                            </div>
                            <div className={style.meio}>
                                <h2>A senha do paciente criado é:</h2>
                                <h1>{senha}</h1>
                                <p>Ele Já está na lista de espera para a triagem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CadastroComcluido;
