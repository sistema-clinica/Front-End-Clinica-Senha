import React, {useState} from 'react';
import styles from './senhaAtual.module.css';
import efeito_sonoro from "../../assets/audio/attention_beep.mov"
import {stompClient} from "../../services/webSocketService";
import {ChamarAtendimento} from "../ChamarPaciente/ChamarAtendimento";
import {ChamarTriagem} from "../ChamarPaciente/ChamarTriagem";

function SenhaAtual({ refreshSenhasAnteriores }) {
    const [senha, setSenha] = useState('');
    const [localDeAtendimento, setLocalDeAtendimento] = useState('');
    const audio = new Audio(efeito_sonoro);

    const onError = (err) => {
        console.log(err);
    }

    stompClient.connect({}, (frame) => {
        stompClient.subscribe('/painel', (pacienteData) => {
            chamarPaciente(JSON.parse(pacienteData.body).body);
        });
    }, onError)

    const chamarPaciente = (pacienteData) => {
        audio.play().then(r => efeito_sonoro)
        setSenha(pacienteData.senha)
        setLocalDeAtendimento(pacienteData.localDeAtendimento)
        refreshSenhasAnteriores()
    }

    return (
        <section className={styles.quadradoFundo}>
            <div className={styles.logo}>
                <h2>Senha atual chamada</h2>
            </div>
            <div className={styles.informacoes}>
                <div className={styles.senha}>
                    <h3>Senha</h3>
                    <p>{senha}</p>
                </div>
                <div className={styles.localDeAtendimento}>
                    <h3>Local de Atendimento</h3>
                    <p>{localDeAtendimento}</p>
                </div>
                <ChamarAtendimento/>
                <ChamarTriagem/>
            </div>

        </section>
    );
}

export default SenhaAtual;
