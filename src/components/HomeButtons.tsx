import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import { FaBitcoin } from "react-icons/fa";
export function HomeButtons() {
  return (
    <>
      <div className="mb-24">
        <motion.div className="flex flex-wrap justify-between w-9/12 m-auto lg:w-6/12 z-20">
          <motion.a
            href="/connect"
            initial={{ x: -20, y: 60 }}
            whileInView={{
              y: 0,
              x: 0,
              scale: 1,
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85,
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            type="button"
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3 mr-2 mb-2 lg:text-sm  font-medium border-[1px] dark:border-none bg-[#d5eef1ad] z-20 focus:outline-none dark:bg-[#2A243D] text-[#2A243D] dark:text-[#E6E0FA] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <FaBitcoin
              size={20}
              className="bg-yellow-400 mr-2 p-1 rounded-full"
            />{" "}
            Bitcoin Ordinals
          </motion.a>

          <motion.a
            href="/connect"
            initial={{ x: -20, y: -60, opacity: 0 }}
            whileInView={{
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85,
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            type="button"
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3  mr-2 mb-2 lg:text-sm  font-medium border-[1px] dark:border-none bg-[#d5eef1ad] z-20 focus:outline-none dark:bg-[#2A243D]  text-[#2A243D] dark:text-[#E6E0FA] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <img
              src={
                "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=002"
              }
              className="flex items-center  w-[20px] h-[20px] mr-2  rounded-full"
              alt=""
            />
            Binance
          </motion.a>
          <motion.a
            href="/connect"
            initial={{ x: -20, y: 60 }}
            whileInView={{
              y: 0,
              x: 0,
              scale: 1,
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85,
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            type="button"
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3 mr-2 mb-2 lg:text-sm   font-medium border-[1px] dark:border-none bg-[#d5eef1ad] z-20 focus:outline-none dark:bg-[#2A243D] text-[#2A243D] dark:text-[#E6E0FA] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <img
              src={"https://cryptologos.cc/logos/cardano-ada-logo.svg?v=024"}
              className=" w-[20px] h-[20px] mr-2 rounded-full"
              alt=""
            />
            Cardano
          </motion.a>
          <motion.a
            href="/connect"
            initial={{ x: -20, y: -60 }}
            whileInView={{
              y: 0,
              x: 0,
              scale: 1,
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85,
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            type="button"
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3 mr-2 mb-2 lg:text-sm   font-medium border-[1px] dark:border-none bg-[#d5eef1ad] z-20 focus:outline-none dark:bg-[#2A243D] text-[#2A243D] dark:text-[#E6E0FA] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <img
              src={"https://cryptologos.cc/logos/flow-flow-logo.svg?v=024"}
              className=" w-[20px] h-[20px] mr-2 rounded-full"
              alt=""
            />
            Flow
          </motion.a>
          <motion.a
            href="/connect"
            initial={{ x: -20, y: 60 }}
            whileInView={{
              y: 0,
              x: 0,
              scale: 1,
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85,
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            type="button"
            className="lg:py-2.5 lg:px-2.5 py-1 px-3 mr-2 mb-2 lg:text-sm   font-medium border-[1px] dark:border-none bg-[#d5eef1ad] z-20 focus:outline-none dark:bg-[#1B1324] rounded-lg    hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <BiChevronDown size={20} className="dark:text-[#F6D10B] " />
          </motion.a>
        </motion.div>
        <div></div>
      </div>
    </>
  );
}
