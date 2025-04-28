import * as bin from "../utils/bin/index";

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: (value: string) => void
) => {
  const args = command.split(" ");
  const firstArgs = args[0].toLowerCase();

  if (firstArgs === "clear") {
    clearHistory();
  } else if (firstArgs === "") {
    setHistory("");
  } else if (Object.keys(bin).indexOf(firstArgs) === -1) {
    setHistory(`shell: command not found: ${firstArgs}, Try "help" to start`);
  } else {
    const output = await bin[firstArgs as keyof typeof bin]();
    setHistory(output);
  }
  // for non existent cmd
  // for output
  setCommand("");
};
