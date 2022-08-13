import { FaEthereum } from "react-icons/fa";
import solana from "../assets/solana.svg";
import polygon from "../assets/polygon-w.svg";
import tezos from "../assets/tezos.svg";
import { BiChevronDown } from "react-icons/bi";
export function HomeButtons() {
  return (
    <>
      <div className="mb-24">
        <div className="flex justify-between w-9/12  m-auto lg:w-6/12 flex-wrap">
          <button
            type="button"
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3 mr-2 mb-2 lg:text-sm  font-medium text-[#E6E0FA] focus:outline-none bg-[#2A243D] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <FaEthereum
              size={20}
              className="bg-[#302A43] mr-2 p-1 rounded-full"
            />{" "}
            Ethereum
          </button>
          <button
            type="button"
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3  mr-2 mb-2 lg:text-sm  font-medium text-[#E6E0FA] focus:outline-none bg-[#2A243D] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <img
              src={solana.src}
              className="flex items-center bg-[#302A43] w-[20px] h-[20px] mr-2 p-1 rounded-full"
              alt=""
            />
            Solana
          </button>
          <button
            type="button"
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3 mr-2 mb-2 lg:text-sm   font-medium text-[#E6E0FA] focus:outline-none bg-[#2A243D] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <img
              src={polygon.src}
              className="bg-[#302A43] w-[20px] h-[20px] mr-2 p-1 rounded-full"
              alt=""
            />
            Polygon
          </button>
          <button
            type="button"
            className="flex items-center lg:py-2.5 lg:px-5 py-1 px-3 mr-2 mb-2 lg:text-sm   font-medium text-[#E6E0FA] focus:outline-none bg-[#2A243D] rounded-full    -gray-200  hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <img
              src={tezos.src}
              className="bg-[#302A43] w-[20px] h-[20px] mr-2 p-1 rounded-full"
              alt=""
            />
            Tezos
          </button>
          <button
            type="button"
            className="lg:py-2.5 lg:px-2.5 py-1 px-3 mr-2 mb-2 lg:text-sm   font-medium text-[#E6E0FA] focus:outline-none bg-[#1B1324] rounded-lg    hover:bg-[#2e293d] hover:text-gray-200 focus:z-10 focus:ring-1 focus:ring-gray-200 "
          >
            <BiChevronDown size={20} color="#F6D10B" />
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
}
