import MenuCadastro from '../../components/menuCadastro/menuCadastro';
import Onda from '../../assets/images/Ondulação_Footer.png';
import styles from './cadastro.module.css';

function Cadastro() {
    return (
        <main className={styles.cadastro}>
            <div className={styles.subQuadradoCadastro}>
                <MenuCadastro/>
                <div className={styles.cabesalhoCadastro}>
                    <h1>Cadastro de Administrador</h1>
                </div>
            </div>
            <div className={styles.imagemBaixo}>
                <img src={Onda} alt='Onda'/>
            </div>
        </main>
    );
}

export default Cadastro;
