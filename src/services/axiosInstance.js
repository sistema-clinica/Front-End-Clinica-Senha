// Arquivo que possui a instância de axios que deve ser utilizada para fazer requisições para a API do Back-End
import axios from "axios";

// Ainda será implementado o token jwt no login e cadastro de admin

export const BASE_URL = "http://ec2-54-174-184-107.compute-1.amazonaws.com:8080"
// export const BASE_URL = "http://localhost:8080"

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});
