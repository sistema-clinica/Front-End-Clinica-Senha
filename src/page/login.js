import './CSS/login.css';
import MenuLogin from '../components/menuLogin';
import Onda from './image/Ondulação_Footer.png'

function Login() {
    return(
        <main className='login'>
            <div className='subQuadradoLogin'>
                <MenuLogin/>
                <div className='cabesalhoLogin'>
                    <div className='tituloLogin'>
                        <div className='secao1'>
                            <h1>Página de</h1>
                        </div>
                        <div className='secao2'>
                            <h1>Login</h1>
                        </div>
                    </div>
                    <h2>Painel de gerenciamento de senhas para clínica médica</h2>
                </div>
            </div>
            <div className='imagemBaixo'>
                <img src={Onda} alt='Onda'/>
            </div>
        </main>
    );
}

export default Login;