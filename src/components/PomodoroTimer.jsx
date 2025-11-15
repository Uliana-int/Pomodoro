import { useEffect, useState } from "react";
import { pomodoroStyles } from "../styles/styles";

function PomodoroTimer() {
  const [isActive, setIsActive] = useState(false);
  const [minutesLeft, setMinutesLeft] = useState(25); //25
  const [secondsLeft, setSecondsLeft] = useState(0); // 0
  const [mode, setMode] = useState("work");

  useEffect(() => {
    const timeInMode = mode === "work" ? 25 * 60 : 5 * 60;
    setMinutesLeft(Math.floor(timeInMode / 60));
    setSecondsLeft(timeInMode % 60);
    setIsActive(false);
  }, [mode]);

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
      setMode((prevMode) => (prevMode === "work" ? "break" : "work"));
    }

    return () => clearInterval(interval);
  }, [isActive, secondsLeft, minutesLeft]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    const timeInMode = mode === "work" ? 25 * 60 : 5 * 60;
    setMinutesLeft(Math.floor(timeInMode / 60));
    setSecondsLeft(timeInMode % 60);
  };

  const formattedTimer = `${minutesLeft
    .toString()
    .padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;

  const isWorkMode = mode === "work";
  const containerStyle = isWorkMode
    ? `${pomodoroStyles.timerContainer} border-red-500`
    : `${pomodoroStyles.timerContainer} border-green-500`;
  const titleText = isWorkMode ? "Pomodoro Timer" : "Break Time";
  const buttonText = isWorkMode ? "Focus!" : "Relax!";

  return (
    <div className={pomodoroStyles.container}>
      <div className={containerStyle}>
        <h1 className={pomodoroStyles.title}>{titleText}</h1>
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
        <p className="text-center text-gray-400 mt-4">{buttonText}</p>
      </div>
    </div>
  );
}

export default PomodoroTimer;
