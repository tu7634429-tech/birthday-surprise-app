import { motion } from "framer-motion";
import { FaClock, FaHeart } from "react-icons/fa";

function BirthdayTimeline({ timeline }) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-52 w-52 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-pink-500">
            <FaClock />
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">
            Memory Timeline
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            A few moments that stayed
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Some memories become little chapters we carry with us forever.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-pink-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                    isLeft ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <div className="absolute left-4 top-8 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg shadow-pink-200 md:left-1/2">
                    <FaHeart className="text-xs" />
                  </div>

                  <div
                    className={`ml-10 rounded-[2rem] border border-pink-100 bg-white/85 p-5 shadow-xl shadow-pink-100/60 backdrop-blur md:ml-0 ${
                      isLeft ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <div className="mb-4 aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                      {item.date}
                    </p>

                    <h3 className="mb-3 text-2xl font-bold text-[#3b1f2b]">
                      {item.title}
                    </h3>

                    <p className="leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BirthdayTimeline;