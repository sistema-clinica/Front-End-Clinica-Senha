import { useEffect, useState } from 'react';
import style from './realizarTriagem.module.css';
import Exit from './img/Icon.svg';
import { getNaTriagem, realizarTriagem } from '../../services/apiServices';

function RealizarTriagem({ isOpen, onClose }) {
    const [pacientesPendentes, setPacientesPendentes] = useState([]);
    const [formData, setFormData] = useState({
        senha: '',
        urgencia: null,
        detalhesSintomas: ''
    })

    const handleInputChange = (e) => {
        const updatedFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        };
        setFormData(updatedFormData);
        console.log(formData);
    };

    useEffect(() => {
        const fetchAtendimentosPendentes = async () => {
            try {
                const response = await getNaTriagem();
                setPacientesPendentes(response);
            } catch (error) {
                console.error('Erro ao obter atendimentos pendentes para triagem:', error);
            }
        };

        fetchAtendimentosPendentes();
    }, []);

    const HandleRealizarTriagem = async () => {
        try {
            await realizarTriagem(formData);
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
                                        name="senha"
                                        value={formData.senha}
                                        onChange={(e) => handleInputChange(e)}
                                    >
                                        {pacientesPendentes.map((paciente, index) => (
                                            <option key={index} value={paciente.senha}>{paciente.nome} - {paciente.senha}</option>
                                        ))}
                                    </select>
                                    <p>Urgência</p>
                                    <select
                                        name="urgencia"
                                        value={formData.urgencia}
                                        onChange={(e) => handleInputChange(e)}
                                    >
                                        <option disabled selected>Selecione a Urgência</option>
                                        <option key={1} value="NORMAL">Normal</option>
                                        <option key={2} value="PREFERENCIAL">Preferencial</option>
                                        <option key={3} value="URGENTE">Urgente</option>
                                    </select>
                                    <p>Detalhamento de Sintomas</p>
                                    <textarea
                                        name="detalhesSintomas"
                                        value={formData.detalhesSintomas}
                                        onChange={(e) => handleInputChange(e)}
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
