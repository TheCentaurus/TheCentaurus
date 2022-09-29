import logo from "../assets/logo.svg";
import audit from "../assets/audit.png";
import binance from "../assets/binance.png";
import flo from "../assets/FLO.png";
import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTelegram, TbBrandDiscord } from "react-icons/tb";
import { FaMediumM } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Tooltip } from "@chakra-ui/react";

export function Footer() {
  return (
    <div className="dark:bg-[#120E17] bg-[#e1eff0ad] z-20">
      <footer className="dark:text-[#8175A7] text-[#413A5A] font-light text-sm z-20">
        <div className="container px-5 pt-20 pb-10 mx-auto z-20">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-6 z-20">
            <div className="w-full col-span-2 px-4 z-20">
              <div className="flex justify-center w-full">
                <img
                  src={logo.src}
                  alt=""
                  className="object-contain h-16 m-auto mb-5 -mt-10 md:w-full md:-ml-5 "
                />
              </div>
              <p className="dark:text-[#8175A7] text-[#413A5A] text-justify ">
                The Centaurus is All In ONE Decentralized Ecosystem with Enabled
                Cross-Chain interoperability. The Centaurus offers a complete
                NFT & Crypto lifecycle platform which allows anyone to securely
                and seamlessly Discover, Create, Collect, Trade, Swap, Buy and
                Sell digital assets.
              </p>
            </div>

            <div className="w-full col-span-2 md:col-span-1 px-4 text-center md:text-left z-20">
              <h2 className="mb-3 text-lg font-medium tracking-widest dark:text-[#8175A7] text-[#413A5A] title-font">
                My Account
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link href="#" className="dark:text-[#8175A7] text-[#413A5A]">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dark:text-[#8175A7] text-[#413A5A]">
                    Settings
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 text-center md:text-left z-20 col-span-2 md:col-span-1">
              <h2 className="mb-3 text-lg font-medium tracking-widest dark:text-[#8175A7] text-[#413A5A] title-font">
                Resources
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link
                    href="/help"
                    className="dark:text-[#8175A7] text-[#413A5A]"
                  >
                    Help Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="dark:text-[#8175A7] text-[#413A5A]"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="dark:text-[#8175A7] text-[#413A5A]"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="dark:text-[#8175A7] text-[#413A5A]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="dark:text-[#8175A7] text-[#413A5A]"
                  >
                    FAQ
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 text-center md:text-left z-20 col-span-2 md:col-span-1">
              <h2 className="mb-3 text-lg font-medium tracking-widest dark:text-[#8175A7] text-[#413A5A] title-font">
                Company
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link
                    href="/about"
                    className="dark:text-[#8175A7] text-[#413A5A]"
                  >
                    About
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 text-center md:text-left z-20 col-span-2 md:col-span-1">
              <nav className="mb-10 list-none lg:m-auto">
                <li>
                  <img
                    src={audit.src}
                    alt=""
                    className="object-contain h-16 m-auto md:m-0 lg:m-auto mb-5 cursor-pointer lg:w-full"
                  />
                </li>
                <img
                  src="bsc.svg"
                  alt=""
                  className="object-contain h-16  lg:m-auto mb-5 m-auto md:m-0 cursor-pointer lg:w-full"
                />
                {/* <li>
                  <div className="grid grid-cols-4 gap-2">
                    <Tooltip label="Ethereum">
                      <a
                        href="https://ethereum.org/en/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="/ethereum.svg"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>
                    <Tooltip label="Binance">
                      <a
                        href="https://www.binance.com/en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="/bnb.svg"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>
                    <Tooltip label="Polygon">
                      <a
                        href="https://polygon.technology/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="/polygon.svg"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>
                    <Tooltip label="Solana">
                      <a
                        href="https://solana.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="/solana.svg"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>
                    <Tooltip label="Fantom">
                      <a
                        href="https://fantom.foundation/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="/fantom.svg"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>

                    <Tooltip label="Lighting">
                      <a
                        href="https://lightning.network/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="/lighting.svg"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>
                    <Tooltip label="Tezos">
                      <a
                        href="https://tezos.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="/tezos.svg"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>

                    <Tooltip label="Avax">
                      <a
                        href="https://www.avax.network/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="/avax.svg"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                </li> */}
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-[#8175A7] z-20">
          <div className="container flex flex-wrap items-center justify-between px-5 py-8 mx-auto">
            <div className="m-auto z-20">
              {" "}
              <p className="text-sm text-center md:text-left dark:text-[#8175A7] text-[#413A5A] sm:text-left">
                © 2022 All Rights Reserved The Centaurus.io.
              </p>
            </div>
            <div className="m-auto mt-5 md:mt-0 z-20">
              <ul className="flex">
                <li className="mr-2 cursor-pointer">Disclaimer | </li>
                <li className="mr-2 cursor-pointer"> Contact | </li>
                <li className="mr-2 cursor-pointer"> FAQ </li>
              </ul>
            </div>
            <div className="inline-flex justify-center w-full m-auto mt-6 lg:ml-auto lg:mt-0 md:justify-start md:w-auto z-20 text-yellow-300">
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
