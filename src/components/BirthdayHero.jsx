import { motion } from "framer-motion";
import FloatingElements from "./FloatingElements";

function BirthdayHero({ data }) {
  const scrollToContent = () => {
    const section = document.getElementById("birthday-content");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50/90 via-rose-50/90 to-white/90 px-6">
      <FloatingElements />

      {/* Soft background glow effects */}
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute bottom-24 left-0 h-56 w-56 rounded-full bg-purple-100/60 blur-3xl" />

      {/* Main hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center text-center">
        <motion.p
          className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] theme-primary-text md:text-sm"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Birthday Surprise
        </motion.p>

        <motion.h1
          className="mb-6 text-5xl font-bold leading-tight theme-text md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          {data.hero.title}
        </motion.h1>

        <motion.p
          className="mx-auto mb-9 max-w-2xl text-base leading-8 text-gray-600 md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.45,
            ease: "easeOut",
          }}
        >
          {data.hero.subtitle}
        </motion.p>

        <motion.button
          onClick={scrollToContent}
          className="rounded-full px-9 py-4 text-sm font-semibold text-white shadow-xl transition md:text-base theme-primary-bg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
        >
          {data.hero.buttonText}
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 h-12 w-7 -translate-x-1/2 rounded-full border p-1 theme-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="mx-auto h-2 w-2 rounded-full theme-primary-bg"
            animate={{
              y: [0, 18, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default BirthdayHero;