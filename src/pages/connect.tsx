import {
  ConnectWallet,
  useAddress,
  useDisconnect,
  useLogout,
  useUser,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import bg from "../assets/bgcoin.jpeg";
import logo from "../assets/logo.svg";

export default function ConnectPage() {
  
  const router = useRouter();
  const address = useAddress();
  const { logout } = useLogout();
  const disconnect = useDisconnect();
  const { user, isLoggedIn } = useUser();

  useEffect(() => {
    if (isLoggedIn) {
      // user?.data.username? null : router.push("/edit-profile");
    }
  }, [isLoggedIn]);

  return (
    <div className="lg:flex bg-[#d5eef1ad] min-h-screen dark:bg-[#2A243D] ">
      <img
        src={bg.src}
        className="hidden object-cover w-1/2 h-screen lg:block"
        alt=""
      />

      <div className="flex flex-col justify-center w-full p-5 space-y-5 xl:space-y-10 lg:w-1/2 md:p-10 xl:p-20 2xl:p-40">
        <div>
          <a href="/" className="flex justify-center">
            <img
              src={logo.src}
              onClick={() => router.push("/")}
              className="w-40 cursor-pointer"
              alt=""
            />
          </a>
          <p className="mt-5 text-center  dark:text-[#fff] text-[#413A5A] ">
            Choose how you want to connect.
          </p>
        </div>
        <div className="flex flex-col w-full space-y-5">
          {isLoggedIn ? (
            <>
              <p className="text-center text-white">{address}</p>
              <button
                onClick={() => logout()}
                className="hover:scale-105 transform  justify-center transition duration-300 px-6 py-1 text-lg  border-[#2a243d] dark:text-[#2a243d] cursor-pointer border-[1px] dark:border-[#f6d30b00] flex space-x-3 rounded-xl dark:bg-[#332b49] bg-transparent z-20"
              >
                <p className="text-center text-white">Logout</p>
              </button>
            </>
          ) : (
            <>
              <ConnectWallet />
              {address && (
                <button
                  onClick={() => disconnect()}
                  className="hover:scale-105 transform  justify-center transition duration-300 px-6 py-1 text-lg  border-[#2a243d] dark:text-[#2a243d] cursor-pointer border-[1px] dark:border-[#f6d30b00] flex space-x-3 rounded-xl dark:bg-[#332b49] bg-transparent z-20"
                >
                  <p className="text-center text-white">Disconnect</p>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
