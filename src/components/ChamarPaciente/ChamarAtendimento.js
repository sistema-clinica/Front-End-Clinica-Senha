import {ChamarPaciente} from "./ChamarPaciente";

export function ChamarAtendimento() {


    return (
        <ChamarPaciente
            destination={"/senha/atendimento"}
            tipo={"atendimento"}
        />
    );
}