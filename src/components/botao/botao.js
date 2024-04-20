import style from './botao.module.css'

function Botao({text, imagem, onClick}) {
    return(
        <button className={style.conteiner} onClick={onClick}>
            <p>{text}</p>
            <img src={imagem} />
        </button>
    );
}

export default Botao;