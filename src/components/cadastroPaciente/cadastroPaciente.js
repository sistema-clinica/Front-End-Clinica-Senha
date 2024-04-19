import React, { useState } from 'react';
import style from './cadastroPaciente.module.css';
import Exit from './img/Icon.svg';
import {useQuery} from "@tanstack/react-query";
import CadastroComcluido from '../cadastroComluido/cadastroComcluido';
import { cadastrarNovoPaciente } from '../../services/apiServices';

function CadastroPaciente({ isOpen, onClose }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('')
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const formatarData = (input) => {
        // Formatar a data com barras
        if (input.length > 2 && input[2] !== '/') {
            input = input.slice(0, 2) + '/' + input.slice(2);
        }
        if (input.length > 5 && input[5] !== '/') {
            input = input.slice(0, 5) + '/' + input.slice(5);
        }
        return input.slice(0, 10); // Limitar para 10 caracteres (dd/mm/aaaa)
    };

    const formatarCPF = (input) => {
        // Formatar o CPF com pontos e traço
        if (input.length > 3 && input[3] !== '.') {
            input = input.slice(0, 3) + '.' + input.slice(3);
        }
        if (input.length > 7 && input[7] !== '.') {
            input = input.slice(0, 7) + '.' + input.slice(7);
        }
        if (input.length > 11 && input[11] !== '-') {
            input = input.slice(0, 11) + '-' + input.slice(11);
        }
        return input.slice(0, 14); // Limitar para 14 caracteres (xxx.xxx.xxx-xx)
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
            setSenha(response.senha); // Definir a senha recebida no estado
            onClose();
            toggleModal();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDataChange = (e) => {
        // Aceitar apenas números e limitar o tamanho para 10 caracteres (dd/mm/aaaa)
        const input = e.target.value.replace(/\D/g, '').slice(0, 8);
        setData(formatarData(input));
    };

    const handleCPFChange = (e) => {
        // Aceitar apenas números e limitar o tamanho para 14 caracteres (xxx.xxx.xxx-xx)
        const input = e.target.value.replace(/\D/g, '').slice(0, 11);
        setCpf(formatarCPF(input));
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
                                    <input 
                                        placeholder='dd/mm/aaaa'
                                        value={data}
                                        onChange={handleDataChange}
                                    />
                                    <p>CPF</p>
                                    <input 
                                        placeholder='000.000.000-00'
                                        value={cpf}
                                        onChange={handleCPFChange}
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
