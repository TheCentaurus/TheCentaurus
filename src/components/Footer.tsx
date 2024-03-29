import { Tooltip } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaMediumM } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { TbBrandDiscord, TbBrandTelegram } from "react-icons/tb";
import audit from "../assets/audit.png";
import logo from "../assets/logo.svg";


export function Footer() {
  const address = useAddress();
  return (
    <div className="dark:bg-[#120E17] bg-[#e1eff0ad] z-20">
      <footer className="dark:text-[#8175A7] text-[#413A5A] font-light text-sm z-20">
        <div className="container z-20 px-5 pt-10 pb-5 mx-auto">
          <div className="z-20 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-6">
            <div className="z-20 w-full col-span-2 px-4">
              <div className="flex justify-center w-full">
                <img
                  src={logo.src}
                  alt=""
                  className="object-contain h-16 m-auto mb-5 -mt-5 md:w-full md:-ml-5"
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

            <div className="z-20 w-full col-span-2 px-4 text-center md:col-span-1 md:text-left">
              <h2 className="mb-3 text-lg font-medium tracking-widest dark:text-[#8175A7] text-[#413A5A] title-font">
                My Account
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link
                    href={address?.length ? "/profile" : "/"}
                    className="dark:text-[#8175A7] text-[#413A5A]"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href={address?.length ? "/profile" : "/"}
                    className="dark:text-[#8175A7] text-[#413A5A]"
                  >
                    Settings
                  </Link>
                </li>
              </nav>
            </div>
            <div className="z-20 w-full col-span-2 px-4 text-center md:text-left md:col-span-1">
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
            <div className="z-20 w-full col-span-2 px-4 text-center md:text-left md:col-span-1">
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
            <div className="z-20 w-full col-span-2 px-4 text-center md:text-left md:col-span-1">
              <nav className="mb-10 list-none lg:m-auto">
                <li>
                  <img
                    src={audit.src}
                    alt=""
                    className="object-contain h-16 m-auto mb-5 cursor-pointer md:m-0 lg:m-auto lg:w-full"
                  />
                </li>

                <li>
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
                    <Tooltip label="Cardano">
                      <a
                        href="https://www.cardano.org/en/home/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=024"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>

                    <Tooltip label="Bitcoin Ordinals">
                      <a
                        href="https://bitcoinordinals.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
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

                    <Tooltip label="Flow">
                      <a
                        href="https://www.onflow.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <div className="flex items-center w-full h-12 p-1 m-auto align-middle rounded-full">
                          <img
                            src="https://cryptologos.cc/logos/flow-flow-logo.svg?v=024"
                            alt=""
                            className="object-contain w-6 h-6 m-auto"
                          />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-[#8175A7] z-20">
          <div className="container flex flex-wrap items-center justify-between px-5 py-8 mx-auto">
            <div className="z-20 m-auto">
              {" "}
              <p className="text-sm text-center md:text-left dark:text-[#8175A7] text-[#413A5A] sm:text-left">
                © 2023 All Rights Reserved thecentaurus.io
              </p>
            </div>
            <div className="z-20 m-auto mt-5 md:mt-0">
              <ul className="flex">
                <li className="mr-2 cursor-pointer">Disclaimer | </li>
                <li className="mr-2 cursor-pointer"> Contact | </li>
                <li className="mr-2 cursor-pointer"> FAQ </li>
              </ul>
            </div>
            <div className="z-20 inline-flex justify-center w-full m-auto mt-6 text-yellow-300 lg:ml-auto lg:mt-0 md:justify-start md:w-auto">
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
