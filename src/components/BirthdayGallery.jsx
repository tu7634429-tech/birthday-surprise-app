import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa";
import useLightbox from "../hooks/useLightbox";
import BirthdayLightbox from "./BirthdayLightbox";

function BirthdayGallery({ gallery }) {
  const { isOpen, selectedIndex, openLightbox, closeLightbox } = useLightbox();

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-rose-200/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-pink-500">
            <FaImages />
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">
            Photo Memories
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            Little moments, big memories
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            A small collection of memories that made the journey more beautiful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-pink-100/60 ${
                index % 2 === 0 ? "lg:mt-8" : ""
              }`}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <p className="text-sm font-medium leading-6 text-white">
                  {item.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <BirthdayLightbox
        images={gallery}
        isOpen={isOpen}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
      />
    </section>
  );
}

export default BirthdayGallery;