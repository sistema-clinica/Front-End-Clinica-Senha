import { useEffect, useState } from 'react';
import style from './realizarTriagem.module.css';
import Exit from './img/Icon.svg';
import { getNaTriagem, realizarTriagem } from '../../services/apiServices';

function RealizarTriagem({ isOpen, onClose }) {
    const [senhasPendentes, setSenhasPendentes] = useState([]);
    const [senha, setSenha] = useState('');
    const [urgencia, setUrgencia] = useState('');
    const [detalhesSintomas, setDetalhesSintomas] = useState('');

    useEffect(() => {
        const fetchAtendimentosPendentes = async () => {
            try {
                const response = await getNaTriagem();
                setSenhasPendentes(response.map(atendimento => atendimento.senha));
            } catch (error) {
                console.error('Erro ao obter atendimentos pendentes para triagem:', error);
            }
        };

        fetchAtendimentosPendentes();
    }, []);

    const HandleRealizarTriagem = async () => {
        const dadosUsuario = {
            senha: senha,
            urgencia: urgencia,
            detalheSintomas: detalhesSintomas
        };

        console.log(dadosUsuario);

        try {
            await realizarTriagem(dadosUsuario);
            onClose();
        } catch (error) {
            console.error('Erro ao realizar a triagem:', error);
        }
    };

    return (
        <>
            {isOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.conteiner}>
                        <div className={style.conteiner2}>
                            <div className={style.cima}>
                                <h3>Realizar Triagem</h3>
                                <img src={Exit} onClick={onClose} alt="Fechar" />
                            </div>
                            <div className={style.meio}>
                                <div className={style.meioImfo}>
                                    <p>Paciente</p>
                                    <select
                                        name="selecionarPaciente"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    >
                                        {senhasPendentes.map(senha => (
                                            <option key={senha} value={senha}>{senha}</option>
                                        ))}
                                    </select>
                                    <p>Urgência</p>
                                    <select
                                        name="selecionarUrgencia"
                                        value={urgencia}
                                        onChange={(e) => setUrgencia(e.target.value)}
                                    >
                                        <option value="NORMAL">Normal</option>
                                        <option value="Preferencial">Preferencial</option>
                                        <option value="Urgente">Urgente</option>
                                    </select>
                                    <p>Detalhamento de Sintomas</p>
                                    <input
                                        type="text"
                                        name="detalhamentoSintomas"
                                        value={detalhesSintomas}
                                        onChange={(e) => setDetalhesSintomas(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={style.baixo}>
                                <div className={style.conteiner3}>
                                    <button className={style.cancelar} onClick={onClose}>Cancelar</button>
                                    <button className={style.comfirmar} onClick={HandleRealizarTriagem}>Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RealizarTriagem;
