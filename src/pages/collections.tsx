import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Nav } from "../components";
import { BsTagsFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Collections(props: any) {
  const router = useRouter();
  const query = router.query;

  const products = [
    {
      id: 1,
      name: "The Centaurus Elite",
      url: "The Centaurus ",
      imageSrc: "/images/1.png",
      price: "5.0",
    },
    {
      id: 2,
      name: "Strange Rock (Tokyo)",
      url: "The Centaurus ",
      imageSrc: "/images/rock.png",
      price: "5.0",
    },
    {
      id: 3,
      name: "Buffaosoldier01 / 5 of 5",
      url: "The Centaurus ",
      imageSrc: "/images/buffalosoldier01.jpeg",
      price: "5.0",
    },
    {
      id: 4,
      name: "SCOTIA",
      url: "The Centaurus ",
      imageSrc: "/images/SCOTIA.png",
      price: "5.0",
    },
    {
      id: 5,
      name: "Bonanza-Black",
      url: "The Centaurus ",
      imageSrc: "/images/Bonanza-Black.jpeg",
      price: "5.0",
    },
    {
      id: 6,
      name: "Bitcoin / 1000 of 1000",
      url: "The Centaurus ",
      imageSrc: "/images/bitcoin.gif",
      price: "5.0",
    },
    {
      id: 7,
      name: "Strange Rock (BERLIN)",
      url: "The Centaurus ",
      imageSrc: "/images/rock2.jpeg",
      price: "5.0",
    },
    {
      id: 8,
      name: "Nature Cloud",
      url: "The Centaurus ",
      imageSrc: "/images/cloud.jpeg",
      price: "5.0",
    },
  ];

  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-32 px-10 md:px-15 lg:px-20 2xl:px-32">
        <div className="bg-[#2A243D] h-fit w-fit rounded-xl p-2">
          <img
            //   @ts-ignore
            src={query.imageSrc}
            alt=""
            className="h-60 object-contain"
          />
        </div>
        <div className="text-white">
          <p className="text-3xl text-white">{query.name}</p>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="bg-yellow-300 p-2 rounded-full flex items-center mt-5 mb-5 lg:mb-0">
              <BsTagsFill color="#fff" className="mr-2" />
              <p className="text-xs text-white">
                5 % of sales will go to creator
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="mr-2">Share Via</p>
              <a href="#" className="border p-2 rounded-lg mr-2">
                {" "}
                <FaFacebookF />
              </a>
              <a href="#" className="border p-2 rounded-lg mr-2">
                {" "}
                <FaTwitter />
              </a>
              <a href="#" className="border p-2 rounded-lg mr-2">
                {" "}
                <FaTelegramPlane />
              </a>
              <a href="#" className="border p-2 rounded-lg">
                {" "}
                <FiMail />
              </a>
              <a href="#" className="border p-2 rounded-lg">
                {" "}
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="my-5">
            <p>
              {query.price} WBNB{" "}
              <span className="text-gray-500">($ 1328.35)</span>
            </p>
            <p className="font-normal mt-3">
              The Centaurus is ALL In ONE Decentralized Ecosystem founded in
              NOVEMBER 2021 focus on building interoperability in between
              different EVM compatible Blockchains. This NFT represents the 100
              elite Members, created to raise the capital for further
              development. Flore price is 4 BNB. Each member rewarded 1Million
              CENT tokens with NFT. NFT holder will have elite members perks and
              privileges Which could be transferred on the secondary sales. But
              1Million CENT tokens are Only limited for the first owner.
            </p>
          </div>
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
              <p className="font-normal text-sm">Creator</p>
              <div className="flex items-center">
                <img
                  //   @ts-ignore
                  src={query.imageSrc}
                  className="h-12 w-12 object-cover mr-2"
                  alt=""
                />
                <p className="font-normal cursor-pointer">@{query.url}</p>
              </div>
            </div>
            <div>
              <p className="font-normal text-sm">Collection</p>
              <div className="flex items-center">
                <img
                  //   @ts-ignore
                  src={query.imageSrc}
                  className="h-12 w-12 object-cover mr-2"
                  alt=""
                />
                <div>
                  <p className="font-normal cursor-pointer">
                    Collection (NFT1155)
                  </p>
                  <p className="text-gray-500 font-bold">
                    0x3A822D5B1976...0CAa
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Tabs>
              <TabList>
                <Tab>History</Tab>
                <Tab>Bids</Tab>
                <Tab>Details</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <div className="flex">
                    <div>
                      <img
                        //   @ts-ignore
                        src={query.imageSrc}
                        className="h-12 w-12 object-cover mr-2 rounded-lg"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-normal">
                        Price updated at 25 days ago to 5.0
                      </p>
                      <p className="font-normal">by @{query.name}</p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <p>bids</p>
                </TabPanel>
                <TabPanel>
                  <p>Owner</p>
                  <div className="flex items-center">
                    <div>
                      <img
                        //   @ts-ignore
                        src={query.imageSrc}
                        className="h-12 w-12 object-cover mr-2 rounded-lg"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-normal"> @{query.name}</p>
                    </div>
                  </div>
                  <div className="my-3">
                    <p>Year Created</p>
                    <p className="font-normal">2022</p>
                  </div>
                  <div className="my-3">
                    <p>Properties</p>
                    <p className="font-normal">1080 x 720</p>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <div className="flex justify-between mb-5 lg:w-1/2">
              <button className="rounded-lg border-yellow-300 border-2 p-2">
                Buy now
              </button>
              <button className="rounded-lg border-yellow-300 border-2 p-2">
                Place a bid
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-10 md:mx-15 lg:mx-20" />
      <div className="px-10 md:px-15 lg:px-20 2xl:px-32">
        <h1 className="text-xl lg:text-3xl text-white my-5">
          Other Author Assets
        </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div
                key={product.id}
                className="bg-[#2A243D] rounded-xl cursor-pointer"
                onClick={() =>
                  router.push(
                    {
                      pathname: "/collections",
                      query: product,
                    },
                    "/collections"
                  )
                }
              >
                <div className="relative">
                  <div className="relative w-full overflow-hidden rounded-xl h-72">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="object-contain object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative mx-4 mt-4">
                    <h3 className="text-xl font-semibold text-[#E6E0FA]">
                      {product.name}
                    </h3>
                    <div className="flex items-center my-4 align-center">
                      <div>
                        <img
                          src={product.imageSrc}
                          alt={product.name}
                          className="object-contain object-center w-8 h-8 bg-white rounded-lg"
                        />
                      </div>
                      <p className="mt-1 ml-2 text-xs font-light tracking-widest text-white uppercase">
                        @{product.url}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black "
                    />
                    <span className="flex items-center align-center bg-[#2A243D] p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#ffffff"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>

                      <p className="relative text-sm font-semibold text-[#E6E0FA] ml-2">
                        2
                      </p>
                    </span>
                  </div>
                </div>
                <div className="mx-4 my-6">
                  <h1 className="text-[#E6E0FA]">Reserve Price</h1>
                  <p className="text-white">{product.price} WBNB</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Collections;
