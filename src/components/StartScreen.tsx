"use client";

import { motion } from "framer-motion";
import { IconShieldCheck, IconSearch } from "@tabler/icons-react";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-8"
      >
        <div className="relative">
          <IconShieldCheck
            size={100}
            className="text-blue-500"
            strokeWidth={1.5}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl"
      >
        CAN YOU{" "}
        <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          SPOT THE FAKE?
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12 text-xl text-slate-400 md:text-2xl"
      >
        3 Rounds. Real vs. Scam. Test your eyes.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        onClick={onStart}
        className="group relative overflow-hidden rounded-full bg-linear-to-r from-blue-600 to-cyan-600 px-10 py-5 text-xl font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40"
      >
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-blue-400"
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        <span className="relative flex items-center gap-3">
          <IconSearch size={24} />
          START INVESTIGATION
        </span>
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-sm text-slate-500"
      >
        Click on the website you trust. Look carefully at the URL!
      </motion.p>
    </div>
  );
}
