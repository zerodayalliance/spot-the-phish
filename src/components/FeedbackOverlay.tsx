"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconCheck, IconSkull, IconInfoCircle } from "@tabler/icons-react";
import { POINTS_PER_CORRECT } from "@/data/scenarios";

interface FeedbackOverlayProps {
  isCorrect: boolean;
  explanation: string;
  onContinue: () => void;
  isVisible: boolean;
}

export default function FeedbackOverlay({
  isCorrect,
  explanation,
  onContinue,
  isVisible,
}: FeedbackOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className={`
              relative max-w-md w-full rounded-2xl p-8 text-center shadow-2xl
              ${isCorrect ? "bg-green-900/90" : "bg-red-900/90"}
            `}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 10 }}
              className={`
                mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full
                ${isCorrect ? "bg-green-500" : "bg-red-500"}
              `}
            >
              {isCorrect ? (
                <IconCheck size={48} className="text-white" strokeWidth={3} />
              ) : (
                <IconSkull size={48} className="text-white" strokeWidth={2} />
              )}
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-2 text-3xl font-black text-white"
            >
              {isCorrect ? "CORRECT!" : "HACKED!"}
            </motion.h2>

            {isCorrect && (
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="mb-4 text-2xl font-bold text-green-300"
              >
                +{POINTS_PER_CORRECT} Points
              </motion.p>
            )}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 rounded-lg bg-black/30 p-4"
            >
              <div className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300">
                <IconInfoCircle size={16} />
                WHY?
              </div>
              <p className="text-sm leading-relaxed text-slate-200">
                {explanation}
              </p>
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={onContinue}
              className={`
                rounded-full px-8 py-3 font-bold text-white transition-all
                ${
                  isCorrect
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-red-600 hover:bg-red-500"
                }
              `}
            >
              CONTINUE
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
