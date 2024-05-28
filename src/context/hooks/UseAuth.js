import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {axiosInstance} from "../../services/axiosInstance";
import {fazerLogin} from "../../services/apiServices";

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate =  useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(formData) {
        const response = await fazerLogin(formData)

        if (response.status === 200) {
            const token = response.data.token
            localStorage.setItem('token', JSON.stringify(token));
            axiosInstance.defaults.headers.Authorization = `Bearer ${token}`
        }

        setAuthenticated(true);
        navigate('/');
    }

    function handleLogout() {
        setAuthenticated(false);
        axiosInstance.defaults.headers.Authorization = undefined
        localStorage.removeItem('token');
        navigate('/login');
    }

    return { authenticated, loading, handleLogin, handleLogout };
}