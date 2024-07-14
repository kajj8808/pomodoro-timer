import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
`;

const PomodoroTimerBox = styled(motion.div)`
  background-color: white;
  width: 150px;
  height: 230px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e44337;
  font-weight: bold;
  font-size: 80px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default function PomodoroTimeBox({ time }: { time?: string }) {
  return (
    <Box>
      <AnimatePresence>
        <PomodoroTimerBox
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0.2, position: "absolute" }}
          key={time}
        >
          <h1>{time}</h1>
        </PomodoroTimerBox>
      </AnimatePresence>
    </Box>
  );
}
