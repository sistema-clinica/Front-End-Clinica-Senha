import {ChamarPaciente} from "./ChamarPaciente";
import { chamarPacienteEspera } from "../../services/apiServices";

export function ChamarTriagem() {

    return (
        <ChamarPaciente
            destination={"/senha/espera"}
            tipo={"triagem"}
            funcao={chamarPacienteEspera}
        />
    );
}