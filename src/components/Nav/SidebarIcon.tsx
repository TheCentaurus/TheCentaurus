import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Sidebar } from ".././Sidebar";

import Logo from "./Logo";

const SidebarIcon = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

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
    <>
      <div
        className={
          navbar
            ? ` dark:bg-[#060308] bg-[#ffffff] px-2 shadow-lg w-full lg:hidden fixed top-0 left-0 right-0 py-0 z-30 pb-2`
            : " dark:bg-[#02010202] bg-[#d5eef100] lg:hidden fixed w-full top-0 left-0 right-0 py-0 z-30 pb-2"
        }
      >
        <div className=" flex justify-between px-4">
        <Logo />
        <div className="flex items-center ">
          <div className="h-7 w-7 dark:bg-[#1b1324] bg-[#f7ffff] border p-2 rounded-lg mr-5">
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
      </div>
      <Sidebar
        // @ts-ignore
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
      />
    </>
  );
};

export default SidebarIcon;
