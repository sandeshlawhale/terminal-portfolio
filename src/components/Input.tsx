"use client";
import React, { Dispatch, RefObject, SetStateAction, useState } from "react";
import Ps1 from "./Ps1";
import { history } from "./history/interface";
import { shell } from "@/utils/shell";

interface InputProps {
  command: string;
  setCommand: (value: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  history: Array<history>;
  setHistory: (value: string) => void;
  clearHistory: () => void;
  lastCommandIndex: number;
  setLastCommandIndex: Dispatch<SetStateAction<number>>;
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
      await shell(command, setHistory, clearHistory, setCommand);
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
          className="outline-none border-none grow"
        />
      </div>
    );
};

export default Input;
