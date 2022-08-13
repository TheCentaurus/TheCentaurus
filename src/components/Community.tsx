import React from "react";

import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { TbBrandTelegram, TbBrandDiscord } from "react-icons/tb";
import { FaMediumM } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export function Community() {
  return (
    <div className="px-10 my-10">
      <h1 className="text-[#E6E0FA] text-2xl  lg:text-4xl font-bold text-center">
        Join our community
      </h1>
      <div className="flex justify-between w-full lg:w-1/2 m-auto text-[#F6D10B] mt-8">
        <AiOutlineInstagram className="lg:h-12 lg:w-12 h-8 w-8" />
        <AiOutlineFacebook className="lg:h-12 lg:w-12 h-8 w-8" />
        <FiTwitter className="lg:h-11 lg:w-11 h-7 w-7 mt-1" />
        <TbBrandTelegram className="lg:h-12 lg:w-12 h-8 w-8" />
        <TbBrandDiscord className="lg:h-12 lg:w-12 h-8 w-8" />
        <FaMediumM className="lg:h-12 lg:w-12 h-8 w-8" />
      </div>
    </div>
  );
}
