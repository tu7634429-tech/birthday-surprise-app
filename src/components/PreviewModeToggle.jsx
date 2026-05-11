import { motion } from "framer-motion";
import { FaEye, FaPen } from "react-icons/fa";

function PreviewModeToggle({ isPreviewMode, setIsPreviewMode }) {
  return (
    <motion.button
      onClick={() => setIsPreviewMode((prev) => !prev)}
      className="fixed right-4 top-4 z-[70] flex items-center gap-3 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-gray-800 shadow-xl backdrop-blur transition hover:bg-white md:right-6 md:top-6"
      initial={{ opacity: 0, y: -18, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.45 }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full text-white theme-primary-bg">
        {isPreviewMode ? <FaPen /> : <FaEye />}
      </span>

      {isPreviewMode ? "Edit Mode" : "Preview Mode"}
    </motion.button>
  );
}

export default PreviewModeToggle;