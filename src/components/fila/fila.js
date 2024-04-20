import { useEffect, useState } from 'react';
import style from './fila.module.css';
import SenhaFila from '../senhaFila/senhaFila';

function Fila({ titulo, funcao }) {
    const [filaAtendimentos, setFilaAtendimentos] = useState([]);

    useEffect(() => {
        const fetchFilaAtendimentos = async () => {
            try {
                const response = await funcao();
                setFilaAtendimentos(response);
            } catch (error) {
                console.error('Erro ao obter a fila de atendimentos:', error);
            }
        };

        fetchFilaAtendimentos();

        const interval = setInterval(() => {
            fetchFilaAtendimentos();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    

    return (
        <div className={style.conteiner}>
            <div className={style.titulo}>
                <h4>{titulo}</h4>
                <span>Quantidade: {filaAtendimentos ? filaAtendimentos.length : 0}</span>
            </div>
            <div className={style.corpo}>
                <tr className={style.legenda}>
                    <th>
                        Posição
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Senha
                    </th>
                </tr>
                {filaAtendimentos && filaAtendimentos.map((atendimento, index) => (
                    <SenhaFila
                        key={atendimento.id}
                        posicao={index + 1}
                        nome={atendimento.nome}
                        senha={atendimento.senha}
                    />
                ))}
            </div>
        </div>
    );
}

export default Fila;
