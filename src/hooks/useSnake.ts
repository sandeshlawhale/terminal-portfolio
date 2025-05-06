"use client";
import { useState } from "react";

export const useSnake = () => {
  const [showSnakeGame, setShowSnakeGame] = useState<boolean>(false);

  return {
    showSnakeGame,
    openSnakeGame: () => setShowSnakeGame(true),
    closeSnakeGame: () => setShowSnakeGame(false),
  };
};
