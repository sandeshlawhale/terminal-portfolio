"use client";
import History from "@/components/history/history";
import { useHistory } from "@/components/history/hook";
import Input from "@/components/Input";
import SnakeBoard from "@/components/snake-board";
import { useSnake } from "@/hooks/useSnake";
import { banner } from "@/utils/bin";
import { useCallback, useEffect, useRef } from "react";

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const snakeRef = useRef<HTMLDivElement>(null);

  const {
    command,
    setCommand,
    history,
    setHistory,
    clearHistory,
    lastCommandIndex,
    setLastCommandIndex,
  } = useHistory();
  const { showSnakeGame, openSnakeGame, closeSnakeGame } = useSnake();

  const init = useCallback(() => {
    setHistory(banner());
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  const onClickAnywhere = useCallback(() => {
    if (showSnakeGame) {
      snakeRef?.current?.focus();
      return;
    }
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [showSnakeGame ]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history, showSnakeGame]);

  return (
    <main
      className="w-full h-full border-2 border-gray rounded-md px-4 py-2 sm:px-10 sm:py-6 overflow-auto scroll-smooth"
      onClick={onClickAnywhere}
    >
      <History history={history} />

      <Input
        command={command}
        setCommand={setCommand}
        inputRef={inputRef}
        history={history}
        setHistory={setHistory}
        clearHistory={clearHistory}
        lastCommandIndex={lastCommandIndex}
        setLastCommandIndex={setLastCommandIndex}
        openSnakeGame={openSnakeGame}
      />
      {showSnakeGame && (
        <SnakeBoard snakeRef={snakeRef} closeSnakeGame={closeSnakeGame} />
      )}
    </main>
  );
};

export default Home;
