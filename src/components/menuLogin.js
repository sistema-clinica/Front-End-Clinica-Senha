import './CSS/menuLogin.css';
import Logo from './img/Vector.png'

function MenuLogin() {
    return (
        <div className="quadradoLogin">
            <div className='logoLogin'>
                <img src={Logo} alt="Logo" />
                <h3>Bem vindo</h3>
            </div>
            <div className="input">
                <input
                    type='text'
                    placeholder='afadfal@gmail.com'
                ></input>
                <input
                    type='password'
                    placeholder='senha'
                ></input>
            </div>
            <div className='botaoLogin'>
                <button>
                    Login
                </button>
            </div>
        </div>
    );
}

export default MenuLogin;