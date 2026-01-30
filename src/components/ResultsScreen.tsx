"use client";

import { motion } from "framer-motion";
import {
  IconRefresh,
  IconTrophy,
  IconShieldCheck,
  IconAlertTriangle,
  IconSkull,
} from "@tabler/icons-react";
import { ROUNDS_PER_GAME, POINTS_PER_CORRECT } from "@/data/scenarios";

interface ResultsScreenProps {
  score: number;
  correctAnswers: number;
  onPlayAgain: () => void;
}

function getRank(correct: number, total: number) {
  const percentage = correct / total;
  if (percentage === 1) {
    return {
      title: "Cyber Ninja",
      icon: IconTrophy,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500",
      description: "Untouchable! You spotted every phishing attempt.",
    };
  } else if (percentage >= 0.6) {
    return {
      title: "Security Aware",
      icon: IconShieldCheck,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500",
      description: "Good awareness! Keep practicing to spot all the tricks.",
    };
  } else {
    return {
      title: "Easy Target",
      icon: IconSkull,
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500",
      description: "Careful! Scammers would love to find you online.",
    };
  }
}

export default function ResultsScreen({
  score,
  correctAnswers,
  onPlayAgain,
}: ResultsScreenProps) {
  const rank = getRank(correctAnswers, ROUNDS_PER_GAME);
  const RankIcon = rank.icon;
  const maxScore = ROUNDS_PER_GAME * POINTS_PER_CORRECT;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 10, delay: 0.2 }}
        className={`mb-8 rounded-full p-6 ${rank.bgColor} border-4 ${rank.borderColor}`}
      >
        <RankIcon size={80} className={rank.color} strokeWidth={1.5} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`mb-2 text-4xl font-black md:text-5xl ${rank.color}`}
      >
        {rank.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8 max-w-md text-lg text-slate-400"
      >
        {rank.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-8 rounded-2xl bg-slate-800 px-12 py-6"
      >
        <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Final Score
        </div>
        <div className="text-5xl font-black text-white md:text-6xl">
          {correctAnswers}/{ROUNDS_PER_GAME}
        </div>
        <div className="mt-2 text-xl text-blue-400">
          {score} / {maxScore} points
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={onPlayAgain}
        className="group mb-10 flex items-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 px-10 py-5 text-xl font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 cursor-pointer"
      >
        <IconRefresh
          size={24}
          className="transition-transform group-hover:rotate-180"
        />
        PLAY AGAIN
      </motion.button>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-sm text-slate-500"
      >
        <div className="mb-2 flex items-center justify-center gap-2">
          <IconAlertTriangle size={20} className="text-yellow-500" />
          <span className="text-lg">
            Stay vigilant online. Always verify URLs before entering
            credentials.
          </span>
        </div>
        <div className="mt-8 text-slate-400">
          <span>Built by </span>
          <span>
            <a
              href="https://zerodayalliance.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-400 text-slate-300"
            >
              ZeroDay Alliance
            </a>
          </span>
        </div>
      </motion.footer>
    </div>
  );
}
