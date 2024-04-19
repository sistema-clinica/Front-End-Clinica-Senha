import Relogio from "../../components/relogio/relogio";
import SenhaAtual from "../../components/senhaAtual/senhaAtual";
import SenhasRecentes from "../../components/senhasRecentes/senhasRecentes";
import styles from './painel-senhas.module.css';
import {useQuery} from "@tanstack/react-query";
import {getSenhasAnteriores} from "../../services/apiServices";

function PainelSenhas() {
  const { data: senhasAnteriores, isLoading, error, refetch } = useQuery({
    queryKey: ["senhasAnteriores", "senhasAnterioresData"],
    queryFn: () => getSenhasAnteriores()
  })

  console.log(senhasAnteriores)

  const refreshSenhasAnteriores = () => {
    refetch();
  };

  return (
    <main className={styles.painelSenhas}>
      <section className={styles.quadardo}>
        <div className={styles.quadradoSenha}>
          <div className={styles.relogio}>
            <Relogio />
          </div>
          <div className={styles.senhaAtual}>
            <SenhaAtual refreshSenhasAnteriores={refreshSenhasAnteriores} />
          </div>
        </div>
        <SenhasRecentes senhasRecentes={senhasAnteriores}/>
      </section>
    </main>
  );
}

export default PainelSenhas;
