import { useEffect, useState } from "react";

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
export const POMODORO_TIME = ONE_MINUTE * 25;

export default function useTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [time, setTime] = useState(POMODORO_TIME);
  const [minutes, setMinutes] = useState<string | undefined>(undefined);
  const [seconds, setSeconds] = useState<string | undefined>(undefined);

  const updateTimeUnits = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    setMinutes(mins.toString().padStart(2, "0"));
    setSeconds(secs.toString().padStart(2, "0"));
  };

  useEffect(() => {
    updateTimeUnits(time);
  }, [time]);

  useEffect(() => {
    let interval: number;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsDone(true);
      setIsRunning(false);
      setTime(POMODORO_TIME);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsDone(false);
    setIsRunning(false);
    setTime(POMODORO_TIME);
  };

  return {
    toggleTimer,
    resetTimer,
    minutes,
    seconds,
    isRunning,
    time,
    isDone,
  };
}
