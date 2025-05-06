"use client";
import { useSnake } from "@/hooks/useSnake";
import React, {
  KeyboardEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

interface Point {
  x: number;
  y: number;
}

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Difficulty = "LOW" | "MID" | "HARD";

const SnakeBoard = ({
  snakeRef,
  closeSnakeGame,
}: {
  snakeRef: RefObject<HTMLDivElement | null>;
  closeSnakeGame: () => void;
}) => {
  const GRID_SIZE = 20;
  const GRID_ROWS = Math.floor(window.innerHeight / GRID_SIZE - 10);
  const GRID_COLUMN = Math.floor(window.innerWidth / GRID_SIZE - 5);

  const [snake, setSnake] = useState<Point[]>([
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [food, setFood] = useState<Point>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<Difficulty>("MID");
  const difficultyLevels: Array<Difficulty> = ["LOW", "MID", "HARD"];

  const moveSnake = () => {
    const newSnake = [...snake];
    const snakeHead = { ...newSnake[0] };

    if (direction === "DOWN") {
      snakeHead.y += 1;
    }
    if (direction === "UP") {
      snakeHead.y -= 1;
    }
    if (direction === "RIGHT") {
      snakeHead.x += 1;
    }
    if (direction === "LEFT") {
      snakeHead.x -= 1;
    }

    if (
      snakeHead.x > GRID_COLUMN - 1 ||
      snakeHead.x < 0 ||
      snakeHead.y < 0 ||
      snakeHead.y > GRID_ROWS - 1 ||
      newSnake.some(
        (snakePart) =>
          snakePart.x === snakeHead.x && snakePart.y === snakeHead.y
      )
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(snakeHead);

    if (snakeHead.x === food.x && snakeHead.y === food.y) {
      generateFood();
      setScore((prev) => prev + 1);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (gameOver && e.key === "Enter") {
      resetGame();
      return;
    }

    if (e.ctrlKey && e.key === "Enter") {
      resetGame();
      return;
    }

    if (e.ctrlKey && e.key === "c") {
      closeSnakeGame();
      return;
    }

    if (e.ctrlKey && e.key.toLowerCase() === "d") {
      e.preventDefault();
      if (!gameOver) return;
      const currentIndex = difficultyLevels.indexOf(difficulty);
      const nextIndex = (currentIndex + 1) % difficultyLevels.length;
      setDifficulty(difficultyLevels[nextIndex]);
      return;
    }

    if (e.key === "ArrowUp" && direction !== "DOWN") {
      setDirection("UP");
    }
    if (e.key === "ArrowDown" && direction !== "UP") {
      setDirection("DOWN");
    }
    if (e.key === "ArrowLeft" && direction !== "RIGHT") {
      setDirection("LEFT");
    }
    if (e.key === "ArrowRight" && direction !== "LEFT") {
      setDirection("RIGHT");
    }
  };

  const resetGame = () => {
    setSnake([
      { x: 2, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 0 },
    ]);
    setDirection("RIGHT");
    setScore(0);
    generateFood();
    setGameOver(false);
  };

  const generateFood = () => {
    const x = Math.floor(Math.random() * GRID_COLUMN);
    const y = Math.floor(Math.random() * GRID_ROWS);

    setFood({ x, y });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      snakeRef.current?.focus();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score);
    }
  }, [gameOver, score]);

  useEffect(() => {
    if (gameOver) return;
    const DeficultySpeed = {
      LOW: 100,
      MID: 60,
      HARD: 40,
    };
    const interval = setInterval(moveSnake, DeficultySpeed[difficulty]);
    return () => clearInterval(interval);
  }, [snake, direction]);

  useEffect(() => {
    generateFood();
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="flex flex-col items-end gap-2">
        <div className="flex gap-8 ">
          <p className="text-base">
            High Score: <span className="text-gray">{highScore}</span>
          </p>
          <p className="text-lg">
            SCORE:&nbsp;<span className="text-gray">{score}</span>
          </p>
        </div>
        <div
          onKeyDown={handleKeyPress}
          tabIndex={0}
          autoFocus
          className="border w-fit h-fit bg-background/80 backdrop-blur-sm rounded-md"
          ref={snakeRef}
        >
          {gameOver && (
            <div className="absolute inset-0 flex items-center justify-center text-7xl text-red">
              <p>Game Over!</p>
            </div>
          )}
          {Array.from({ length: GRID_ROWS }).map((_, y) => {
            return (
              <div key={y} className="flex">
                {Array.from({ length: GRID_COLUMN }).map((_, x) => {
                  return (
                    <div
                      key={x}
                      className={`flex h-5 w-5  
                    ${
                      snake.some(
                        (snakePart) => snakePart.x === x && snakePart.y === y
                      ) && "bg-green rounded-md"
                    }
                    ${
                      food.x === x &&
                      food.y === y &&
                      "bg-red rounded-sm animate-pulse"
                    }
                  `}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex gap-8 ">
          <p className="text-base">
            Exit Game: <span className="text-gray">Ctrl+C</span>
          </p>
          <p className="text-base">
            Restart Game: <span className="text-gray">Ctrl+Enter</span>
          </p>
          <p className="text-base">
            Difficulty: <span className="text-gray">{difficulty}</span>
          </p>
          <p className="text-base">
            Change Difficulty: <span className="text-gray">Ctrl+D</span>
          </p>
          <p className="text-base">
            Arrow Keys: <span className="text-gray">Move</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SnakeBoard;
