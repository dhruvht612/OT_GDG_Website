import { motion } from "framer-motion";
import reactLogo from "../assets/react.svg"; // Or your GDG logo if available

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#050505] z-50">
      {/* Spinning Logo */}
      <motion.img
        src={reactLogo} // Replace with GDG logo if you have one
        alt="GDG Logo"
        className="w-24 h-24 mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />

      {/* Loading Text */}
      <motion.div
        className="text-white text-xl font-semibold flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0.5, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
      >
        <span>Loading</span>
        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
        >
          .
        </motion.span>
      </motion.div>

      {/* Optional Brand Gradient Bar */}
      <motion.div
        className="mt-8 w-32 h-1 rounded-full bg-gradient-to-r from-gdg-blue via-gdg-yellow to-gdg-green"
        animate={{ scaleX: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Loading;
