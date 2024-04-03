import Senha from '../senha/senha';
import { useEffect, useState } from 'react';
import styles from './senhasRecentes.module.css'; // Importando o arquivo de módulo CSS

function SenhasRecentes() {
    const API_URL = "http://ec2-3-85-49-103.compute-1.amazonaws.com:8080"
    const [senhasRecentes, setSenhasRecentes] = useState([]);

    useEffect(() => {
        fetch(API_URL + '/atendimento/recentes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
        .then(data => {
            setSenhasRecentes(data);
        })
        .catch(err => console.log(err))
    }, [senhasRecentes]);

    const handlePacienteChamado = (paciente) => {
        if (!senhasRecentes.some(senha => senha.senha === paciente.senha)) {
            setSenhasRecentes(prevSenhas => [paciente, ...prevSenhas]);
        }
    };

    return (
        <aside className={styles.quadradoRecentes}>
            <h1>Senhas Anteriores</h1>
            <div className={styles.senhasAnteriores}>
                {senhasRecentes.length > 0 && 
                senhasRecentes.map((item, index) => <Senha
                key = {index}
                senha = {item.senha}
                localDeAtendimento = {item.localDeAtendimento}
                par={index % 2 === 0}
                />)}
            </div>
        </aside>
    );
}

export default SenhasRecentes;
