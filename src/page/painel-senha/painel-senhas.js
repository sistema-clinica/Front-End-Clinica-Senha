import Relogio from "../../components/relogio/relogio";
import SenhaAtual from "../../components/senhaAtual/senhaAtual";
import SenhasRecentes from "../../components/senhasRecentes/senhasRecentes";
import styles from './painel-senhas.module.css';

function PainelSenhas() {
  return (
    <main className={styles.painelSenhas}>
      <section className={styles.quadardo}>
        <div className={styles.quadradoSenha}>
          <div className={styles.relogio}>
            <Relogio />
          </div>
          <div className={styles.senhaAtual}>
            <SenhaAtual />
          </div>
        </div>
        <SenhasRecentes/>
      </section>
    </main>
  );
}

export default PainelSenhas;
