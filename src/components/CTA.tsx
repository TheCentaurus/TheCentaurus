import { AiFillTag, AiOutlineTag } from "react-icons/ai";
import { BiWallet, BiImageAdd } from "react-icons/bi";
import { motion } from "framer-motion";
export function CTA() {
  return (
    <div className="px-5 lg:px-0 lg:pb-10 z-20">
      <h1 className="text-2xl lg:text-4xl font-bold text-center dark:text-[#E6E0FA] text-[#413A5A] my-10 lg:mx-20">
        Effortless place to Discover, Create, Mint, Trade,
        <br /> Swap, Buy and Sell NFTs on Web3
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:mx-40 z-20 ">
        <motion.div
          initial={{ x: -20, y: 5 }}
          whileInView={{
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.85,
            },
          }}
          viewport={{ amount: 0.2 }}
          className="max-w-md p-4 bg-[#ffffffdd] dark:bg-[#1b1324] z-20 rounded-xl shadow-md sm:p-8 m-4 text-left"
        >
          <div className=" p-2 rounded-lg w-fit ">
            <BiWallet className="text-[50px] text-[#413A5A] text-left" />
          </div>
          <h1 className="py-2 font-light dark:text-[#E6E0FA] text-[#1B1324]">
            Setup your wallet
          </h1>
          <p className="text-sm font-light text-[#8175A7]">
            Once you have setup your wallet of your choice, connect it to
            Centuarus NFT marketplace by clicking this link.
          </p>

          <a href="/connect" className="text-[#F6D10B] underline font-light">
            Connect My Wallet
          </a>
        </motion.div>

        <motion.div
          initial={{ x: -20, y: -30, opacity: 0 }}
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
          viewport={{ amount: 0.2 }}
          className="max-w-md p-4 bg-[#ffffffdd] dark:bg-[#1b1324] z-20 rounded-xl shadow-md sm:p-8 m-4 "
        >
          <div className=" p-2 rounded-lg w-fit ">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.3344 0.532593H31.6328C28.54 0.532593 26.0328 3.0398 26.0328 6.13259V15.8342C26.0328 18.927 28.54 21.4342 31.6328 21.4342H41.3344C44.4272 21.4342 46.9344 18.927 46.9344 15.8342V6.13259C46.9344 3.0398 44.4272 0.532593 41.3344 0.532593ZM29.6328 6.13259C29.6328 5.02802 30.5282 4.13259 31.6328 4.13259H41.3344C42.439 4.13259 43.3344 5.02802 43.3344 6.13259V15.8342C43.3344 16.9388 42.439 17.8342 41.3344 17.8342H31.6328C30.5282 17.8342 29.6328 16.9388 29.6328 15.8342V6.13259ZM5.6 0.532615H15.3016C18.3944 0.532615 20.9016 3.03982 20.9016 6.13261V15.8342C20.9016 18.927 18.3944 21.4342 15.3016 21.4342H5.6C2.5072 21.4342 0 18.927 0 15.8342V6.13261C0 3.03982 2.50721 0.532615 5.6 0.532615ZM5.6 4.13261C4.49543 4.13261 3.6 5.02804 3.6 6.13261V15.8342C3.6 16.9388 4.49543 17.8342 5.6 17.8342H15.3016C16.4062 17.8342 17.3016 16.9388 17.3016 15.8342V6.13261C17.3016 5.02805 16.4062 4.13261 15.3016 4.13261H5.6ZM5.6 26.5656H15.3016C18.3944 26.5656 20.9016 29.0728 20.9016 32.1656V41.8672C20.9016 44.96 18.3944 47.4672 15.3016 47.4672H5.6C2.5072 47.4672 0 44.96 0 41.8672V32.1656C0 29.0728 2.50721 26.5656 5.6 26.5656ZM5.6 30.1656C4.49543 30.1656 3.6 31.061 3.6 32.1656V41.8672C3.6 42.9717 4.49543 43.8672 5.6 43.8672H15.3016C16.4062 43.8672 17.3016 42.9717 17.3016 41.8672V32.1656C17.3016 31.061 16.4062 30.1656 15.3016 30.1656H5.6ZM34.0862 29.4253C34.0862 28.3207 34.9817 27.4253 36.0862 27.4253H36.8818C37.9864 27.4253 38.8818 28.3207 38.8818 29.4253V34.6187H44.0751C45.1797 34.6187 46.0751 35.5141 46.0751 36.6187V37.4143C46.0751 38.5188 45.1797 39.4143 44.0751 39.4143H38.8818V44.3075C38.8818 45.7121 37.9864 46.3075 36.8818 46.3075H36.0862C34.9817 46.3075 34.0862 45.7121 34.0862 44.3075V39.4143H28.8929C27.7883 39.4143 26.8929 38.5188 26.8929 37.4143V36.6187C26.8929 35.5141 27.7883 34.6187 28.8929 34.6187H34.0862V29.4253Z"
                fill="#413a5a"
              />
            </svg>
          </div>
          <h1 className="py-2 font-light dark:text-[#E6E0FA] text-[#1B1324]">
            List them for sale
          </h1>
          <p className="text-sm font-light text-[#8175A7]">
            Choose between auctions, fixed-price listings, and declining-price
            listings. You choose how you want to sell your NFTs, and we help you
            sell them!
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -20, y: 5 }}
          whileInView={{
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.85,
            },
          }}
          viewport={{ amount: 0.2 }}
          className="max-w-md p-4 bg-[#ffffffdd] dark:bg-[#1b1324] z-20 rounded-xl shadow-md sm:p-8 m-4 "
        >
          <div className=" rounded-lg w-fit ">
            <BiImageAdd className="text-[53px] text-[#413A5A] text-left" />
          </div>
          <h1 className="py-2 font-light dark:text-[#E6E0FA] text-[#1B1324]">
            Add your NFT
          </h1>
          <p className="text-sm font-light text-[#8175A7]">
            Upload your work, add a title and description, and customize your
            NFTs with properties, stats, and unlockable content.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -20, y: -30 }}
          whileInView={{
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.85,
            },
          }}
          viewport={{ amount: 0.2 }}
          className="max-w-md p-4 bg-[#ffffffdd] border dark:border-none dark:bg-[#ffffffdd] dark:bg-[#1b1324] z-20 rounded-xl shadow-md sm:p-8 m-4"
        >
          <div className=" p-2 rounded-lg w-fit">
            <AiOutlineTag className="text-[50px] text-[#413A5A] text-left" />
          </div>
          <h1 className="py-2 font-light dark:text-[#E6E0FA] text-[#1B1324]">
            List them for sale
          </h1>
          <p className="text-sm font-light text-[#8175A7]">
            Choose between auctions, fixed-price listings, and declining-price
            listings. You choose how you want to sell your NFTs, and we help you
            sell them!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
