import Botao from "@/components/Botao";
import Questao from "@/components/Questao";
import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";
import { useState } from "react";
const questaoMock = new QuestaoModel(
  1,
  "Qual é a melhor cor?",
  [
    RespostaModel.errada("Verde"),
    RespostaModel.errada("Vermelha"),
    RespostaModel.errada("Azul"),
    RespostaModel.certa("Preta"),
  ],
  false
);
export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function questaoRespondida(questao: QuestaoModel) {}
  function irPraProximoPasso() {}

  return (
    <>
      <Questionario
        questao={questao}
        ultima={false}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
    </>
  );
}
