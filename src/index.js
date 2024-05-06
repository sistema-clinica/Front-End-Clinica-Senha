import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import PainelSenhas from "./page/painel-senha/painel-senhas";
import Login from "./page/login/login";
import Cadastro from "./page/cadastro/cadastro";
import MenuPrincipal from "./page/menu-principal/menu-principal";
import {Context} from "./context/AuthContext";

function PrivateRoute({ children }) {
    const { loading, authenticated } = useContext(Context);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    if (!authenticated) {
        return <Navigate to="/login" />
    }

    return children;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "painel/senhas",
                element: (
                    <PrivateRoute>
                        <PainelSenhas/>
                    </PrivateRoute>
                ),
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "cadastro",
                element: (
                    <PrivateRoute>
                        <Cadastro/>
                    </PrivateRoute>
                )
            },
            {
                path: "",
                element: (
                    <PrivateRoute>
                        <MenuPrincipal/>
                    </PrivateRoute>
                ),
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