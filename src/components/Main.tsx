import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import cardpic from "../assets/cardpic.png";
import elipsePic from "../assets/EllipseCardPic.png";
import verified from "../assets/verified.png";
export function Main() {
  return (
    <section className="text-gray-600 body-font md:px-20 xl:px-40 ">
      <div className="container flex flex-col items-center  py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-transparent  bg-clip-text font-bold bg-gradient-to-r from-[#CC67FC] to-[#F6D10B] text-3xl md:text-4xl lg:text-5xl 2xl:text-[56px] ">
            All in one
          </h1>
          <h1 className="mb-4 text-transparent  bg-clip-text font-bold bg-gradient-to-r from-[#CC67FC] to-[#F6D10B] text-3xl md:text-4xl lg:text-5xl 2xl:text-[56px] ">
            NFT Paradise
          </h1>
          <p className="mt-5 tracking-tight letter-spacing:-0.05em font-regular text-[#E6E0FA] text-[14px] lg:text-[24px]">
            Discover , Create, Buy and Sell.
          </p>
          <div className="flex justify-center mt-5">
            <button className="px-6 py-1 text-black bg-gradient-to-t from-[#F6D10B] to-[#FFEB84]  rounded-xl ">
              Create
            </button>
            <button className="px-6 py-1  ml-4 text-lg text-[#E6E0FA] border-2 border-[#F6D10B]  rounded-xl bg-transparent">
              Explore
            </button>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2 bg-[#2A243D] rounded-xl p-5">
          <div className="relative">
            <img
              className="object-cover object-center  rounded "
              alt="hero"
              src={cardpic.src}
            />
            <div className="flex justify-between items-center -mt-8  md:-mt-12">
              <div className="bg-[#1B1324] h-7 w-7 md:h-10 md:w-10 justify-center  p-2 flex items-center rounded-lg">
                <AiOutlineLeft color="#F6D10B" />
              </div>
              <img
                src={elipsePic.src}
                className="object-cover object-center rounded w-16 h-16 md:w-auto md:h-auto"
                alt="hero"
              />
              <div className="bg-[#1B1324] h-7 w-7 md:h-10 md:w-10 justify-center  p-2 flex items-center rounded-lg">
                <AiOutlineRight color="#F6D10B" />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-[#E6E0FA] font-bold text-[18px] md:text-[24px] mr-2">
                Indigo Bang
              </h1>
              <img
                src={verified.src}
                alt=""
                className="h-4 md:h-5 object-contain md:mt-2"
              />
            </div>
            <div>
              <button className="px-6 py-1  ml-4 text-lg text-[#E6E0FA] border-2 border-[#F6D10B]  rounded-xl bg-transparent">
                Follow
              </button>
            </div>
          </div>
          <hr className="bg-slate-400 my-5" />
          <div>
            <p className="text-[#E6E0FA]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              sint velit ipsa molestias adipisci ipsam harum nesciunt minus
              commodi accusantium nisi a id quos, consequuntur, dicta, amet
              dolorum dolorem sunt?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
