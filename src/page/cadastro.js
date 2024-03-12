import MenuCadastro from '../components/menuCadastro';
import Onda from './image/Ondulação_Footer.png'
import './CSS/cadastro.css'

function Cadastro() {
    return(
        <main className='cadastro'>
            <div className='subQuadradoCadastro'>
                <MenuCadastro/>
                <div className='cabesalhoCadastro'>
                    <h1>Cadastro de Administrador</h1>
                </div>
            </div>
            <div className='imagemBaixo'>
                <img src={Onda} alt='Onda'/>
            </div>
        </main>
    );
}

export default Cadastro;