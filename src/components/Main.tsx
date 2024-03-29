import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useAddress } from "@thirdweb-dev/react";
import elipsePic from "../assets/EllipseCardPic.png";
import cardpic from "../assets/cardpic.png";
import prmElipsePic from "../assets/plm-eclipse.png";
import prmCardPic from "../assets/plm-rect.png";
import shakerElipsePic from "../assets/shaker-elipse.png";
import shakerCardPic from "../assets/shaker-rect.png";
import shiny from "../assets/shiny.png";
import { Feature } from "./Feature";
export function Main() {
  const sampleData = {
    data: [
      {
        title: "Yellow Bang",
        description:
          "Yellow Bang is a platform for the people to connect and share their ideas and experiences with the world.",
        pic: {
          src: cardpic,
        },
        elipsePic: {
          src: elipsePic,
        },
        id: 1,
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
        id: 2,
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
        id: 3,
      },
    ],
  };
  const address = useAddress();
  const router = useRouter();
  return (
    <section className="py-10 text-gray-600 sm:pt-64 sm:pb-24 body-font md:px-20 xl:px-40 2xl:px-80 ">
      <div className="container flex flex-col items-center mx-auto 2xl:px-12 md:flex-row ">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow w-[80%] md:w-1/2 md:items-start md:text-left md:mb-0">
          <div className="z-20 w-full">
            {" "}
            <motion.h1
              initial={{ y: -20, x: 50, scale: 0.5 }}
              animate={{ y: 0, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="mb-4 dark:text-transparent  bg-clip-text font-bold  text-3xl text-[#413A5A] md:text-4xl bg-gradient-to-r to-[#e7bc50] via[#06283D] from-[#2a243d] dark:from-[#CC67FC] dark:via-[#c24cfc7a] dark:to-[#F6D10B] lg:text-6xl 2xl:text-[45px] text-left z-20 w-fit"
            >
              All in ONE
            </motion.h1>
          </div>
          <div className="z-20 w-full">
            <motion.h1
              initial={{ y: 20, x: -20, scale: 0 }}
              animate={{ y: 0, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="mb-4 dark:text-transparent text-left bg-clip-text font-bold  text-[#413A5A] bg-gradient-to-r to-[#e75087] via[#06283D] from-[#36beff] dark:from-[#CC67FC] dark:via-[#c24cfc7a] dark:to-[#F6D10B] text-3xl md:text-4xl lg:text-6xl 2xl:text-[45px] z-20 w-fit "
            >
              NFT Paradise
            </motion.h1>
          </div>
          <div className="w-full">
            <motion.p
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="mt-5 tracking-tight letter-spacing:-0.05em font-regular text-[#413A5A] dark:text-[#E6E0FA] text-[14px] lg:text-[24px] text-left z-20"
            >
              Discover , Create, Buy and Sell.
            </motion.p>
            <div className="z-20 flex justify-start mt-5">
              {address?.length ?  <motion.p
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
                className="px-6 bg-[#F6D10B] flex relative items-center text-[#413A5A] cursor-pointer rounded-xl z-20"
                onClick={() => router.push("/create")}
              >
                <img
                  src={shiny.src}
                  alt=""
                  className="absolute top-[2px] w-[94%] h-[18px] right-[2px] z-[-1]"
                />
                Create
              </motion.p>:
              <p></p>
               }
             

              <motion.p
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
                className="px-6 py-1  ml-8 text-lg border-[#2a243d] dark:text-[#F6D10B] cursor-pointer border-[1px] dark:border-[#F6D10B]  rounded-xl bg-transparent z-20"
                onClick={() => router.push("/explore")}
              >
                Explore
              </motion.p>
            </div>
          </div>
        </div>
        <div className="z-20 m-auto lg:px-10">
          {/* <p className="font-semibold mb-1 text-lg text-[#E6E0FA] text-center lg:text-left">
            Featured Users
          </p> */}
          <Feature data={sampleData} />
        </div>
      </div>
    </section>
  );
}
