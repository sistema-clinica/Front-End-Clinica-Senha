import style from './senhaFila.module.css'

function SenhaFila({ posicao, nome, senha }) {
    return(
        <tr className={style.conteiner}>
            <td>
                {posicao}.
            </td>
            <td>
                {nome}
            </td>
            <td>
                {senha}
            </td>
        </tr>
    );
}

export default SenhaFila;