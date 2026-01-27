"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MockBrowser from "./MockBrowser";
import FeedbackOverlay from "./FeedbackOverlay";
import { Scenario, POINTS_PER_CORRECT, TOTAL_ROUNDS } from "@/data/scenarios";
import { IconAlertTriangle } from "@tabler/icons-react";

interface GameScreenProps {
  scenario: Scenario;
  currentRound: number;
  score: number;
  onAnswer: (isCorrect: boolean) => void;
  onNextRound: () => void;
}

export default function GameScreen({
  scenario,
  currentRound,
  score,
  onAnswer,
  onNextRound,
}: GameScreenProps) {
  const [selectedSide, setSelectedSide] = useState<"left" | "right" | null>(
    null,
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  const [isRealOnLeft, setIsRealOnLeft] = useState(true);

  useEffect(() => {
    setIsRealOnLeft(Math.random() > 0.5);
    setSelectedSide(null);
    setShowFeedback(false);
  }, [scenario.id]);

  const handleSelect = (side: "left" | "right") => {
    if (selectedSide) return;

    setSelectedSide(side);

    const clickedReal =
      (side === "left" && isRealOnLeft) || (side === "right" && !isRealOnLeft);
    setIsCorrect(clickedReal);

    if (!clickedReal) {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 500);
    }

    setTimeout(() => {
      setShowFeedback(true);
      onAnswer(clickedReal);
    }, 800);
  };

  const handleContinue = () => {
    setShowFeedback(false);
    onNextRound();
  };

  const leftUrl = isRealOnLeft ? scenario.realUrl : scenario.fakeUrl;
  const rightUrl = isRealOnLeft ? scenario.fakeUrl : scenario.realUrl;
  const leftContent = isRealOnLeft
    ? scenario.realContent
    : scenario.fakeContent;
  const rightContent = isRealOnLeft
    ? scenario.fakeContent
    : scenario.realContent;

  return (
    <>
      <motion.div
        className="flex min-h-screen flex-col items-center justify-center px-4 py-8"
        animate={shouldShake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-8">
            <div className="text-slate-400">
              Round{" "}
              <span className="text-2xl font-bold text-white">
                {currentRound}
              </span>{" "}
              / {TOTAL_ROUNDS}
            </div>
            <div className="text-slate-400">
              Score:{" "}
              <span className="text-2xl font-bold text-blue-400">{score}</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Which website do you <span className="text-blue-400">TRUST</span>?
          </h2>
          <p className="mt-2 text-slate-400">Click on the legitimate website</p>
        </div>

        <div className="flex w-full max-w-5xl flex-col items-center gap-6 md:flex-row md:gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${scenario.id}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex-1 w-full"
            >
              <MockBrowser
                url={leftUrl}
                onClick={() => handleSelect("left")}
                isSelected={selectedSide === "left"}
                isCorrect={selectedSide === "left" ? isCorrect : undefined}
                showResult={!!selectedSide}
              >
                <BrowserContent content={leftContent} />
              </MockBrowser>
            </motion.div>

            <motion.div
              key={`right-${scenario.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="flex-1 w-full"
            >
              <MockBrowser
                url={rightUrl}
                onClick={() => handleSelect("right")}
                isSelected={selectedSide === "right"}
                isCorrect={selectedSide === "right" ? isCorrect : undefined}
                showResult={!!selectedSide}
              >
                <BrowserContent content={rightContent} />
              </MockBrowser>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <FeedbackOverlay
        isCorrect={isCorrect}
        explanation={scenario.explanation}
        onContinue={handleContinue}
        isVisible={showFeedback}
      />
    </>
  );
}

function BrowserContent({ content }: { content: Scenario["realContent"] }) {
  return (
    <div
      className="min-h-45 rounded-lg p-4"
      style={{ backgroundColor: content.bgColor }}
    >
      <h3
        className="mb-3 text-xl font-bold"
        style={{ color: content.accentColor }}
      >
        {content.hasUrgency && (
          <IconAlertTriangle
            className="mr-2 inline-block text-red-500\"
            size={20}
          />
        )}
        {content.title}
      </h3>
      <p className="text-sm text-slate-700 leading-relaxed">{content.body}</p>
    </div>
  );
}
