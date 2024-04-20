import React from 'react';

const CPFInput = ({ value, onChange }) => {
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

    const handleCPFChange = (e) => {
        // Aceitar apenas números e limitar o tamanho para 11 caracteres (xxx.xxx.xxx-xx)
        const input = e.target.value.replace(/\D/g, '').slice(0, 11);
        const cpfFormatado = formatarCPF(input);
        onChange(cpfFormatado); // Atualizar o valor do CPF usando a função onChange passada por props
    };

    return (
        <input
            placeholder='000.000.000-00'
            value={value}
            onChange={handleCPFChange}
        />
    );
};

export default CPFInput;
