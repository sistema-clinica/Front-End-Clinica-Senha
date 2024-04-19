// Arquivo que possui a instância de axios que deve ser utilizada para fazer requisições para a API do Back-End
import axios from "axios";

// Ainda será implementado o token jwt no login e cadastro de admin
// const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJKMGFvYXJ0aHVyIiwic3ViIjoidGVzdGUiLCJleHAiOjE3MTM2MDIyNjl9.BlLw8LQCnzoiFyDkxvHYM3yJwYlsjMtJyQB1Mk22qz0';

// export const BASE_URL = "http://ec2-54-174-184-107.compute-1.amazonaws.com:8080"
export const BASE_URL = "http://localhost:8080"

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Authorization': AUTH_TOKEN
    }
});
