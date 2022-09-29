import React from "react";

import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { TbBrandDiscord, TbBrandTelegram } from "react-icons/tb";
import { AiOutlineMedium } from "react-icons/ai";

export function Community() {
  return (
    <div className="px-10 my-10">
      <h1 className="dark:text-[#E6E0FA] text-[#413A5A] text-2xl  lg:text-4xl font-bold text-center">
        Join our community
      </h1>
      <div className="flex justify-between w-full lg:w-1/2 2xl:w-1/3 m-auto text-[#F6D10B] mt-8 z-20">
        <motion.div
          className="z-20"
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <a href="https://www.instagram.com/accounts/login/?next=/centaurusnft/">
            <BsInstagram className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12 text-[#413A5A] dark:text-[#F6D10B]" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          className="z-20"
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <a href="https://www.facebook.com/Centaurusnft-105638135319887">
            <RiFacebookBoxLine className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12 text-[#413A5A] dark:text-[#F6D10B]" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          className="z-20"
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <a href="https://twitter.com/CNftmarketing">
            {" "}
            <FiTwitter className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12 text-[#413A5A] dark:text-[#F6D10B]" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          className="z-20"
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <a href="https://t.me/centarusofficial">
            <TbBrandTelegram className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12 text-[#413A5A] dark:text-[#F6D10B]" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          className="z-20"
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <a href="https://discord.gg/yGuN8GXv2f">
            <TbBrandDiscord className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12 text-[#413A5A] dark:text-[#F6D10B]" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          className="z-20"
          whileTap={{
            scale: 0.9,
            rotate: [0, 45, 0],
          }}
        >
          <a href="https://medium.com/@centaurusnftmarketing/centaurus-feature-rich-highly-compatible-and-next-gen-nft-platform-d0d1cffc4484">
            <AiOutlineMedium className="w-8 h-8 cursor-pointer lg:h-12 lg:w-12 text-[#413A5A] dark:text-[#F6D10B]" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
