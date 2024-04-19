import React, { useState} from 'react';
import styles from './senhaAtual.module.css';
import { url } from '../../services/fumcoes';
import Efeito from './audio/efeito.mp3'

function SenhaAtual({ onPacienteChamado }) {
    const [senha, setSenha] = useState('...');
    const [localDeAtendimento, setLocalDeAtendimento] = useState('...');
    const [localParaTeste, setLocalParaTeste] = useState('');
    const audio = new Audio(Efeito);

    const buscarUltimoAtendimento = () => {
        const requestBody = {
            localDeAtendimento: localParaTeste || localDeAtendimento,
        };

        fetch(url + '/atendimento/espera', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setSenha(data.senha);
            setLocalDeAtendimento(data.localDeAtendimento);
            onPacienteChamado(data);
        })
        .catch((err) => console.log(err));

        audio.play();
    };

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
            </div>
            <div>
                <input 
                    type="text" 
                    value={localParaTeste} 
                    onChange={(e) => setLocalParaTeste(e.target.value)} 
                    placeholder="Digite o local de atendimento para teste"
                />
                <button onClick={buscarUltimoAtendimento}>Buscar Último Atendimento</button>
            </div>
        </section>
    );
}

export default SenhaAtual;
