import { useRouter } from "next/router";
import styles from "../styles/Resultado.module.css";
import Estatistica from "@/components/Estatistica";

export default function resultado() {
  const router = useRouter();
  const total = +router.query.total!;
  const certas = +router.query.certas!;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <Estatistica texto="Perguntas" valor={total} />
      <Estatistica texto="Certas" valor={certas} />
      <Estatistica texto="Percentual" valor={`${percentual}%`} />
    </div>
  );
}
