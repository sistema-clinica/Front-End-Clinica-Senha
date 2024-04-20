import React, { useState } from 'react';
import style from './cadastroPaciente.module.css';
import Exit from './img/Icon.svg';
import { useQuery } from "@tanstack/react-query";
import CadastroComcluido from '../cadastroComluido/cadastroComcluido';
import { cadastrarNovoPaciente } from '../../services/apiServices';
import CPFInput from '../CPFInput/CPFInput';
import DateInput from '../DateInput/DateInput';

function CadastroPaciente({ isOpen, onClose }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const formatarCPFParaEnvio = (input) => {
        // Remover caracteres não numéricos
        const cpfNumerico = input.replace(/\D/g, '');
        return cpfNumerico;
    };

    const formatarDataParaEnvio = (input) => {
        // Dividir a data pelos caracteres "/"
        const partes = input.split('/');
        // Reorganizar as partes na ordem "aaaa-mm-dd"
        return `${partes[2]}-${partes[1]}-${partes[0]}`;
    };

    const HandleCadastroPaciente = async () => {
        const dadosUsuario = {
            nome: nome,
            dataNasc: formatarDataParaEnvio(data),
            cpf: formatarCPFParaEnvio(cpf)
        };

        try {
            const response = await cadastrarNovoPaciente(dadosUsuario);
            setSenha(response.senha);
            onClose();
            toggleModal();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {isOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.conteiner}>
                        <div className={style.conteiner2}>
                            <div className={style.cima}>
                                <h3>Cadastro de Paciente</h3>
                                <img src={Exit} onClick={onClose} alt="Fechar" />
                            </div>
                            <div className={style.meio}>
                                <div className={style.meioImfo}>
                                    <p>Nome</p>
                                    <input 
                                        placeholder='João Gustavo'
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                    <p>Data de Nascimento</p>
                                    <DateInput
                                        value={data}
                                        onChange={(value) => setData(value)}
                                    />
                                    <p>CPF</p>
                                    <CPFInput
                                        value={cpf}
                                        onChange={(value) => setCpf(value)}
                                    />
                                </div>
                            </div>
                            <div className={style.baixo}>
                                <div className={style.conteiner3}>
                                    <button className={style.cancelar} onClick={onClose}>Cancelar</button>
                                    <button className={style.comfirmar} onClick={HandleCadastroPaciente}>Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <CadastroComcluido senha={senha} isOpen={modalOpen} onClose={toggleModal}/>
        </>
    );
}

export default CadastroPaciente;
