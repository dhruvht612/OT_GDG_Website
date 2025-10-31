import { motion } from 'framer-motion';

const FloatingElements = () => {
  const floatingShapes = [
    { size: 60, color: 'gdg-blue', delay: 0, duration: 8 },
    { size: 40, color: 'gdg-green', delay: 2, duration: 6 },
    { size: 80, color: 'gdg-yellow', delay: 4, duration: 10 },
    { size: 50, color: 'gdg-red', delay: 1, duration: 7 },
    { size: 30, color: 'gdg-blue', delay: 3, duration: 5 },
    { size: 70, color: 'gdg-green', delay: 5, duration: 9 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full opacity-10 bg-${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
