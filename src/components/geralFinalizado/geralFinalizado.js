// atendimentoFinalizado.js
import style from './geralFinalizado.module.css'
import { useState } from 'react';
import Exit from '../../assets/images/Exit.svg';

function GeralFinalizado({ isOpen, onClose, onReturn, tesxt, titulo, botao }) {

    return(
        <>
            {isOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.conteiner}>
                        <div className={style.conteiner2}>
                            <div className={style.cima}>
                                <h3>{titulo}</h3>
                                <img src={Exit} alt="Fechar" onClick={onClose} />
                            </div>
                            <div className={style.meio}>
                                <h2>{tesxt}</h2>
                            </div>
                            <div className={style.baixo}>
                                <div className={style.conteiner3}>
                                    <button className={style.continuar} onClick={onReturn}>{botao}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default GeralFinalizado;
