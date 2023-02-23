import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch, BsSun } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import MyThemeContext from "../store/themeContext";
import { Sidebar } from "./Sidebar";
import Translate from "./Translate";

import useMarketplace from "@/hooks/useMarketplace";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";

export function Nav() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  const { nfts, isLoading } = useMarketplace();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSidebar, setShowSidebar] = useState(true);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const toggling = () => setIsOpenDropdown(!isOpenDropdown);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpenDropdown(false);
    console.log(selectedOption);
  };

  const Main = styled("div")`
    font-family: sans-serif;
    background: #f0f0f0;
    height: 100vh;
  `;

  const DropDownContainer = styled("div")`
    margin: 0;
  `;

  const DropDownHeader = styled("div")`
    font-weight: 500;
    color: white;
  `;

  const DropDownListContainer = styled("div")`
    width: 10.5em;
    position: absolute;
    z-index: 100;
  `;

  const DropDownList = styled("ul")`
    padding: 3;
    margin: 0;
    width: 10.5em;
    background: #1b1324;

    box-sizing: border-box;
    color: white;

    font-weight: 500;
    &:first-child {
      padding-top: 0.8em;
    }
  `;

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const router = useRouter();
  const address = useAddress();

  // make a funtion to search and filter an object

  const {
    isOpen: isOpenNotifications,
    onOpen: onOpenNotifications,
    onClose: onCloseNotifications,
  } = useDisclosure();

  const {
    isOpen: isOpenSuggestions,
    onOpen: onOpenSuggestions,
    onClose: onCloseSuggestions,
  } = useDisclosure();

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length === 0) {
      setFilteredList([]);
      return;
    }

    const searchList = nfts?.filter((item) => {
      return (
        item?.asset?.description?.toLowerCase().indexOf(query.toLowerCase()) !==
        -1
      );
    });
    console.log(searchList, "llll");
    setFilteredList(searchList);
  };

  return (
    <div
      className={
        navbar
          ? "dark:bg-[#261a2fa8] bg-[#d5eef16a] z-30 flex items-center justify-between w-full fixed top-0 left-0 right-0 backdrop-blur-sm"
          : "dark:bg-[#230c2e02] bg-[#d5eef100] z-30 flex items-center justify-between w-full fixed top-0 left-0 right-0 backdrop-blur-sm"
      }
    >
      <div
        className={
          navbar
            ? ` dark:bg-[#261a2f] bg-[#ffffff] px-2 shadow-lg lg:hidden fixed top-0 left-0 right-0 py-0 z-30 pb-2`
            : " dark:bg-[#230c2e02] bg-[#d5eef100] lg:hidden fixed top-0 left-0 right-0 py-0 z-30 pb-2"
        }
      >
        <div className="items-center py-2 cursor-pointer lg:hidden lg:py-0">
          <img
            onClick={() => router.push("/")}
            src={logo.src}
            alt=""
            className="object-contain h-16 ml-5 lg:w-full"
          />
        </div>

        <div className="flex items-center fixed top-5 z-40 right-5 py-2 lg:hidden w-[80px]">
          <div
            onClick={onOpen}
            className="h-7 w-7 dark:bg-[#1b1324] bg-[#f7ffff] border p-2 rounded-lg mr-5"
          >
            <BsSearch
              size={10}
              className="dark:text-[#E6E0FA] text-[#261a2f]"
            />
          </div>
          <h1 className="text-gray-600">
            <AiOutlineMenu
              size={20}
              onClick={handleShowSidebar}
              className="text-center text-[#261a2f] dark:text-[#E6E0FA]"
            />
          </h1>
        </div>
      </div>

      <Sidebar
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
      />

      <div className="w-full bg-transparent top-0 left-0 right-0 py-6 hidden lg:flex z-20 items-center lg:px-[80px] 2xl:px-[200px] md:px-5 md:justify-between">
        <div className="items-center hidden cursor-pointer md:flex">
          <img
            onClick={() => router.push("/")}
            src={logo.src}
            alt="logo"
            className="w-40"
          />
        </div>

        <div className="flex items-center justify-around w-full lg:w-3/12 2xl:w-4/12 md:justify-between">
          <form className="w-full">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-3 pl-10 w-full text-sm text-gray-50 bg-[#f3f3f3ae] border-[1px] border-[#261a2fb5] dark:border-none dark:bg-[#221C30]  dark:placeholder:text-[#8175A7] rounded-lg focus:outline-none focus:border-0 focus:ring-primary"
                placeholder="Search items,collections and accounts"
                required
                value={searchQuery}
                onChange={handleSearch}
                onClick={onOpenSuggestions}
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              />

            </div>
          </form>
        </div>

        <div className="flex items-center justify-end space-x-3 md:w-1/3 2xl:space-x-5">
          <div className=" dark:text-[#E6E0FA] text-[#261a2f]">
            <IoNotifications
              size={25}
              onClick={onOpenNotifications}
              className="text-center text-gray-600 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-center text-yellow-300 font-bold max-h-[60px] rounded-sm py-[3px] px-[2px] button-custom">
            <ConnectWallet
              className="connect-wallet"
              colorMode="light"
              accentColor="#fff"
            />
          </div>

          <div className="md:hidden lg:block">
            <Menu>
              <MenuButton className="border-[1px] dark:border-yellow-300 border-[#261a2f] cursor-pointer dark:text-[#E6E0FA] text-[#261a2f] font-bold lg:text-sm text-[12px] rounded-xl px-[15px] py-[10px]">
                <FiMoreHorizontal
                  size={20}
                  className="text-center dark:text-yellow-300 text-[#261a2f]"
                />
              </MenuButton>
              <MenuList border={"none"} bg={"#1b1324a1"} color={"#E6E0FA"}>
                <Translate />
                {/* </MenuItem> */}
                {address && (
                  <>
                    <MenuItem
                      _focus={{
                        background: "#1b1324",
                      }}
                      _hover={{
                        background: "#1b1324",
                        color: "teal.500",
                      }}
                      onClick={() => {
                        router.push("/profile");
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      _focus={{
                        background: "#1b1324",
                      }}
                      _hover={{
                        background: "#1b1324",
                        color: "teal.500",
                      }}
                      onClick={() => {
                        router.push("/my-collections");
                      }}
                    >
                      My Collection
                    </MenuItem>
                  </>
                )}
                <MenuItem
                  _focus={{
                    background: "#1b1324",
                  }}
                  _hover={{
                    background: "#1b1324",
                    color: "teal.500",
                  }}
                  onClick={() => {
                    router.push("/profile");
                  }}
                >
                  Activity
                </MenuItem>
                <MenuItem
                  _focus={{
                    background: "#1b1324",
                  }}
                  _hover={{
                    background: "#1b1324",
                    color: "teal.500",
                  }}
                >
                  DEX
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: "#1b1324",
                    color: "teal.500",
                  }}
                >
                  $CENT
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: "#1b1324",
                    color: "teal.500",
                  }}
                >
                  WALLET
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: "#1b1324",
                    color: "teal.500",
                  }}
                >
                  Resources
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: "#1b1324",
                    color: "teal.500",
                  }}
                >
                  Help
                </MenuItem>
              </MenuList>
            </Menu>
          </div>

          {/* blockachain menu */}
          <DropDownContainer className="md:hidden lg:block">
            <DropDownHeader
              onClick={toggling}
              className="w-full border-[1px] bg-transparent border-[#1b1324] dark:border-yellow-300 cursor-pointer text-yellow-300 font-bold lg:text-sm text-[12px] rounded-xl px-[15px] py-[10px]"
            >
              <p className="dark:text-yellow-300 text-[#1b1324]">
                {" "}
                {selectedOption || "Ethereum"}
              </p>
            </DropDownHeader>
            {isOpenDropdown && (
              <DropDownListContainer>
                <DropDownList className="p-2 rounded-lg">
                  <li
                    onClick={onOptionClicked("Ethereum")}
                    className="dark:bg-[#1b1324] flex mb-3 items-center"
                  >
                    <img
                      src="ethereum.svg"
                      className="object-contain mr-2 h-7 "
                      alt=""
                    />
                    Ethereum
                  </li>
                  <li
                    onClick={onOptionClicked("BNB")}
                    className="dark:bg-[#1b1324] flex mb-3 items-center"
                  >
                    <img
                      src="bnb.svg"
                      className="object-contain mr-2 h-7 "
                      alt=""
                    />
                    BNB
                  </li>
                  <li
                    onClick={onOptionClicked("Polygon")}
                    className="bg-[#1b1324] flex mb-3 items-center"
                  >
                    <img
                      src="polygon.svg"
                      className="object-contain mr-2 h-7 "
                      alt=""
                    />
                    Polygon
                  </li>
                  <li
                    onClick={onOptionClicked("Avalanche")}
                    className="dark:bg-[#1b1324] flex mb-3 items-center"
                  >
                    <img
                      src="avalanche.svg"
                      className="object-contain mr-2 h-7 "
                      alt=""
                    />
                    Avalanche
                  </li>
                  <li
                    onClick={onOptionClicked("Moonriver")}
                    className="dark:bg-[#1b1324] flex mb-3 items-center"
                  >
                    <img
                      src="moonriver.png"
                      className="object-contain mr-2 h-7 "
                      alt=""
                    />
                    Moonriver
                  </li>
                  <li
                    onClick={onOptionClicked("Moonbeam")}
                    className="dark:bg-[#1b1324] flex mb-3 items-center"
                  >
                    <img
                      src="moonbeam.jpg"
                      className="object-contain mr-2 h-7 "
                      alt=""
                    />
                    Moonbeam
                  </li>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>

          {/* end blockachain menu */}

          <div>
            <button
              type="button"
              className="px-2 py-3 mr-2 text-white sm:px-5 bg-zinc-800 dark:bg-zinc-200 dark:text-black rounded-xl"
              onClick={toggleThemeHandler}
            >
              <BsSun />
            </button>
          </div>
        </div>
      </div>

      {/* modal for search on mobile */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="dark:bg-[#1b1324] dark:text-[#E6E0FA] text-[#261a2f]">
            Search
          </ModalHeader>
          <ModalCloseButton className="dark:text-[#E6E0FA] text-[#261a2f]" />
          <ModalBody className="dark:bg-[#1b1324] bg-white">
            <form className="w-full">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 pl-10 text-sm dark:bg-[#221C30] bg-[#f1f1f1] rounded-lg text-gray-50 "
                  placeholder="Search items,collections and accounts"
                  required
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter className="dark:bg-[#1b1324]">
            <button
              className="w-full rounded-xl border-[1px] border-yellow-300 px-8 py-2 dark:text-[#E6E0FA] text-[#261a2f]"
              onClick={onClose}
            >
              Search
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* modal for notifications */}
      <Modal
        size={"lg"}
        isOpen={isOpenNotifications}
        onClose={onCloseNotifications}
      >
        <ModalOverlay />
        <ModalContent className="dark:bg-[#1b1324] dark:text-[#E6E0FA] text-[#261a2f]">
          <ModalHeader>Notifications</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="grid grid-cols-6  border-b-[1px] border-t-[1px] p-3">
              <div className="mr-2">
                <img
                  src="art.jpeg"
                  className="object-cover w-10 h-10 mx-auto rounded-full"
                  alt=""
                />
              </div>
              <div className="col-span-5 ">
                <h1 className="font-bold">Notificaiton Title Name</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  magnam error! Molestias repudiandae a voluptatibus placeat.
                  Magni corporis maiores, aperiam voluptatum quia sit neque,
                  architecto incidunt voluptatem a alias laboriosam.
                </p>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <button
              className=" rounded-xl border-[1px] border-yellow-300 px-8 py-2 dark:text-[#E6E0FA] text-[#261a2f]"
              onClick={onCloseNotifications}
            >
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        size={"lg"}
        isOpen={isOpenSuggestions}
        onClose={onCloseSuggestions}
      >
        <ModalOverlay />
        <ModalContent className="dark:bg-[#1b1324] dark:text-[#E6E0FA] text-[#261a2f]">
          {/* <ModalHeader>Search Results</ModalHeader> */}
          {/* <ModalCloseButton /> */}

          <ModalBody>
            <input
              type="search"
              id="default-search"
              className="block p-3 pl-10 w-full text-sm dark:text-gray-50 bg-[#f3f3f3ae] border-[1px] border-[#261a2fb5] dark:border-none dark:bg-[#221C30]  dark:placeholder:text-[#8175A7] rounded-lg focus:outline-none focus:border-0 focus:ring-primary"
              placeholder="Search items,collections and accounts"
              required
              value={searchQuery}
              onChange={handleSearch}

            // value={search}...
            // onChange={(e) => setSearch(e.target.value)}
            />
            {filteredList?.length > 0 ? (
              filteredList?.map((item, index) => {
                return (
                  <div
                    className="card flex items-center border p-2 rounded-2xl hover:bg-[#f1f1f1] hover:cursor-pointer hover:dark:bg-[#221C30] my-2"
                    key={index}
                  >
                    <div>
                      <img
                        src={item?.asset?.image}
                        className="object-cover w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="p-2">
                      <p
                        onClick={
                          () =>
                            router.push({
                              pathname: "/collections",
                              query: item?.asset,
                            })
                          // close the suggestions box
                        }
                        className="dark:text-[#E6E0FA] text-[#261a2f]s"
                      >
                        {item?.asset?.description}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center card">
                <div className="p-2">
                  <p className="dark:text-[#E6E0FA] text-[#261a2f]">
                    No results found
                  </p>
                </div>
              </div>
            )}
          </ModalBody>

          {/* <ModalFooter>
            <button
              className=" rounded-xl border-[1px] border-yellow-300 px-8 py-2 dark:text-[#E6E0FA] text-[#261a2f]"
              onClick={onCloseNotifications}
            >
              Close
            </button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  );
}
