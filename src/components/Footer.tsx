import logo from "../assets/logo.svg";
import audit from "../assets/audit.png";
import binance from "../assets/binance.png";
import flo from "../assets/FLO.png";
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
      <footer className="text-[#8175A7] font-light text-sm ">
        <div className="container px-5 pt-20 pb-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="w-full px-4 ">
              <div className="flex justify-center w-full">
                <img
                  src={logo.src}
                  alt=""
                  className="md:w-full h-16 object-contain  m-auto md:-ml-5 -mt-10 mb-5 "
                />
              </div>
              <p className="text-[#8175A7] text-left ">
                The Centaurus is All In ONE Decentralized Ecosystem Enable
                Cross-Chain interoperability. Hosts complete NFT & Crypto
                lifecycle, And allows anyone to securely and seeminglessly
                Discover ,Create , Collect, Trade, Buy, and Sell crypto assets
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
                <li className="md:hidden lg:block">
                  <img
                    src={flo.src}
                    alt="flo"
                    className="md:w-full object-contain cursor-pointer  m-auto"
                  />
                </li>
              </nav>
            </div>
            <li className="hidden md:block lg:hidden">
              <img
                src={flo.src}
                alt="flo"
                className="md:w-full object-contain cursor-pointer  m-auto"
              />
            </li>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container flex flex-wrap justify-between items-center px-5 py-8 mx-auto">
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
                <AiOutlineInstagram className=" h-5 w-5 mr-2" />
              </a>{" "}
              <a href="https://www.facebook.com/Centaurusnft-105638135319887">
                {" "}
                <AiOutlineFacebook className=" h-5 w-5 mr-2" />
              </a>{" "}
              <a href="https://twitter.com/CNftmarketing">
                {" "}
                <FiTwitter className="h-5 w-5 mr-2" />
              </a>{" "}
              <a href="https://t.me/centarusofficial">
                <TbBrandTelegram className=" h-5 w-5 mr-2" />
              </a>{" "}
              <a href="https://discord.gg/yGuN8GXv2f">
                <TbBrandDiscord className=" h-5 w-5 mr-2" />
              </a>
              <a href="https://medium.com/@centaurusnftmarketing/centaurus-feature-rich-highly-compatible-and-next-gen-nft-platform-d0d1cffc4484">
                {" "}
                <FaMediumM className=" h-5 w-5 mr-2" />
              </a>{" "}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
