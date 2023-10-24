import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scaleX: progress / 100 });
  }, [progress, controls]);

  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: "#e0e0e0",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          backgroundColor: "#0f33ff",
          height: "100%",
          transformOrigin: "left",
        }}
      />
    </div>
  );
};

export default ProgressBar;
