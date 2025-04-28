import { useState } from "react";
import { history } from "./interface";
export const useHistory = () => {
  const [command, setCommand] = useState<string>("");
  const [history, setHistory] = useState<Array<history>>([]);
  const [lastCommandIndex, setLastCommandIndex] = useState<number>(0);

  return {
    command,
    history,
    lastCommandIndex,
    setCommand,
    setHistory: (value: string) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
