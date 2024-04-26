import {useState} from "react";
import {stompClient} from "../../services/webSocketService";

export function ChamarPaciente( {destination, tipo, funcao} ) {
    const [localDeAtendimento, setLocalDeAtendimento] = useState("")

    const HandleChamarPaciente = async () => {
        const dadosUsuario = {
            localDeAtendimento: localDeAtendimento,
        };

        try {
            const response = await funcao(dadosUsuario);
            stompClient.send('/painel', {}, JSON.stringify(response));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={localDeAtendimento}
                onChange={(e) => setLocalDeAtendimento(e.target.value)}
                placeholder={`Digite o local de ${tipo}`}
            />
            <button onClick={HandleChamarPaciente}>Chamar Paciente para {tipo}</button>
        </div>
    )
}
