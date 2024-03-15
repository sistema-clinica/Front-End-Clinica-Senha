import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../page/login';
import Cadastro from '../page/cadastro';
import MenuPrincipal from '../page/menu-principal';
import PainelSenhas from '../page/painel-senhas';

const RoutesApp = () => {
    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const tokenExpirado = false;

            if (!tokenExpirado) {
                setAutenticado(true);
            }
        }
    }, []);

    const PrivateRoute = ({ element }) => {
        return autenticado ? element : <Navigate to="/" />;
    };

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Cadastro" element={<Cadastro />} />
                    <Route path="/Menu" element={<PrivateRoute element={<MenuPrincipal />} />} />
                    <Route path="/PainelSenhas" element={<PrivateRoute element={<PainelSenhas />} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;
