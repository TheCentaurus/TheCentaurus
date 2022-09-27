import { FaEthereum } from "react-icons/fa";
import solana from "../assets/solana.svg";
import polygon from "../assets/polygon-w.svg";
import tezos from "../assets/tezos.svg";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";
export function HomeButtons() {
  return (
    <>
      <div className="mb-24">
        <motion.div className="flex flex-wrap justify-between w-9/12 m-auto lg:w-5/12 z-20">
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
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3 mr-2 mb-2 lg:text-sm  font-medium text-[#E6E0FA] z-20 focus:outline-none bg-[#2A243D] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <FaEthereum
              size={20}
              className="bg-[#302A43] mr-2 p-1 rounded-full"
            />{" "}
            Ethereum
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
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3  mr-2 mb-2 lg:text-sm  font-medium text-[#E6E0FA] z-20 focus:outline-none bg-[#2A243D] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <img
              src={solana.src}
              className="flex items-center bg-[#302A43] w-[20px] h-[20px] mr-2 p-1 rounded-full"
              alt=""
            />
            Solana
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
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3 mr-2 mb-2 lg:text-sm   font-medium text-[#E6E0FA] z-20 focus:outline-none bg-[#2A243D] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <img
              src={polygon.src}
              className="bg-[#302A43] w-[20px] h-[20px] mr-2 p-1 rounded-full"
              alt=""
            />
            Polygon
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
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3 mr-2 mb-2 lg:text-sm   font-medium text-[#E6E0FA] z-20 focus:outline-none bg-[#2A243D] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <img
              src={tezos.src}
              className="bg-[#302A43] w-[20px] h-[20px] mr-2 p-1 rounded-full"
              alt=""
            />
            Tezos
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
            className="lg:py-2.5 lg:px-2.5 py-1 px-3 mr-2 mb-2 lg:text-sm   font-medium text-[#E6E0FA] z-20 focus:outline-none bg-[#1B1324] rounded-lg    hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <BiChevronDown size={20} color="#F6D10B" />
          </motion.a>
        </motion.div>
        <div></div>
      </div>
    </>
  );
}
