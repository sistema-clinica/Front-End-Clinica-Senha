import {ChamarPaciente} from "./ChamarPaciente";
import { chamarPacienteAtendimento } from "../../services/apiServices";

export function ChamarAtendimento() {


    return (
        <ChamarPaciente
            destination={"/senha/atendimento"}
            tipo={"atendimento"}
            funcao={chamarPacienteAtendimento}
        />
    );
}