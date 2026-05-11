import { motion } from "framer-motion";
import { FaQuoteLeft, FaHeart } from "react-icons/fa";

function BirthdayMessage({ messages }) {
  const message = messages?.[0];

  if (!message) return null;

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-rose-200/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          className="rounded-[2rem] border border-pink-100 bg-white/80 p-8 text-center shadow-2xl shadow-pink-100/70 backdrop-blur md:p-14"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-pink-500"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaQuoteLeft />
          </motion.div>

          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            From the heart
          </motion.p>

          <motion.h2
            className="mb-8 text-3xl font-bold text-[#3b1f2b] md:text-5xl"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            {message.title}
          </motion.h2>

          <motion.p
            className="mx-auto mb-8 max-w-3xl text-lg leading-9 text-gray-600 md:text-xl"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            {message.text}
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-3 text-pink-500"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
          >
            <FaHeart />
            <span className="font-semibold">{message.signature}</span>
            <FaHeart />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BirthdayMessage;