"use client";

import { useState, useCallback, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StartScreen from "@/components/StartScreen";
import GameScreen from "@/components/GameScreen";
import ResultsScreen from "@/components/ResultsScreen";
import {
  getRandomScenarios,
  POINTS_PER_CORRECT,
  ROUNDS_PER_GAME,
  Scenario,
} from "@/data/scenarios";

type GameStatus = "start" | "playing" | "results";

export default function Home() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("start");
  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [sessionScenarios, setSessionScenarios] = useState<Scenario[]>([]);

  const handleStart = useCallback(() => {
    const randomScenarios = getRandomScenarios(ROUNDS_PER_GAME);
    setSessionScenarios(randomScenarios);
    setGameStatus("playing");
    setCurrentRound(1);
    setScore(0);
    setCorrectAnswers(0);
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + POINTS_PER_CORRECT);
      setCorrectAnswers((prev) => prev + 1);
    }
  }, []);

  const handleNextRound = useCallback(() => {
    if (currentRound >= ROUNDS_PER_GAME) {
      setGameStatus("results");
    } else {
      setCurrentRound((prev) => prev + 1);
    }
  }, [currentRound]);

  const handlePlayAgain = useCallback(() => {
    setGameStatus("start");
    setCurrentRound(1);
    setScore(0);
    setCorrectAnswers(0);
    setSessionScenarios([]);
  }, []);

  const currentScenario = sessionScenarios[currentRound - 1];

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {gameStatus === "start" && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StartScreen onStart={handleStart} />
          </motion.div>
        )}

        {gameStatus === "playing" && currentScenario && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GameScreen
              scenario={currentScenario}
              currentRound={currentRound}
              score={score}
              onAnswer={handleAnswer}
              onNextRound={handleNextRound}
            />
          </motion.div>
        )}

        {gameStatus === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ResultsScreen
              score={score}
              correctAnswers={correctAnswers}
              onPlayAgain={handlePlayAgain}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
