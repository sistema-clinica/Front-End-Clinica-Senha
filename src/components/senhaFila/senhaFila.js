import style from './senhaFila.module.css'

function SenhaFila({ posicao, nome, senha }) {
    return(
        <tr className={style.conteiner}>
            <td className={style.subConteiner}>
                <h5>{posicao}.</h5>
                <h5>{nome}</h5>
            </td>
            <td>{senha}</td>
        </tr>
    );
}

export default SenhaFila;