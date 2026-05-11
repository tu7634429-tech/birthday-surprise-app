import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift, FaHeart } from "react-icons/fa";
import confetti from "canvas-confetti";

function BirthdayGiftReveal({ gift }) {
  const [isRevealed, setIsRevealed] = useState(false);

  if (!gift) return null;

  const revealGift = () => {
    setIsRevealed(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.65 },
    });
  };

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-52 w-52 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-purple-100/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">
            Gift Reveal
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            {gift.title}
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            {gift.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-xl rounded-[2rem] border border-pink-100 bg-white/85 p-8 shadow-2xl shadow-pink-100/70 backdrop-blur md:p-12"
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={revealGift}
            disabled={isRevealed}
            className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-pink-500 text-5xl text-white shadow-xl shadow-pink-200 transition disabled:cursor-default md:h-40 md:w-40 md:text-6xl"
            animate={
              isRevealed
                ? {
                    rotate: [0, -8, 8, 0],
                    scale: [1, 1.1, 1],
                  }
                : {
                    y: [0, -8, 0],
                    rotate: [0, 4, -4, 0],
                  }
            }
            transition={{
              duration: isRevealed ? 0.8 : 2,
              repeat: isRevealed ? 0 : Infinity,
              ease: "easeInOut",
            }}
            whileHover={!isRevealed ? { scale: 1.08 } : {}}
            whileTap={!isRevealed ? { scale: 0.95 } : {}}
          >
            <FaGift />
          </motion.button>

          {!isRevealed && (
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
              {gift.buttonText}
            </p>
          )}

          <AnimatePresence>
            {isRevealed && (
              <motion.div
                className="mt-6 rounded-[1.5rem] bg-pink-50 p-6"
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 flex justify-center text-pink-500">
                  <FaHeart />
                </div>

                <p className="text-xl font-semibold leading-8 text-[#3b1f2b]">
                  {gift.hiddenMessage}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default BirthdayGiftReveal;