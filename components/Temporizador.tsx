import {
  ColorFormat,
  CountdownCircleTimer,
} from "react-countdown-circle-timer";
import styles from "../styles/Temporizador.module.css";

interface TemporizadorProps {
  duracao: number;
  tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        colors={["#BCE596", "#F7B801", "#ED827A"]}
        colorsTime={[10, 3, 0]}
        duration={props.duracao}
        size={120}
        isPlaying
        onComplete={props.tempoEsgotado}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
