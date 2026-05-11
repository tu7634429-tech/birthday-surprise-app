import { motion } from "framer-motion";
import { FaHeart, FaCamera, FaGift } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

function BirthdayDateCards({ dates }) {
  if (!dates || dates.length === 0) return null;

  const icons = [FaHeart, FaCamera, FaCalendarDays, FaGift];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-64 w-64 rounded-full bg-rose-200/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">
            Special Dates
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            Dates that mean something
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Some dates are more than numbers. They become memories we keep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dates.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                className="group rounded-[2rem] border border-pink-100 bg-white/85 p-6 text-center shadow-xl shadow-pink-100/60 backdrop-blur transition hover:-translate-y-2"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-pink-500 transition group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="mb-2 text-2xl font-bold text-[#3b1f2b]">
                  {item.title}
                </h3>

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                  {item.date}
                </p>

                <p className="leading-7 text-gray-600">{item.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BirthdayDateCards;