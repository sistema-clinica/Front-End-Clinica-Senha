import Senha from './senha';

import './CSS/senhasRecentes.css';

function SenhasRecentes() {
    return (
        <aside className="quadradoRecentes">
            <h1>Senhas Anteriores</h1>
            <div className='senhasAnteriores'>
                <Senha/>
            </div>
          
        </aside>
    );
}

export default SenhasRecentes;