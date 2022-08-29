import logo from "../assets/logo.svg";
import audit from "../assets/audit.png";
import binance from "../assets/binance.png";
import flo from "../assets/FLO.png";
import Link from "next/link";
import {
  AiOutlineFacebook,

  AiOutlineInstagram,
} from "react-icons/ai";
import { TbBrandTelegram, TbBrandDiscord } from "react-icons/tb";
import { FaMediumM } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Tooltip } from '@chakra-ui/react';

export function Footer() {
  return (
    <div className="bg-[#120E17]">
      <footer className="text-[#8175A7] font-light text-sm ">
        <div className="container px-5 pt-20 pb-10 mx-auto">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-6">
            <div className="w-full col-span-2 px-4 ">
              <div className="flex justify-center w-full">
                <img
                  src={logo.src}
                  alt=""
                  className="object-contain h-16 m-auto mb-5 -mt-10 md:w-full md:-ml-5 "
                />
              </div>
              <p className="text-[#8175A7] text-justify ">
            The Centaurus is All In ONE Decentralized Ecosystem with Enabled Cross-Chain interoperability. The  Centaurus offers a complete NFT & Crypto lifecycle platform which allows anyone to securely and seamlessly Discover, Create, Collect, Trade, Swap, Buy and Sell digital assets.
              </p>
            </div>
            <div className="w-full px-4 text-center md:text-left">
              <h2 className="mb-3 text-lg font-medium tracking-widest text-[#8175A7] title-font">
                Company
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link href="/about" className="text-[#8175A7]">
                    About
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 text-center md:text-left">
              <h2 className="mb-3 text-lg font-medium tracking-widest text-[#8175A7] title-font">
                Resources
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link href="/help" className="text-[#8175A7]">
                    Help Contact
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-[#8175A7]">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#8175A7]">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-[#8175A7]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#8175A7]">
                    FAQ
                  </Link>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 text-center md:text-left">
              <h2 className="mb-3 text-lg font-medium tracking-widest text-[#8175A7] title-font">
                My Account
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link href="#" className="text-[#8175A7]">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#8175A7]">
                    Settings
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 text-center md:text-left ">
              <nav className="mb-10 list-none md:m-auto">
                <li>
                  <img
                    src={audit.src}
                    alt=""
                    className="object-contain h-16 m-auto mb-5 cursor-pointer md:w-full"
                  />
                </li>
                <li>
                  <div className="grid grid-cols-4 gap-2">
                      <Tooltip label='Ethereum'>
                    <a href="https://ethereum.org/en/" target="_blank">   <div className="flex items-center w-full h-12 p-1 m-auto align-middle bg-gray-100 rounded-full">
                  <img src="/ethereum.svg" alt="" className="object-contain w-8 h-8 m-auto"/>
                    </div></a>
                    </Tooltip>
                                 <Tooltip label='Binance'>
                    <a href="https://www.binance.com/en" target="_blank">   <div className="flex items-center w-full h-12 p-1 m-auto align-middle bg-gray-100 rounded-full">
                      <img src="/bnb.svg" alt="" className="object-contain w-8 h-8 m-auto"/>
                      </div></a>
                      </Tooltip>
                           <Tooltip label='Polygon'>
                    <a href="https://polygon.technology/" target="_blank">  <div className="flex items-center w-full h-12 p-1 m-auto align-middle bg-gray-100 rounded-full">
                                      <img src="/polygon.svg" alt="" className="object-contain w-8 h-8 m-auto"/>
                                      
                      </div></a>
                      </Tooltip>
                          <Tooltip label='Solana'>
                    <a href="https://solana.com/" target="_blank">   <div className="flex items-center w-full h-12 p-1 m-auto align-middle bg-gray-100 rounded-full">
                        <img src="/solana.svg" alt="" className="object-contain w-8 h-8 m-auto" /></div></a>  
                    </Tooltip>
                                  <Tooltip label='Fantom'>
                    <a href="https://fantom.foundation/" target="_blank">       <div className="flex items-center w-full h-12 p-1 m-auto align-middle bg-gray-100 rounded-full">
                                      <img src="/fantom.svg" alt="" className="object-contain w-8 h-8 m-auto"/>
                      </div></a>  
                    </Tooltip>
                    
                     <Tooltip label='Lighting'>
                    <a href="https://lightning.network/" target="_blank">       <div className="flex items-center w-full h-12 p-1 m-auto align-middle bg-gray-100 rounded-full">
                                      <img src="/lighting.svg" alt="" className="object-contain w-8 h-8 m-auto"/>
                      </div></a> 
                    </Tooltip>
                    <Tooltip label='Tezos'>
                    <a href="https://tezos.com/" target="_blank">       <div className="flex items-center w-full h-12 p-1 m-auto align-middle bg-gray-100 rounded-full">
                                      <img src="/tezos.svg" alt="" className="object-contain w-8 h-8 m-auto"/>
                      </div></a> 
                    </Tooltip>
                    
                     <Tooltip label='Avax'>
                    <a href="https://www.avax.network/" target="_blank">       <div className="flex items-center w-full h-12 p-1 m-auto align-middle bg-gray-100 rounded-full">
                                      <img src="/avax.svg" alt="" className="object-contain w-8 h-8 m-auto"/>
                      </div></a> 
                      </Tooltip>
                                                            
  
                 </div>
                </li>
     
              </nav>
            </div>
   
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container flex flex-wrap items-center justify-between px-5 py-8 mx-auto">
            <div className="m-auto ">
              {" "}
              <p className="text-sm text-center md:text-left text-[#8175A7] sm:text-left">
                © 2022 All Rights Reserved The Centaurus.io.
              </p>
            </div>
            <div className="m-auto mt-5 md:mt-0">
              <ul className="flex">
                <li className="mr-2 cursor-pointer">Disclaimer | </li>
                <li className="mr-2 cursor-pointer"> Contact | </li>
                <li className="mr-2 cursor-pointer"> FAQ </li>
              </ul>
            </div>
            <div className="inline-flex justify-center w-full m-auto mt-6 lg:ml-auto lg:mt-0 md:justify-start md:w-auto">
              <a href="https://www.instagram.com/accounts/login/?next=/centaurusnft/">
                {" "}
                <AiOutlineInstagram className="w-5 h-5 mr-2 " />
              </a>{" "}
              <a href="https://www.facebook.com/Centaurusnft-105638135319887">
                {" "}
                <AiOutlineFacebook className="w-5 h-5 mr-2 " />
              </a>{" "}
              <a href="https://twitter.com/CNftmarketing">
                {" "}
                <FiTwitter className="w-5 h-5 mr-2" />
              </a>{" "}
              <a href="https://t.me/centarusofficial">
                <TbBrandTelegram className="w-5 h-5 mr-2 " />
              </a>{" "}
              <a href="https://discord.gg/yGuN8GXv2f">
                <TbBrandDiscord className="w-5 h-5 mr-2 " />
              </a>
              <a href="https://medium.com/@centaurusnftmarketing/centaurus-feature-rich-highly-compatible-and-next-gen-nft-platform-d0d1cffc4484">
                {" "}
                <FaMediumM className="w-5 h-5 mr-2 " />
              </a>{" "}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
