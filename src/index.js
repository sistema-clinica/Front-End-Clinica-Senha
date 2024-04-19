import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PainelSenhas from "./page/painel-senha/painel-senhas";
import Login from "./page/login/login";
import Cadastro from "./page/cadastro/cadastro";
import MenuPrincipal from "./page/menu-principal/menu-principal";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "painel/senhas",
                element: <PainelSenhas/>,
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "cadastro",
                element: <Cadastro/>
            },
            {
                path: "",
                element: <MenuPrincipal/>,
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);