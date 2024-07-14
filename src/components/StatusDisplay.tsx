import { useRecoilValue } from "recoil";
import StatusBox from "./StatusBox";
import { pomodoroGoalState, pomodoroRoundState } from "../recoil/atoms";
import styled from "styled-components";

const StatusContainer = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 150px;
`;

export default function StatusDisplay() {
  const round = useRecoilValue(pomodoroRoundState);
  const goal = useRecoilValue(pomodoroGoalState);

  return (
    <StatusContainer>
      <StatusBox
        title="round"
        currentValue={round.value}
        maxValue={round.maxValue}
      />
      <StatusBox
        title="goal"
        currentValue={goal.value}
        maxValue={goal.maxValue}
      />
    </StatusContainer>
  );
}
