"use client";
import History from "@/components/history/history";
import { useHistory } from "@/components/history/hook";
import Input from "@/components/Input";
import { banner } from "@/utils/bin";
import { useCallback, useEffect, useRef } from "react";

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    command,
    setCommand,
    history,
    setHistory,
    clearHistory,
    lastCommandIndex,
    setLastCommandIndex,
  } = useHistory();

  const init = useCallback(() => {
    setHistory(banner());
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  const onClickAnywhere = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <main
      className="w-full h-full border-2 border-gray rounded-md px-10 py-6 overflow-auto scroll-smooth"
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
      />
    </main>
  );
};

export default Home;
