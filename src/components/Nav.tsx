import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineMenu, AiFillInstagram } from "react-icons/ai";
import { Sidebar } from "./Sidebar";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export function Nav(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSidebar, setShowSidebar] = useState(true);
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

  return (
    <div className="flex items-center justify-between w-full ">
      <div
        className={
          navbar
            ? ` bg-[#1B1324] px-2 sshadow-lg md:hidden fixed top-0 left-0 right-0 py-0 z-30 pb-2`
            : " bg-[#230c2e02] md:hidden fixed top-0 left-0 right-0 py-0 z-30 pb-2"
        }
      >
        <div className="items-center cursor-pointer md:hidden">
          <img
            src={logo.src}
            alt=""
            className="md:w-full h-16 object-contain ml-5"
          />
        </div>

        <div className="flex items-center fixed top-5 z-20 right-5 py-2 sm:hidden w-[80px]">
          <div
            onClick={onOpen}
            className="h-7 w-7 bg-[#1b1324] border p-2 rounded-lg mr-5"
          >
            <BsSearch size={10} className="text-white" />
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
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
                className="block p-3 pl-10 w-full text-sm text-gray-50 bg-gray-600 rounded-lg "
                placeholder="Search by collection, NFT or User"
                required
              />
            </div>
          </form>
        </div>

        <div className="flex justify-between items-center  md:w-4/12 lg:w-3/12">
          <div className=" text-[#E6E0FA]">
            <IoNotifications size={25} className="text-center text-gray-600" />
          </div>
          <div className="max-w-[200px] flex items-center justify-center text-[#E6E0FA] font-bold max-h-[60px] rounded-sm py-[3px] px-[2px] button-custom">
            <button className="w-full h-full relative border-2 border-yellow-300 cursor-pointer text-[#E6E0FA] font-bold lg:text-sm text-[12px] rounded-xl px-[15px] py-[10px] ">
              Connect Wallet
            </button>
          </div>
          <div>
            <button className="border-2 border-yellow-300 cursor-pointer text-[#E6E0FA] font-bold lg:text-sm text-[12px] rounded-xl px-[15px] py-[10px]">
              <FiMoreHorizontal
                size={20}
                className="text-center text-gray-600"
              />
            </button>
          </div>
        </div>
      </div>
      {/* modal for search on mobile */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="bg-[#1b1324] text-white">Search</ModalHeader>
          <ModalCloseButton className="text-white" />
          <ModalBody className="bg-[#1b1324]">
            <form className="w-full">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
                  className="block p-3 pl-10 w-full text-sm text-gray-50 bg-gray-600 rounded-lg "
                  placeholder="Search by collection, NFT or User"
                  required
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter className="bg-[#1b1324]">
            <button
              className="w-full rounded-xl border-2 border-yellow-300 px-8 py-2 text-white"
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
