import logo from "../assets/logo.svg";
import audit from "../assets/audit.png";
import binance from "../assets/binance.png";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { TbBrandTelegram, TbBrandDiscord } from "react-icons/tb";
import { FaMediumM } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
export function Footer() {
  return (
    <div className="bg-[#120E17]">
      <footer className="text-[#E6E0FA] font-light text-sm ">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="w-full px-4 ">
              <div className="flex justify-center w-full">
                <img
                  src={logo.src}
                  alt=""
                  className="md:w-full h-16 object-contain  m-auto md:-ml-5 -mt-10 mb-5 "
                />
              </div>
              <p className="text-[#E6E0FA] text-left ">
                Centaurus is world’s first Cross-chain Decentralized digital NFT
                marketplace that hosts the complete NFT lifecycle, and allows
                anyone to securely and seamlessly create, collect, buy, and sell
                NFTs.
              </p>
            </div>
            <div className="w-full px-4 text-center md:text-left">
              <h2 className="mb-3 text-lg font-medium tracking-widest text-[#E6E0FA] title-font">
                My Account
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link href="#" className="text-[#E6E0FA]">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#E6E0FA]">
                    Settings
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 text-center md:text-left">
              <h2 className="mb-3 text-lg font-medium tracking-widest text-[#E6E0FA] title-font">
                Resources
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link href="/help" className="text-[#E6E0FA]">
                    Help Contact
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-[#E6E0FA]">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#E6E0FA]">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-[#E6E0FA]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#E6E0FA]">
                    FAQ
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 text-center md:text-left">
              <h2 className="mb-3 text-lg font-medium tracking-widest text-[#E6E0FA] title-font">
                Company
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link href="/about" className="text-[#E6E0FA]">
                    About
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 text-center md:text-left">
              <nav className="mb-10 list-none">
                <li>
                  <img
                    src={audit.src}
                    alt=""
                    className="md:w-full h-16 object-contain  m-auto mb-5 cursor-pointer"
                  />
                </li>
                <li>
                  <img
                    src={binance.src}
                    alt=""
                    className="md:w-full h-16 object-contain cursor-pointer  m-auto"
                  />
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container flex flex-wrap items-center px-5 py-8 mx-auto">
            <div>
              {" "}
              <p className="text-sm text-center md:text-left text-[#E6E0FA] sm:text-left">
                © 2022 All Rights Reserved The Centaurus.io.
              </p>
            </div>
            <div className="inline-flex justify-center w-full mt-6 lg:ml-auto lg:mt-0 md:justify-start md:w-auto">
              <AiOutlineInstagram className=" h-5 w-5 mr-2" />
              <AiOutlineFacebook className=" h-5 w-5 mr-2" />
              <FiTwitter className="h-5 w-5 mr-2" />
              <TbBrandTelegram className=" h-5 w-5 mr-2" />
              <TbBrandDiscord className=" h-5 w-5 mr-2" />
              <FaMediumM className=" h-5 w-5 mr-2" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
