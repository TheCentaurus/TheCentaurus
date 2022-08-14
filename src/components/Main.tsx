import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import cardpic from "../assets/cardpic.png";
import elipsePic from "../assets/EllipseCardPic.png";
import verified from "../assets/verified.png";
import shakerElipsePic from "../assets/shaker-elipse.png";
import shakerCardPic from "../assets/shaker-rect.png";
import prmElipsePic from "../assets/plm-eclipse.png";
import prmCardPic from "../assets/plm-rect.png";
import { Feature } from "./Feature";
import { motion } from "framer-motion";
export function Main() {
  const sampleData = {
    data: [
      {
        title: "Indigo Bang",
        description:
          "Indigo Bang is a platform for the people to connect and share their ideas and experiences with the world.",
        pic: {
          src: cardpic,
        },
        elipsePic: {
          src: elipsePic,
        },
      },
      {
        title: "Shaker Sangam",
        description:
          "Shaker Sangam is a platform for the people to connect and share their ideas and experiences with the world.",
        pic: {
          src: shakerCardPic,
        },
        elipsePic: {
          src: shakerElipsePic,
        },
      },
      {
        title: "Prmlrecords",
        description:
          "Prmlrecords is a platform for the people to connect and share their ideas and experiences with the world.",
        pic: {
          src: prmCardPic,
        },
        elipsePic: {
          src: prmElipsePic,
        },
      },
    ],
  };

  return (
    <section className="text-gray-600 body-font md:px-20 xl:px-40 2xl:px-80 ">
      <div className="container 2xl:px-32 flex flex-col items-center  py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2  md:items-start md:text-left md:mb-0">
          <motion.h1
            initial={{ y: -20, x: 50, scale: 0.5 }}
            animate={{ y: 0, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="mb-4 text-transparent  bg-clip-text font-bold bg-gradient-to-r from-[#CC67FC] to-[#F6D10B] text-3xl md:text-4xl lg:text-5xl 2xl:text-[56px] "
          >
            All in one
          </motion.h1>
          <motion.h1
            initial={{ y: 20, x: -20, scale: 0 }}
            animate={{ y: 0, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="mb-4 text-transparent  bg-clip-text font-bold bg-gradient-to-r from-[#CC67FC] to-[#F6D10B] text-3xl md:text-4xl lg:text-5xl 2xl:text-[56px] "
          >
            NFT Paradise
          </motion.h1>
          <motion.p
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="mt-5 tracking-tight letter-spacing:-0.05em font-regular text-[#E6E0FA] text-[14px] lg:text-[24px]"
          >
            Discover , Create, Buy and Sell.
          </motion.p>
          <div className="flex justify-center mt-5">
            <motion.button
              initial={{ x: -20, y: 200 }}
              animate={{
                x: 0,
                y: 0,
                rotate: [90, 0],
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="px-6 py-1 text-black bg-gradient-to-t from-[#F6D10B] to-[#FFEB84]  rounded-xl "
            >
              Create
            </motion.button>
            <motion.button
              initial={{ x: -20, y: 200 }}
              animate={{
                x: 0,
                y: 0,
                rotate: [90, 0],
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="px-6 py-1  ml-4 text-lg text-[#E6E0FA] border-2 border-[#F6D10B]  rounded-xl bg-transparent"
            >
              Explore
            </motion.button>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-1 text-[#E6E0FA]">Featured</p>
          <Feature data={sampleData} />
        </div>
      </div>
    </section>
  );
}
