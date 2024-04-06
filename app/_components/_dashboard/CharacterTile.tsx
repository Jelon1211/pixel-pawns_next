"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const characterVariants = {
  hidden: { scale: 0.8, rotate: -10, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const CharacterTile = ({
  img,
  name,
  hp,
  atk,
  isAlive,
  id,
  index,
  onClick,
}: any) => {
  return (
    <motion.div
      variants={characterVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="w-1/4 p-2 flex flex-col items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={img ? img : ""}
        alt={name}
        className="aspect-square object-cover rounded-md"
        width={256}
        height={256}
      />
      <h3 className="mt-2 text-sm text-white text-center truncate">{name}</h3>
    </motion.div>
  );
};

export default CharacterTile;
