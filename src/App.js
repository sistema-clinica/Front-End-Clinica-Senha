import { Fragment } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './page/login';
import Cadastro from './page/cadastro';
import MenuPrincipal from './page/menu-principal';
import PainelSenhas from './page/painel-senhas';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Cadastro" element={<Cadastro />} />
              <Route path="/Menu" element={ <MenuPrincipal/>} />
              <Route path="/PainelSenhas" element={<PainelSenhas/>} />
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
