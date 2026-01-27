"use client";

import { motion } from "framer-motion";
import {
  IconArrowLeft,
  IconArrowRight,
  IconRefresh,
  IconLock,
  IconX,
  IconMinus,
  IconSquare,
} from "@tabler/icons-react";

interface MockBrowserProps {
  url: string;
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
  isCorrect?: boolean;
  showResult?: boolean;
}

export default function MockBrowser({
  url,
  children,
  onClick,
  isSelected = false,
  isCorrect,
  showResult = false,
}: MockBrowserProps) {
  const isSecure = url.startsWith("https://");

  return (
    <motion.div
      className={`
        relative w-full max-w-xl overflow-hidden rounded-xl border-2 shadow-2xl
        transition-all duration-200 cursor-pointer
        ${
          showResult && isSelected
            ? isCorrect
              ? "border-green-500 ring-4 ring-green-500/30"
              : "border-red-500 ring-4 ring-red-500/30"
            : isSelected
              ? "border-blue-500 ring-4 ring-blue-500/30"
              : "border-slate-600 hover:border-blue-400 hover:ring-2 hover:ring-blue-400/20"
        }
      `}
      onClick={onClick}
      whileHover={{ scale: onClick ? 1.02 : 1 }}
      whileTap={{ scale: onClick ? 0.98 : 1 }}
    >
      <div className="flex items-center justify-between bg-slate-800 px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <IconMinus size={14} />
          <IconSquare size={12} />
          <IconX size={14} />
        </div>
      </div>

      <div className="flex items-center gap-2 bg-slate-700 px-3 py-2">
        <div className="flex items-center gap-1 text-slate-400">
          <IconArrowLeft size={16} className="opacity-50" />
          <IconArrowRight size={16} className="opacity-50" />
          <IconRefresh size={16} />
        </div>

        <div className="flex flex-1 items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5">
          {isSecure && (
            <IconLock size={14} className="text-green-500 shrink-0" />
          )}
          <span className="text-sm font-mono text-slate-200 truncate">
            {url}
          </span>
        </div>
      </div>

      <div className="min-h-50 bg-white p-4">{children}</div>

      {showResult && isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`
            absolute inset-0 flex items-center justify-center
            ${isCorrect ? "bg-green-500/20" : "bg-red-500/20"}
          `}
        >
          {isCorrect ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="rounded-full bg-green-500 p-4"
            >
              <svg
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              className="rounded-lg bg-red-600 px-6 py-3 shadow-lg"
            >
              <span className="text-2xl font-black text-white tracking-wider">
                HACKED!
              </span>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
