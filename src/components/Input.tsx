"use client";
import React, { Dispatch, RefObject, SetStateAction, useState } from "react";
import Ps1 from "./Ps1";
import { history } from "./history/interface";
import { shell } from "@/utils/shell";
import * as bin from "@/utils/bin/index";

interface InputProps {
  command: string;
  setCommand: (value: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  history: Array<history>;
  setHistory: (value: string) => void;
  clearHistory: () => void;
  lastCommandIndex: number;
  setLastCommandIndex: Dispatch<SetStateAction<number>>;
  openSnakeGame: () => void;
}
const Input = ({
  command,
  setCommand,
  inputRef,
  history,
  setHistory,
  clearHistory,
  lastCommandIndex,
  setLastCommandIndex,
  openSnakeGame,
}: InputProps) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands = history
      .map(({ command }) => command)
      .filter((command: string) => command);

    if (event.ctrlKey && event.key === "c") {
      event.preventDefault();
      setCommand("");
    }

    if (event.ctrlKey && event.key === "l") {
      event.preventDefault();
      clearHistory();
    }

    if (event.key === "Enter") {
      event.preventDefault();
      setLoading(true);
      setLastCommandIndex(0);
      await shell(command, setHistory, clearHistory, setCommand, openSnakeGame);
      setLoading(false);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex + 1;

      if (index <= commands.length) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
        console.log(command);
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex - 1;

      if (index > 0) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setCommand("");
      }
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  if (!loading)
    return (
      <div className="flex gap-2">
        <label htmlFor="cmd_input" className="shrink">
          <Ps1 />
        </label>
        <input
          ref={inputRef}
          id="cmd_input"
          type="text"
          value={command}
          onChange={onChange}
          onKeyDown={onSubmit}
          autoFocus
          autoComplete="off"
          spellCheck="false"
          className={`outline-none border-none grow ${
            command
              ? Object.keys(bin).includes(
                  command.trim().split(" ")[0].toLowerCase()
                ) ||
                command.trim().split(" ")[0].toLowerCase() === "clear" ||
                command.trim().split(" ")[0].toLowerCase() === "snake"
                ? "text-green"
                : "text-red"
              : "text-white"
          }`}
        />
      </div>
    );
};

export default Input;
