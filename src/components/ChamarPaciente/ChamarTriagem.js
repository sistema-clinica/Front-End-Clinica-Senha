import {ChamarPaciente} from "./ChamarPaciente";

export function ChamarTriagem() {

    return (
        <ChamarPaciente
            destination={"senha/espera"}
            tipo={"triagem"}
        />
    );
}