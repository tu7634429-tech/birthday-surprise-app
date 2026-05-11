import { motion } from "framer-motion";
import { FaPalette } from "react-icons/fa";

function ThemeSwitcher({ themes, activeTheme, onThemeChange }) {
  if (!themes || themes.length === 0) return null;

  return (
    <motion.div
      className="fixed bottom-24 right-6 z-50 rounded-3xl border border-white/70 bg-white/85 p-3 shadow-xl backdrop-blur"
      initial={{ opacity: 0, x: 30, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-3 flex items-center gap-2 px-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
        <FaPalette />
        Theme
      </div>

      <div className="flex flex-col gap-2">
        {themes.map((theme) => {
          const isActive = activeTheme?.id === theme.id;

          return (
            <button
              key={theme.id}
              onClick={() => onThemeChange(theme)}
              className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-left transition ${
                isActive ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <span
                className="h-5 w-5 rounded-full border border-white shadow"
                style={{ backgroundColor: theme.primary }}
              />

              <span className="text-xs font-medium text-gray-700">
                {theme.name}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default ThemeSwitcher;