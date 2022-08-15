import React from "react";

import { motion } from "framer-motion";

export function Community() {
  return (
    <div className="px-10 my-10">
      <h1 className="text-[#E6E0FA] text-2xl  lg:text-4xl font-bold text-center">
        Join our community
      </h1>
      <div className="flex justify-between w-full lg:w-1/2 2xl:w-1/3 m-auto text-[#F6D10B] mt-8">
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <img src="/instagram.png" alt="Instagram" className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <img src="/facebook.png" alt="Facebook" className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <img src="/twitter.png" alt="Twitter" className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <img src="/telegram.png" alt="Telegram" className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <img src="/discord.png" alt="Discord" className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <img src="/medium.png" alt="Medium" className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12" />
        </motion.div>
      </div>
    </div>
  );
}
