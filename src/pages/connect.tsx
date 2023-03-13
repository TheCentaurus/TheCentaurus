import {
  useAddress,
  useCoinbaseWallet,
  useMetamask,
  useWalletConnect,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import bg from "../assets/bgcoin.jpeg";
import logo from "../assets/logo.svg";

export default function ConnectPage() {
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const address = useAddress();

  const router = useRouter();

  // check if the user is connected to a wallet

  // check if user is registered

  useEffect(() => {
    if (address) {
      router.push(`/create-profile?address=${address}`);
    }
  }, [address]);

  return (
    <div className="lg:flex bg-[#d5eef1ad] min-h-screen dark:bg-[#2A243D] ">
      <img
        src={bg.src}
        className="w-1/2 h-screen object-cover hidden lg:block"
        alt=""
      />

      <div className="flex flex-col justify-center space-y-5 xl:space-y-10 w-full lg:w-1/2 p-5 md:p-10 xl:p-20 2xl:p-40">
        <div>
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between items-center">
            <img
              src={logo.src}
              onClick={() => router.push("/")}
              className="w-40 cursor-pointer"
              alt=""
            />
            <p className="text-2xl font-bold text-[#2a243d] dark:text-[#F6D10B]">
              Connect Wallet
            </p>
          </div>
          <p className="mt-5 text-center lg:text-start dark:text-[#fff] text-[#413A5A] ">
            Choose how you want to connect. There are several wallet providers.
          </p>
        </div>
        <div className="w-full flex flex-col space-y-5">
          <button
            onClick={() => connectWithMetamask()}
            className="hover:scale-105 transform transition duration-300 px-6 py-1 text-lg border-[#2a243d] dark:text-[#2a243d] cursor-pointer border-[1px] dark:border-[#f6d30b00] flex space-x-3 rounded-xl dark:bg-[#2d2939] bg-transparent z-20"
          >
            <img src="metamask.svg" className="w-7" alt="" />
            <span className="dark:text-[#fff] text-[#413A5A]">MetaMask</span>
          </button>

          <button
            onClick={() => connectWithCoinbaseWallet()}
            className="hover:scale-105 transform transition duration-300 px-6 py-1 text-lg border-[#2a243d] dark:text-[#2a243d] cursor-pointer border-[1px] dark:border-[#f6d30b8f] flex space-x-3 rounded-xl dark:bg-[#2A243D] bg-transparent z-20"
          >
            <img src="coinbase.svg" className="w-7" alt="" />
            <span className="dark:text-[#fff] text-[#413A5A]">
              Coinbase Wallet
            </span>
          </button>

          <button
            onClick={() => connectWithWalletConnect()}
            className="hover:scale-105 transform transition duration-300 px-6 py-1 text-lg border-[#2a243d] dark:text-[#2a243d] cursor-pointer border-[1px] dark:border-[#f6d30b8f] flex space-x-3 rounded-xl dark:bg-[#2A243D] bg-transparent z-20"
          >
            <img src="walletconnect.svg" className="w-7" alt="" />
            <span className="dark:text-[#fff] text-[#413A5A]">
              WalletConnect
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
