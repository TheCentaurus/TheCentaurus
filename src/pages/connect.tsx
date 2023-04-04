import profileService from "@/api/profile.service";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import baseUrl from "../api/baseUrl";
import bg from "../assets/bgcoin.jpeg";
import logo from "../assets/logo.svg";

export default function ConnectPage() {
  const router = useRouter();
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  // check if the user is connected to a wallet

  const handleAuth = async () => {
    //disconnects the web3 provider if it's already active
    if (isConnected) {
      await disconnectAsync();
    }
    // enabling the web3 provider metamask
    const { account, chain } = await connectAsync({
      connector: new InjectedConnector(),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };
    console.log(userData, "userData");
    localStorage.setItem("address", account);
    // making a post request to our 'request-message' endpoint
    const { data } = await axios.post(
      `${baseUrl}/Auth/web3/requestmessage`,
      userData,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const message = data.message;
    // signing the received message via metamask
    const signature = await signMessageAsync({ message });

    await axios.post(
      `${baseUrl}/Auth/web3/verify`,
      {
        message,
        signature,
      },
      { withCredentials: true } // set cookie from Express server
    );

    // redirect to /user
    router.push(`/create-profile/${userData.address}`);
  };

  const hasAccount = () => {
    if (!localStorage.getItem("address")) {
      return false;
    }

    let address = localStorage.getItem("address");
    profileService.getProfile(address).then((res) => {
      if (res.data) {
        router.push(`/profile/`);
      } else {
        router.push(`/create-profile/${address}`);
      }
    });
  };

  useEffect(() => {
    hasAccount();
  }, []);

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
            onClick={() => handleAuth()}
            className="hover:scale-105 transform transition duration-300 px-6 py-1 text-lg border-[#2a243d] dark:text-[#2a243d] cursor-pointer border-[2px] dark:border-[#f6d30b00] flex space-x-3 rounded-xl dark:bg-[#332b49] bg-transparent z-20"
          >
            <img src="metamask.svg" className="w-7" alt="" />
            <span className="dark:text-[#fff] text-[#413A5A]">MetaMask</span>
          </button>

          <button
            // onClick={() => connectWithCoinbaseWallet()}
            className="hover:scale-105 transform transition duration-300 px-6 py-1 text-lg border-[#2a243d] dark:text-[#2a243d] cursor-pointer border-[2px] dark:border-[#f6d30b00] flex space-x-3 rounded-xl dark:bg-[#332b49] bg-transparent z-20"
          >
            <img src="coinbase.svg" className="w-7" alt="" />
            <span className="dark:text-[#fff] text-[#413A5A]">
              Coinbase Wallet
            </span>
          </button>

          <button
            // onClick={() => connectWithWalletConnect()}
            className="hover:scale-105 transform transition duration-300 px-6 py-1 text-lg border-[#2a243d] dark:text-[#2a243d] cursor-pointer border-[2px] dark:border-[#f6d30b00] flex space-x-3 rounded-xl dark:bg-[#332b49] bg-transparent z-20"
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
