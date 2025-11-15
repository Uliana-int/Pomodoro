import { useEffect, useState } from "react";
import { pomodoroStyles } from "../src/styles/styles";

function PomodoroTimer() {
  const [isActive, setIsActive] = useState(false);
  const [minutesLeft, setMinutesLeft] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && (minutesLeft > 0 || secondsLeft > 0)) {
      interval = setInterval(() => {
        if (secondsLeft === 0) {
          setMinutesLeft((prev) => prev - 1);
          setSecondsLeft(59);
        } else {
          setSecondsLeft((prev) => prev - 1);
        }
      }, 1000);
    } else if (minutesLeft === 0 && secondsLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, secondsLeft, minutesLeft]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setMinutesLeft(25);
    setSecondsLeft(0);
  };

  const formattedTimer = `${minutesLeft
    .toString()
    .padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;

  return (
    <div className={pomodoroStyles.container}>
      <div className={pomodoroStyles.timerContainer}>
        <h1 className={pomodoroStyles.title}>Pomodoro Timer</h1>
        <h2 className={pomodoroStyles.timerDisplay}>{formattedTimer}</h2>
        <div className={pomodoroStyles.buttonContainer}>
          <button
            className={`${pomodoroStyles.buttonBase} ${pomodoroStyles.buttons.start}`}
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className={`${pomodoroStyles.buttonBase} ${pomodoroStyles.buttons.pause}`}
            onClick={pauseTimer}
          >
            Pause
          </button>
          <button
            className={`${pomodoroStyles.buttonBase} ${pomodoroStyles.buttons.reset}`}
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
