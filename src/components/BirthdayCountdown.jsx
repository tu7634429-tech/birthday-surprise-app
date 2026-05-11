import { motion } from "framer-motion";
import useCountdown from "../hooks/useCountdown";

function BirthdayCountdown({ date }) {
  const { days, hours, minutes, seconds, isCompleted } = useCountdown(date);

  const countdownItems = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Birthday Countdown
        </motion.p>

        <motion.h2
          className="mb-6 text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {isCompleted
            ? "The special day is here"
            : "Counting down to your special day"}
        </motion.h2>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-gray-600"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Every second brings us closer to a day made just for you.
        </motion.p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {countdownItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="rounded-3xl border border-pink-100 bg-white/80 p-6 shadow-xl shadow-pink-100/60 backdrop-blur"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="mb-2 text-4xl font-bold text-pink-500 md:text-5xl">
                {String(item.value).padStart(2, "0")}
              </div>

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BirthdayCountdown;