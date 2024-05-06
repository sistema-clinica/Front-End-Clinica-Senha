import {axiosInstance} from './axiosInstance'

export const fazerLogin = async (authData) => {
    const response = await axiosInstance.post("/login", authData)
    return response
}

export const cadastrarNovoAdmin = async (adminData) => {
    const response = await axiosInstance.post("/cadastro", adminData)
    return response.data
}

export const chamarPacienteAtendimento = async (localAtendimento) => {
    const response = await axiosInstance.post("/atendimento", localAtendimento)
    return response.data
}

export const chamarPacienteEspera = async (localAtendimento) => {
    const response = await axiosInstance.post("/atendimento/espera", localAtendimento)
    return response.data
}

export const getSenhasAnteriores = async () => {
    const response = await axiosInstance.get("/atendimento/recentes")
    return response.data
}

export const cadastrarNovoPaciente = async (pacienteData) => {
    const response = await axiosInstance.post("/pacientes/cadastro", pacienteData)
    return response.data
}

export const getAtendimentoFila = async () => {
    const response = await axiosInstance.get("/atendimento/fila")
    return response.data
}

export const getTriagemFila = async () => {
    const response = await axiosInstance.get("/atendimento/fila/espera")
    return response.data
}

export const getNaTriagem= async () => {
    const response = await axiosInstance.get("/atendimento/triagem")
    return response.data
}

export const getUtimoPaciente= async () => {
    const response = await axiosInstance.get("/atendimento/ultimo")
    return response.data
}

export const realizarTriagem = async (pacienteData) => {
    const response = await axiosInstance.post("/atendimento/triagem", pacienteData)
    return response.data
}
