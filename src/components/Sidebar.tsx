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
            <p className="text-[#E6E0FA]"> DEX</p>
          </div>
          <div>
            <p className="text-[#E6E0FA]">WALLET</p>
          </div>
          <div>
            <p className="text-[#E6E0FA]"> $$CENT</p>
          </div>
          <div>
            <p className="text-[#E6E0FA]">Resources</p>
          </div>
          <div>
            <p className="text-[#E6E0FA]">Help</p>
          </div>

          <p className="bg-[#1b1324] border-none text-[#e6e0fa]">Ethereum</p>
          <p className="bg-[#1b1324] border-none text-[#e6e0fa]">BNB</p>
          <p className="bg-[#1b1324] border-none text-[#e6e0fa]">Polygon</p>
          <p className="bg-[#1b1324] border-none text-[#e6e0fa]">Avalanche</p>
          <p className="bg-[#1b1324] border-none text-[#e6e0fa]">Moonriver</p>
          <p className="bg-[#1b1324] border-none text-[#e6e0fa]">Moonbeam</p>
        </nav>
        <div
          className="absolute top-0 right-0 h-full"
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
