import {useState} from "react";
import {stompClient} from "../../services/webSocketService";

export function ChamarPaciente( {destination, tipo} ) {
    const [localDeAtendimento, setLocalDeAtendimento] = useState("")

    const chamarPacienteAtendimento = () => {
        const body = JSON.stringify({ 'localDeAtendimento': localDeAtendimento });
        stompClient.send(destination, {}, body);
    }

    return (
        <div>
            <input
                type="text"
                value={localDeAtendimento}
                onChange={(e) => setLocalDeAtendimento(e.target.value)}
                placeholder={`Digite o local de ${tipo}`}
            />
            <button onClick={chamarPacienteAtendimento}>Chamar Paciente para {tipo}</button>
        </div>
    )
}
