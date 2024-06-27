import Questao from "@/components/Questao";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";
import { log } from "console";
export default function Home() {
  const questaoTeste = new QuestaoModel(
    1,
    "melhor cor?",
    [
      RespostaModel.errada("Verde"),
      RespostaModel.errada("Vermelha"),
      RespostaModel.errada("Azul"),
      RespostaModel.certa("Preta"),
    ],
    false
  );

  function respostaFornecida(indice: number) {
    console.log(indice);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Questao valor={questaoTeste} respostaFornecida={respostaFornecida} />
      </div>
    </>
  );
}
