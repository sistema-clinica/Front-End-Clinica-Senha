import Relogio from "../components/relogio";
import SenhaAtual from "../components/senhaAtual";
import SenhasRecentes from "../components/senhasRecentes";
import './CSS/painel-senhas.css';

function PainelSenhas() {
  return (
    <main className="painel-senhas">
      <section className="quadardo">
        <div className="quadradoSenha">
          <div className="relogio">
            <Relogio />
          </div>
          <div className="senhaAtual">
            <SenhaAtual />
          </div>
        </div>
        <SenhasRecentes/>
      </section>
    </main>
  );
}

export default PainelSenhas;
