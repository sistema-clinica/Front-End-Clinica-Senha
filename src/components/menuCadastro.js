import React from 'react'
import Logo from './img/Vector.png'
import './CSS/menuCadastro.css'

const menuCadastro = () => {
  return (
    <div className="quadradoCadastro">
    <div className='logoCadastro'>
        <img src={Logo} alt="Logo" />
        <h3>Cadastre um novo administrador</h3>
    </div>
    <div className="inputCadstro">
        <input
            type='text'
            placeholder='Digite seu e-mail'
        ></input>
        <input
            type='password'
            placeholder='Digite sua senha'
        ></input>
        <input
            type='password'
            placeholder='Confirme sua senha'
        ></input>
    </div>
    <div className='botaoCadastro'>
        <button>
            Cadastrar
        </button>
    </div>
</div>
  )
}

export default menuCadastro