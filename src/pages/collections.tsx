import "swiper/css";

import {
  FaFacebookF,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
// Import Swiper React components
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { BigNumber } from "ethers";
import { BsTagsFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Layout } from "../components/Layout";
// Import Swiper styles
import { products } from "@/utils/data";
import { useContract } from "@thirdweb-dev/react";
import { useRouter } from "next/router";

function Collections(props: any) {
  const router = useRouter();
  const query: any = router.query;
  console.log({ query }, "ttt");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenBuy,
    onOpen: onOpenBuy,
    onClose: onCloseBuy,
  } = useDisclosure();
  const { contract } = useContract(
    "0x5eD63e53c857fCd5D41c1D49382428e012a6975A",
    "marketplace"
  );
  const buyoutListing = async () => {
    try {
      await contract?.buyoutListing(BigNumber.from(query?.id), 1);
    } catch (e) {
      alert(e);
    }
  };

  console.log(props);

  return (
    <div>
      <Layout>
        <div className="z-20 grid grid-cols-1 gap-4 px-8 pt-16 lg:grid-cols-2 lg:pt-32 md:px-15 lg:px-20 2xl:px-32">
          <div className="z-20 bg-[#d5eef1ad] dark:bg-[#2A243D] h-fit w-fit rounded-xl p-2">
            <img
              //   @ts-ignore
              // src={query?.image}
              src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7f7f16ca8b2f49fbe96744df939d5c2"
              alt=""
              className="z-20 object-contain rounded h-96"
            />
          </div>
          <div className="z-20 bg-white dark:bg-transparent p-5 rounded-xl dark:text-[#fff] text-[#413A5A]">
            <p className="z-20 text-3xl dark:text-[#fff] text-[#413A5A]">
              {query?.name}
            </p>
            <div className="z-20 flex flex-col justify-between lg:flex-row">
              <div className="z-20 flex items-center p-2 mt-5 mb-5 bg-yellow-300 rounded-full lg:mb-0">
                <BsTagsFill color="#fff" className="z-20 mr-2" />
                <p className="z-20 text-xs dark:text-[#fff] text-[#413A5A]">
                  5 % of sales will go to creator
                </p>
              </div>
              <div className="z-20 flex items-center justify-between">
                <p className="z-20 mr-2">Share Via</p>
                <a href="#" className="z-20 p-2 mr-2 border rounded-lg">
                  {" "}
                  <FaFacebookF />
                </a>
                <a href="#" className="z-20 p-2 mr-2 border rounded-lg">
                  {" "}
                  <FaTwitter />
                </a>
                <a href="#" className="z-20 p-2 mr-2 border rounded-lg">
                  {" "}
                  <FaTelegramPlane />
                </a>
                <a href="#" className="z-20 p-2 border rounded-lg">
                  {" "}
                  <FiMail />
                </a>
                <a href="#" className="z-20 p-2 border rounded-lg">
                  {" "}
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="z-20 my-5">
              <p>
                {query?.buyoutCurrencyValuePerToken?.displayValue} WBNB{" "}
                <span className="z-20 text-gray-500">($ 1328.35)</span>
              </p>
              <p className="z-20 mt-3 font-normal">{query?.description}</p>
            </div>
            <div className="z-20 grid grid-cols-1 gap-4 mb-5 text-sm md:grid-cols-2 md:text-md">
              <div>
                <p className="z-20 text-sm font-normal">Creator</p>
                <div className="z-20 flex items-center">
                  <img
                    //   @ts-ignore
                    // src={query?.image}
                    src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7f7f16ca8b2f49fbe96744df939d5c2"
                    className="z-20 object-cover w-12 h-12 mr-2 rounded-lg"
                    alt=""
                  />
                  <p className="z-20 font-normal cursor-pointer">@Creator</p>
                </div>
              </div>
              <div>
                <p className="z-20 text-sm font-normal">Collection</p>
                <div className="z-20 flex items-center">
                  <img
                    //   @ts-ignore
                    // src={query?.image}
                    src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7f7f16ca8b2f49fbe96744df939d5c2"
                    className="z-20 object-cover w-12 h-12 mr-2 rounded-lg"
                    alt=""
                  />
                  <div>
                    <p className="z-20 font-normal cursor-pointer">
                      Collection (NFT1155)
                    </p>
                    <p className="z-20 font-bold text-gray-500">
                      {query?.collectionId}
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
                    <div className="z-20 flex">
                      <div className="mr-2">
                        <img
                          //   @ts-ignore
                          // src={query?.image}
                          src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7f7f16ca8b2f49fbe96744df939d5c2"
                          className="z-20 object-cover w-12 h-12 mr-2 rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="z-20 font-normal">
                          Price updated at 25 days ago to 5.0
                        </p>
                        <p className="z-20 font-normal">by @{query?.name}</p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>bids</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Owner</p>
                    <div className="z-20 flex items-center">
                      <div>
                        <img
                          //   @ts-ignore
                          src={query?.image}
                          className="z-20 object-cover w-12 h-12 mr-2 rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="z-20 font-normal"> @{query?.name}</p>
                      </div>
                    </div>
                    <div className="z-20 my-3">
                      <p>Year Created</p>
                      <p className="z-20 font-normal">2022</p>
                    </div>
                    <div className="z-20 my-3">
                      <p>Properties</p>
                      <p className="z-20 font-normal">1080 x 720</p>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <div className="z-20 flex mb-5 space-x-4 ">
                <button
                  onClick={onOpenBuy}
                  className="z-20 rounded-lg border-yellow-300 text-yellow-300 border-[1px] p-2"
                >
                  Buy now
                </button>
                <button
                  onClick={onOpen}
                  className="z-20 rounded-lg border-yellow-300 text-yellow-300 border-[1px] p-2"
                >
                  Place a bid
                </button>

                {/* LIsting */}
                <button
                  onClick={() => router.push("/create-listing")}
                  className="z-20 rounded-lg border-yellow-300 text-yellow-300 border-[1px] p-2"
                >
                  Create Listing
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="z-20 mx-10 mt-5 md:mx-15 lg:mx-20" />
        <div className="z-20 px-10 md:px-15 lg:px-20 2xl:px-32">
          <h1 className="z-20 text-xl lg:text-3xl dark:text-[#fff] text-[#413A5A] my-5">
            Other Author Assets
          </h1>
          <Swiper
            spaceBetween={50}
            // make responsive

            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div
                  key={product.id}
                  className="z-20 bg-white dark:bg-[#2A243D] rounded-xl cursor-pointer"
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
                  <div className="relative z-20">
                    <div className="relative w-full overflow-hidden rounded-xl aspect-square">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="z-20 object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative z-20 mx-4 mt-4">
                      <h3 className="z-20 text-sm font-semibold dark:text-[#E6E0FA] text-[#413A5A]">
                        {product.name}
                      </h3>
                      <div className="z-20 flex items-center my-4 align-center">
                        <div>
                          <img
                            src={product.imageSrc}
                            alt={product.name}
                            className="z-20 object-cover object-center w-6 h-6 bg-white rounded-full aspect-square"
                          />
                        </div>
                        <p className="z-20 mt-1 ml-2 text-[10px] font-light tracking-widest dark:text-white text-[#413A5A] uppercase">
                          @{product.url}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 top-0 z-20 flex items-end justify-end p-2 overflow-hidden rounded-xl aspect-square">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 z-20 opacity-50 h-36 bg-gradient-to-t from-black "
                      />
                      <span className="z-20 flex items-center align-center bg-[#2A243D] p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#ffffff"
                          className="z-20 w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <p className="z-20 relative text-sm font-semibold dark:text-[#E6E0FA] text-[#413A5A] ml-2">
                          2
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="z-20 pb-5 mx-4 my-6">
                    <h1 className="z-20 text-sm dark:text-[#E6E0FA] text-[#413A5A]">
                      Reserve Price
                    </h1>
                    <p className="z-20 text-xs dark:text-[#fff] text-[#413A5A]">
                      {product.price} WBNB
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="bg-white dark:bg-[#2A243D]">
            <ModalHeader className="dark:text-[#fff] text-[#413A5A]">
              Make an offer
            </ModalHeader>
            <ModalCloseButton className="dark:text-[#fff] text-[#413A5A]" />
            <ModalBody>
              <div className="flex">
                <img
                  //   @ts-ignore
                  src={query?.image}
                  className="z-20 object-cover w-12 h-12 mr-2 rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="z-20 text-sm font-medium dark:text-[#E6E0FA] text-[#413A5A]">
                    {query?.name}
                  </h3>
                  <p className="z-20 text-xs font-light dark:text-[#fff] text-[#413A5A]">
                    {query?.url}
                  </p>

                  <div className="flex items-center mt-2">
                    <p className="z-20 text-xs font-light dark:text-[#fff] text-[#413A5A]">
                      Reserve Price
                    </p>
                    <p className="z-20 text-xs font-light dark:text-[#fff] text-[#413A5A] ml-2">
                      {query?.price} WBNB
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 dark:text-[#fff] text-[#413A5A]">
                <div className="p-5 border rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p>Floor price</p>
                    </div>
                    <div>
                      <p>0.00 WBNB</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p> Best offer</p>
                    </div>
                    <div>
                      <p>0.00 WBNB</p>
                    </div>
                  </div>
                </div>
                <p className="z-20 mt-5 text-sm font-light dark:text-[#fff] text-[#413A5A]">
                  Enter your offer
                </p>
                <div className="flex items-center mt-2">
                  <input
                    className="z-20 w-full rounded-lg border-[1px] border-[#413A5A] dark:border-[#f1f1f187] dark:bg-[#2A243D] dark:text-[#fff] text-[#413A5A] p-2"
                    type="text"
                    placeholder="0.00"
                  />
                  <button className="z-20 -ml-3  rounded-r-lg dark:bg-[#413A5A] border-[#413A5A] bg-[#f1f1f1] py-[10px]  dark:text-[#fff] text-[#413A5A] p-2">
                    WBNB
                  </button>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <button className="z-20 mr-5 rounded-lg border-yellow-300 text-yellow-300 border-[1px] px-8 p-2">
                Make Offer
              </button>
              <button
                className="z-20 rounded-lg border-yellow-300 text-yellow-300 border-[1px] p-2"
                onClick={onClose}
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={isOpenBuy} onClose={onCloseBuy}>
          <ModalOverlay />
          <ModalContent className="bg-white dark:bg-[#2A243D]">
            <ModalHeader className="dark:text-[#fff] text-[#413A5A]">
              Buy
            </ModalHeader>
            <ModalCloseButton className="dark:text-[#fff] text-[#413A5A]" />
            <ModalBody>
              <div className="flex">
                <img
                  //   @ts-ignore
                  src={query?.image}
                  className="z-20 object-cover w-12 h-12 mr-2 rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="z-20 text-sm font-medium dark:text-[#E6E0FA] text-[#413A5A]">
                    {query?.name}
                  </h3>
                  <p className="z-20 text-xs font-light dark:text-[#fff] text-[#413A5A]">
                    {query?.url}
                  </p>

                  <div className="flex items-center mt-2">
                    <p className="z-20 text-xs font-light dark:text-[#fff] text-[#413A5A]">
                      Reserve Price
                    </p>
                    <p className="z-20 text-xs font-light dark:text-[#fff] text-[#413A5A] ml-2">
                      {query?.price} WBNB
                    </p>
                  </div>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <button
                onClick={buyoutListing}
                className="z-20 mr-5 rounded-lg border-yellow-300 text-yellow-300 border-[1px] px-8 p-2"
              >
                Buy
              </button>
              <button
                className="z-20 rounded-lg border-yellow-300 text-yellow-300 border-[1px] px-8 p-2"
                onClick={onCloseBuy}
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Layout>
    </div>
  );
}

export default Collections;
