import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import { BsSearch } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Sidebar } from "./Sidebar";
import { FiMoreHorizontal } from "react-icons/fi";
import { useAccount } from "wagmi";
import CustomSelect from "./Select";

import styled from "styled-components";

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
  Select,
  useDisclosure,
} from "@chakra-ui/react";

export function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSidebar, setShowSidebar] = useState(true);
   const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpenDropdown(!isOpenDropdown);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpenDropdown(false);
    console.log(selectedOption);
  };
  
  const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;`;

const DropDownContainer = styled("div")`

  margin: 0 auto;`;

  const DropDownHeader = styled("div")`

  font-weight: 500;
  color: white;`;

  const DropDownListContainer = styled("div")`
 width: 10.5em;
  position: absolute;
  z-index: 100;`;

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
  }`;




  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  const { address, isConnected } = useAccount();

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
  

  return (
    <div
      className={
        navbar
          ? "bg-[#261a2fa8] z-10 flex items-center justify-between w-full fixed top-0 left-0 right-0"
          : "bg-[#230c2e02] z-10 flex items-center justify-between w-full fixed top-0 left-0 right-0"
      }
    >
      <div
        className={
          navbar
            ? ` bg-[#261a2f] px-2 sshadow-lg md:hidden fixed top-0 left-0 right-0 py-0 z-30 pb-2`
            : " bg-[#230c2e02] md:hidden fixed top-0 left-0 right-0 py-0 z-30 pb-2"
        }
      >
        <div className="items-center cursor-pointer md:hidden">
          <img
            src={logo.src}
            alt=""
            className="object-contain h-16 ml-5 md:w-full"
          />
        </div>

        <div className="flex items-center fixed top-5 z-20 right-5 py-2 sm:hidden w-[80px]">
          <div
            onClick={onOpen}
            className="h-7 w-7 bg-[#1b1324] border p-2 rounded-lg mr-5"
          >
            <BsSearch size={10} className="text-[#E6E0FA]" />
          </div>
          <h1 className="text-gray-600">
            <AiOutlineMenu
              size={20}
              onClick={handleShowSidebar}
              className="text-center"
              color="#fff"
            />
          </h1>
        </div>
      </div>
      <Sidebar
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
      />
      <div className=" w-full  bg-transparent top-0 left-0 right-0 py-6 hidden md:flex z-20 items-center lg:px-[80px] 2xl:px-[200px] md:px-5  md:justify-between">
        <div className="items-center hidden cursor-pointer md:flex">
          <img src={logo.src} alt="" className="w-40" />
        </div>
        <div className="flex items-center justify-around w-full md:w-5/12 lg:w-5/12 md:justify-between">
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
                className="block p-3 pl-10 w-full text-sm text-gray-50  bg-[#221C30] placeholder:text-[#8175A7] rounded-lg border  border-[#8175A7] "
                placeholder="Search by collection, NFT or User"
                required
              />
            </div>
          </form>
        </div>

        <div className="flex items-center justify-between md:w-4/12 lg:w-4/12">
          <div className=" text-[#E6E0FA]">
            <IoNotifications size={25} className="text-center text-gray-600 mr-2" />
          </div>

          <div className="max-w-[200px] flex items-center justify-center text-[#E6E0FA] font-bold max-h-[60px] rounded-sm py-[3px] px-[2px] button-custom">
            <a
              href="/connect"
              className="w-full h-full relative border-2 border-yellow-300 cursor-pointer text-[#E6E0FA] font-bold lg:text-sm text-[12px] rounded-xl px-[15px] py-[10px] "
            >
              {isConnected ? (
                address !== undefined ? (
                  <span className="inline-block ml-2 ">
                    {address.substring(0, 8)} ...
                    {address.substring(address.length - 4, address.length)}
                  </span>
                ) : null
              ) : (
                "Connect Wallet"
              )}
            </a>
          </div>
          <div className="ml-5">
            {/* menu item */}
            <Menu>
              <MenuButton className="border-2 border-yellow-300 cursor-pointer text-[#E6E0FA] font-bold lg:text-sm text-[12px] rounded-xl px-[15px] py-[10px]">
                {" "}
                <FiMoreHorizontal
                  size={20}
                  className="text-center text-[#E6E0FA]"
                />
              </MenuButton>
              <MenuList border={"none"} bg={"#1b1324a1"} color={"#E6E0FA"}>
                <MenuItem
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
            {/* end menu item */}
          </div>
          {/* blockachain menu */}
           <DropDownContainer>
        <DropDownHeader onClick={toggling} className="w-full border-2 bg-transparent border-yellow-300 cursor-pointer text-[#E6E0FA] font-bold lg:text-sm text-[12px] rounded-xl px-[15px] py-[10px]">
          {selectedOption || "Ethereum"}
        </DropDownHeader>
        {isOpenDropdown && (
              <DropDownListContainer>
            <DropDownList className="rounded-lg p-2">
             
                <li onClick={onOptionClicked("Ethereum")} className="bg-[#1b1324] flex mb-3 items-center">
                    <img src="ethereum.svg" className="h-7 object-contain mr-2 " alt="" />
                    Ethereum
                  </li>
                   <li onClick={onOptionClicked("BNB")} className="bg-[#1b1324] flex mb-3 items-center">
                    <img src="bnb.svg" className="h-7 object-contain mr-2 " alt="" />
                    BNB
                  </li>
                   <li onClick={onOptionClicked("Polygon")} className="bg-[#1b1324] flex mb-3 items-center">
                    <img src="polygon.svg" className="h-7 object-contain mr-2 " alt="" />
                    Polygon
                  </li>
                   <li onClick={onOptionClicked("Avalanche")} className="bg-[#1b1324] flex mb-3 items-center">
                    <img src="avalanche.svg"className="h-7 object-contain mr-2 " alt="" />
                    Avalanche
                </li>
                 <li onClick={onOptionClicked("Moonriver")} className="bg-[#1b1324] flex mb-3 items-center">
                    <img src="moonriver.png" className="h-7 object-contain mr-2 " alt="" />
                    Moonriver
                  </li>
                   <li onClick={onOptionClicked("Moonbeam")} className="bg-[#1b1324] flex mb-3 items-center">
                    <img src="moonbeam.jpg" className="h-7 object-contain mr-2 " alt="" />
                    Moonbeam
                </li>
               
            
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
          
          {/* end blockachain menu */}
        </div>
      </div>

      {/* modal for search on mobile */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="bg-[#1b1324] text-[#E6E0FA]">
            Search
          </ModalHeader>
          <ModalCloseButton className="text-[#E6E0FA]" />
          <ModalBody className="bg-[#1b1324]">
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
                  className="block w-full p-3 pl-10 text-sm bg-gray-600 rounded-lg text-gray-50 "
                  placeholder="Search by collection, NFT or User"
                  required
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter className="bg-[#1b1324]">
            <button
              className="w-full rounded-xl border-2 border-yellow-300 px-8 py-2 text-[#E6E0FA]"
              onClick={onClose}
            >
              Search
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
