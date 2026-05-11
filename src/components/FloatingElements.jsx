import { motion } from "framer-motion";
import { FaHeart, FaStar, FaGift } from "react-icons/fa";

function FloatingElements() {
  const elements = [
    {
      icon: <FaHeart />,
      top: "14%",
      left: "10%",
      delay: 0,
      size: "22px",
    },
    {
      icon: <FaStar />,
      top: "22%",
      left: "82%",
      delay: 0.4,
      size: "20px",
    },
    {
      icon: <FaGift />,
      top: "68%",
      left: "12%",
      delay: 0.8,
      size: "24px",
    },
    {
      icon: <FaHeart />,
      top: "74%",
      left: "84%",
      delay: 1.2,
      size: "20px",
    },
    {
      icon: <FaStar />,
      top: "48%",
      left: "6%",
      delay: 1.6,
      size: "18px",
    },
    {
      icon: <FaGift />,
      top: "48%",
      left: "91%",
      delay: 2,
      size: "22px",
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {elements.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-300/70"
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.size,
          }}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.7,
          }}
          animate={{
            opacity: [0.25, 0.9, 0.25],
            y: [0, -28, 0],
            rotate: [0, 12, -12, 0],
            scale: [0.9, 1.12, 0.9],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingElements;