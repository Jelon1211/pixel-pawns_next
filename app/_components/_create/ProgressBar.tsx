import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
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
      <span className="text-white text-2xl text-center flex p-5">
        Hey there! Hang tight, my fancy AI is whipping up your character. Might
        take a sec, but trust me, I've got some 'NASA-level' computers grinding
        away at it. Cool things are worth the wait, right?
      </span>
      <div className="flex justify-center p-10">
        <Image
          src="/assets/img/loading.gif"
          alt="dacing banana"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
