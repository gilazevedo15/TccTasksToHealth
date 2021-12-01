import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdowContext } from "../contexts/CountdowContext";
import styles from "../styles/components/Countdown.module.css";
import styles2 from "../styles/components/NewUser.module.css";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasfinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdowContext);
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasfinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado ✅
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive} `}
              onClick={resetCountdown}
            >
              Abandonar ciclo ✖
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
