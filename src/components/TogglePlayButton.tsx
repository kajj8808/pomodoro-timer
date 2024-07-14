import { motion } from "framer-motion";
import styled from "styled-components";

const Button = styled(motion.button)<{ isRunning: boolean }>`
  width: 120px;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 50%;
  position: relative;
  margin-top: 200px;
  svg {
    position: absolute;
    width: 75px;
    height: 75px;
    left: ${(props) => (props.isRunning ? "23px" : "25px")};
    top: 25px;
    color: #fff;
  }
`;

export default function PomodoroToggleButton({
  onClick,
  isRunning,
}: {
  onClick: () => void;
  isRunning: boolean;
}) {
  return (
    <Button
      onClick={onClick}
      isRunning={isRunning}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.6 }}
    >
      {isRunning ? (
        <svg
          data-slot="icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z"></path>
        </svg>
      ) : (
        <svg
          data-slot="icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
        </svg>
      )}
    </Button>
  );
}
