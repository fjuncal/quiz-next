import Questao from "@/components/Questao";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";
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

  return (
    <>
      <Questao valor={questaoTeste} />
    </>
  );
}
