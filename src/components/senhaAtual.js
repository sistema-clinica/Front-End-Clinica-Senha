import React, { useState, useEffect } from 'react';
import './CSS/senhaAtual.css';

function SenhaAtual() {
    const [senha, setSenha] = useState('...');
    const [localDeAtendimento, setLocalDeAtendimento] = useState('...');
    const [localParaTeste, setLocalParaTeste] = useState('');

    const buscarUltimoAtendimento = () => {
        const requestBody = {
            localDeAtendimento: localParaTeste || localDeAtendimento,
        };

        fetch('http://ec2-3-85-49-103.compute-1.amazonaws.com:8080/atendimento/espera', {
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
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        buscarUltimoAtendimento();
    }, [buscarUltimoAtendimento]);

    return (
        <section className="quadradoFundo">
            <div className="logo">
                <h2>Senha atual chamada</h2>
            </div>
            <div className="informacoes">
                <div className="senha">
                    <h3>Senha</h3>
                    <p>{senha}</p>
                </div>
                <div className="localDeAtendimento">
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