import { atom } from "recoil";

interface IPomodoroStateValue {
  value: number;
  maxValue: number;
}

interface IPomodoroState {
  round: IPomodoroStateValue;
  goal: IPomodoroStateValue;
}

/**
 * pomodoro state ( round , goal )
 */
export const pomodoroState = atom<IPomodoroState>({
  key: "pomodoroState",
  default: {
    round: {
      maxValue: 12,
      value: 0,
    },
    goal: {
      maxValue: 4,
      value: 0,
    },
  },
});

export const pomodoroRoundState = atom({
  key: "pomodoroRoundState",
  default: {
    value: 0,
    maxValue: 12,
  },
});

export const pomodoroGoalState = atom({
  key: "pomodoroGoalState",
  default: {
    value: 0,
    maxValue: 4,
  },
});
