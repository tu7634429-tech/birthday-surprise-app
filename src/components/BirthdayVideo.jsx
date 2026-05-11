import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

function BirthdayVideo({ video }) {
  if (!video || !video.url) return null;

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-rose-200/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-pink-500">
            <FaPlay />
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">
            Video Message
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            {video.title}
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            {video.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white/80 p-3 shadow-2xl shadow-pink-100/70 backdrop-blur"
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <video
            className="aspect-video w-full rounded-[1.5rem] bg-black object-cover"
            controls
            playsInline
          >
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}

export default BirthdayVideo;