import React, { useRef } from "react";
import Link from "next/link";

export function Sidebar(props: any) {
  return (
    <div
      className={
        props.showSidebar
          ? "flex fixed h-[100vh]  md:hidden inset-y-0 left-0 w-full bg-[#0000008c] transform -translate-x-full  md:relative  transition duration-200 ease-in-out"
          : "transform -translate-x-0 duration-200 ease-in-out transition  fixed h-[100vh] inset-y-0 left-0 w-full bg-[#0000008c] block md:hidden z-50"
      }
    >
      <div className="sidebar bg-[#1B1324] w-3/4 space-y-6 py-7 px-6 h-full ">
        <nav
          onClick={props.handleShowSidebar}
          className="flex flex-col space-y-6 "
        >
          <div>
            <p className="text-[#E6E0FA]">Sidebar Link</p>
          </div>
        </nav>
        <div
          className="h-full absolute right-0 top-0"
          onClick={props.handleShowSidebar}
        >
          <p
            className="text-[30px] text-[#E6E0FA] font-black px-5"
            onClick={props.handleShowSidebar}
          >
            x
          </p>
        </div>
      </div>
    </div>
  );
}