import { useRouter } from "next/router";
import { useContext } from "react";
import { BsSun } from "react-icons/bs";
import MyThemeContext from "../theme/themeContext";

export function Sidebar(props: any) {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  const router = useRouter();
  return (
    <div
      className={
        props.showSidebar
          ? "flex fixed h-[100vh]  md:hidden inset-y-0 left-0 w-full bg-[#0000008c] transform -translate-x-full  md:relative  transition duration-200 ease-in-out"
          : "transform -translate-x-0 duration-200 ease-in-out transition  fixed h-[100vh] inset-y-0 left-0 w-full bg-[#0000008c] block lg:hidden z-50"
      }
    >
      <div className="sidebar bg-[#fff] dark:bg-[#1B1324] w-3/4 space-y-6 py-7 px-6 h-full">
        <nav
          onClick={props.handleShowSidebar}
          className="flex flex-col space-y-6"
        >
          <div>
            <p
              className="dark:text-[#e6e0fa] text-[#1b1324]"
              onClick={() => {
                router.push("/profile");
              }}
            >
              {" "}
              Profile
            </p>
          </div>
          <div>
            <p className="dark:text-[#e6e0fa] text-[#1b1324]"> DEX</p>
          </div>
          <div>
            <p className="dark:text-[#e6e0fa] text-[#1b1324]">WALLET</p>
          </div>
          <div>
            <p className="dark:text-[#e6e0fa] text-[#1b1324]"> $$CENT</p>
          </div>
          <div>
            <p className="dark:text-[#e6e0fa] text-[#1b1324]">Resources</p>
          </div>
          <div>
            <p className="dark:text-[#e6e0fa] text-[#1b1324]">Help</p>
          </div>
          <div>
            {" "}
            <button
              type="button"
              className="py-3 px-2 sm:px-5 mr-2 w-1/2 flex bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded-xl"
              onClick={toggleThemeHandler}
            >
              <BsSun className="m-auto" />
            </button>
          </div>

          <p className="dark:bg-[#1b1324] bg-white border-none dark:text-[#e6e0fa] text-[#1b1324]">
            Ethereum
          </p>
          <p className="dark:bg-[#1b1324] bg-white border-none dark:text-[#e6e0fa] text-[#1b1324]">
            BNB
          </p>
          <p className="dark:bg-[#1b1324] bg-white border-none dark:text-[#e6e0fa] text-[#1b1324]">
            Polygon
          </p>
          <p className="dark:bg-[#1b1324] bg-white border-none dark:text-[#e6e0fa] text-[#1b1324]">
            Avalanche
          </p>
          <p className="dark:bg-[#1b1324] bg-white border-none dark:text-[#e6e0fa] text-[#1b1324]">
            Moonriver
          </p>
          <p className="dark:bg-[#1b1324] bg-white border-none dark:text-[#e6e0fa] text-[#1b1324]">
            Moonbeam
          </p>
        </nav>
        <div
          className="absolute top-0 right-0 h-full"
          onClick={props.handleShowSidebar}
        >
          <p
            className="text-[30px] dark:text-[#e6e0fa] text-[#1b1324] font-black px-5"
            onClick={props.handleShowSidebar}
          >
            x
          </p>
        </div>
      </div>
    </div>
  );
}
