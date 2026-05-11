import { motion } from "framer-motion";
import { FaHeart, FaRegSmileBeam, FaStar, FaGift } from "react-icons/fa";

function BirthdayMemoryCards({ cards }) {
  if (!cards || cards.length === 0) return null;

  const icons = [FaHeart, FaRegSmileBeam, FaStar, FaGift];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-purple-100/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">
            Little Notes
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            Things I wanted to tell you
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            A few thoughts, wishes, and memories saved just for this day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-pink-100 bg-white/85 p-8 shadow-xl shadow-pink-100/60 backdrop-blur"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-pink-100/70 transition group-hover:scale-125" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-pink-500 transition group-hover:rotate-6 group-hover:scale-110">
                    <Icon />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-[#3b1f2b]">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-8 text-gray-600">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BirthdayMemoryCards;