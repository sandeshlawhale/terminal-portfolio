import * as bin from "../utils/bin/index";

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: (value: string) => void,
  openSnakeGame: () => void
) => {
  const args = command.split(" ");
  const firstArgs = args[0].toLowerCase();

  if (firstArgs === "clear") {
    clearHistory();
  } else if (firstArgs === "") {
    setHistory("");
  } else if (firstArgs === "snake") {
    openSnakeGame();
    setHistory("Opening Snake game...");
  } else if (!(firstArgs in bin)) {
    setHistory(`shell: command not found: ${firstArgs}, Try "help" to start`);
  } else {
    const output = await bin[firstArgs as keyof typeof bin](
      args.slice(1),
      setHistory
    );
    setHistory(output);
  }

  setCommand("");
};
