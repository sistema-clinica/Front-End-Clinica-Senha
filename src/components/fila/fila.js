import { useEffect, useState } from 'react';
import style from './fila.module.css';
import SenhaFila from '../senhaFila/senhaFila';
import { getAtendimentoFila } from '../../services/apiServices';

function Fila({ titulo }) {
    const [filaAtendimentos, setFilaAtendimentos] = useState([]);

    useEffect(() => {
        const fetchFilaAtendimentos = async () => {
            try {
                const response = await getAtendimentoFila();
                setFilaAtendimentos(response.data);
            } catch (error) {
                console.error('Erro ao obter a fila de atendimentos:', error);
            }
        };

        fetchFilaAtendimentos();
    }, []);

    useEffect(() => {
        console.log(filaAtendimentos);
    }, [filaAtendimentos]);

    return (
        <div className={style.conteiner}>
            <div className={style.titulo}>
                <h4>{titulo}</h4>
                <p>Quantidade: {filaAtendimentos ? filaAtendimentos.length : 0}</p>
            </div>
            <div className={style.corpo}>
                <div className={style.legenda}>
                    <div className={style.legenda2}>
                        <p>Posição</p>
                        <p>Nome</p>
                    </div>
                    <p>Senha</p>
                </div>
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
