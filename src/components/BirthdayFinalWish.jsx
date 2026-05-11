import { motion } from "framer-motion";
import { FaHeart, FaRotateRight } from "react-icons/fa6";

function BirthdayFinalWish({ finalWish }) {
  if (!finalWish) return null;

  const replaySurprise = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-purple-100/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-pink-500 text-3xl text-white shadow-xl shadow-pink-200"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          animate={{
            y: [0, -8, 0],
          }}
        >
          <FaHeart />
        </motion.div>

        <motion.p
          className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          One More Wish
        </motion.p>

        <motion.h2
          className="mb-8 text-5xl font-bold leading-tight text-[#3b1f2b] md:text-7xl"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {finalWish.title}
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg leading-9 text-gray-600 md:text-xl"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {finalWish.message}
        </motion.p>

        <motion.button
          onClick={replaySurprise}
          className="inline-flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-pink-200 transition hover:bg-pink-600 md:text-base"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <FaRotateRight />
          {finalWish.buttonText}
        </motion.button>
      </div>
    </section>
  );
}

export default BirthdayFinalWish;