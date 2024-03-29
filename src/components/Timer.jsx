import styles from "./Timer.module.css";
import { useEffect, useContext } from "react";
import { GameContext } from "./Game";

export default function Timer({ time, setTime }) {
  const { gameState } = useContext(GameContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    if (gameState.gameOver || gameState.gameWon) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, setTime, gameState]);

  return (
    <div className={styles.timer}>{
      // time in 00:00 format
      `${Math.floor(time / 60)}:${time % 60 < 10 ? "0" : ""}${time % 60}`
    }</div>
  );
}
