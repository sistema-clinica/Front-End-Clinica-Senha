import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './page/login';
import Cadastro from './page/cadastro';
import MenuPrincipal from './page/menu-principal';
import PainelSenhas from './page/painel-senhas';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route path='/Cadastro'>
          <Cadastro/>
        </Route>
        <Route path='/Menu'>
          <MenuPrincipal/>
        </Route>
        <Route path='/PainelSenhas'>
          <PainelSenhas/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
