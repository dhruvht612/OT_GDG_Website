import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  // Parallax effect for mouse movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      x.set(e.clientX - innerWidth / 2);
      y.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gdg-dark-bg to-gdg-black flex items-center justify-center px-4">
      {/* Subtle moving gradient overlay */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gdg-blue/10 via-gdg-green/10 to-gdg-yellow/10 blur-3xl"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
      )}

      {/* Floating GDG shapes */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute w-8 h-8 bg-gdg-blue rounded-full top-16 left-10 opacity-30"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-10 h-10 bg-gdg-green rounded-full bottom-20 right-16 opacity-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-6 h-6 bg-gdg-yellow rounded-full top-1/2 left-1/4 opacity-25"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </>
      )}

      <motion.div
        style={!prefersReducedMotion ? { rotateX, rotateY } : {}}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {["blue", "green", "yellow"].map((color, index) => (
                <motion.div
                  key={color}
                  className={`w-16 h-16 bg-gdg-${color} rounded-2xl flex items-center justify-center`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-bold text-2xl">
                    {index === 1 ? "D" : "G"}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-gdg-blue">Google</span> Developer Groups
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-4">
            On Campus
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gdg-blue to-gdg-green mx-auto mb-8"></div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Empowering Ontario Tech students to learn, connect, and build with
            Google technologies.
          </motion.p>
          <p className="text-gray-400 mt-2">
            Join 200+ students exploring tech with us!
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Join Button */}
          <a href="#join" aria-label="Join the GDG on Campus community">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-gdg-blue to-gdg-green p-[2px] rounded-2xl">
                <button className="bg-gdg-dark-bg hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Join Our Community
                </button>
              </div>
            </motion.div>
          </a>

          {/* View Events Button (updated to use React Router Link) */}
          <Link to="/events" aria-label="View upcoming GDG events">
            <motion.button
              className="bg-gdg-dark-surface hover:bg-gdg-black text-gdg-blue border-2 border-gdg-blue px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(66, 133, 244, 0.2), 0 10px 10px -5px rgba(66, 133, 244, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              View Events
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            {[
              { value: "200+", label: "Members", color: "gdg-blue" },
              { value: "10+", label: "Events", color: "gdg-green" },
              { value: "10+", label: "Projects", color: "gdg-yellow" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className={`text-3xl font-bold text-${stat.color}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2 + index * 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
