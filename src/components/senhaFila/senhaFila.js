import style from './senhaFila.module.css'

function SenhaFila({ posicao, nome, senha }) {
    return(
        <div className={style.conteiner}>
            <div className={style.subConteiner}>
                <h5>{posicao}</h5>
                <h5>{nome}</h5>
            </div>
            <p>{senha}</p>
        </div>
    );
}

export default SenhaFila;