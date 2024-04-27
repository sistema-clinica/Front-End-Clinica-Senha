import style from './botao.module.css'

function Botao({text, icon, onClick, backgroundColor}) {
    return(
        <button style={{backgroundColor: backgroundColor}} className={style.conteiner} onClick={onClick}>
            {text}
            {icon}
        </button>
    );
}

export default Botao;