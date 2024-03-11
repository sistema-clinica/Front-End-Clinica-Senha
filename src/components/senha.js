import './CSS/senha.css';

function senha({senha, localDeAtendimento, par}) {
    return (
        <div className={`senhaUnicas ${par ? 'par' : 'impar'}`}>
            <div className="Bloco">
                <h4>Senha</h4>
                <p>{senha}</p>
            </div>
            <div className="Bloco">
                <h4>Local de Atendimento</h4>
                <p>{localDeAtendimento}</p>
            </div>
        </div>
    );
}

export default senha;