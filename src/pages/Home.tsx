import styled from "styled-components";
import PomodoroTimer from "../components/PomodoroTimer";
import StatusDisplay from "../components/StatusDisplay";
import Header from "../components/Header";

const Container = styled.div`
  background-color: #e44337;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Header title="Pomodoro" />
      <PomodoroTimer />
      <StatusDisplay />
    </Container>
  );
}
