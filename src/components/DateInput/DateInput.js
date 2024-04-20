// DateInput.js
import React from 'react';

const DateInput = ({ value, onChange }) => {
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


    const handleDateChange = (e) => {
        // Aceitar apenas números e limitar o tamanho para 10 caracteres (dd/mm/aaaa)
        const input = e.target.value.replace(/\D/g, '').slice(0, 8);
        const dataFormatada = formatarData(input)
        onChange(dataFormatada);
    };

    return (
        <input
            placeholder='dd/mm/aaaa'
            value={value}
            onChange={handleDateChange}
        />
    );
};

export default DateInput;
