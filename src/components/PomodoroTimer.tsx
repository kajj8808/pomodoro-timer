import styled from "styled-components";
import useTimer, { POMODORO_TIME } from "../hooks/useTimer";
import TimeBox from "./TimeBox";
import PomodoroToggleButton from "./TogglePlayButton";
import Colon from "./Colon";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pomodoroGoalState, pomodoroRoundState } from "../recoil/atoms";

const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  align-items: center;
`;

const TrackBox = styled.div`
  display: flex;
  align-items: center;
`;

export default function PomodoroTimer() {
  const { minutes, seconds, toggleTimer, isRunning, isDone } = useTimer();
  const [roundState, setRoundState] = useRecoilState(pomodoroRoundState);
  const setGoalState = useSetRecoilState(pomodoroGoalState);
  useEffect(() => {
    if (isDone) {
      setRoundState((prev) => {
        console.log("prev :", prev);
        return { ...prev, value: prev.value + 1 };
      });
    }
  }, [minutes, seconds]);

  useEffect(() => {
    if (roundState.value === roundState.maxValue) {
      setGoalState((prev) => {
        return { ...prev, value: prev.value + 1 };
      });
    }
  }, [roundState.value, roundState.maxValue]);

  return (
    <div>
      <TrackContainer>
        <TrackBox>
          <TimeBox time={minutes} />
          <Colon />
          <TimeBox time={seconds} />
        </TrackBox>
        <PomodoroToggleButton onClick={toggleTimer} isRunning={isRunning} />
      </TrackContainer>
    </div>
  );
}
