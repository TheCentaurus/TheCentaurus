import { useState } from "react";
import styled from "styled-components";
import solana from "../../assets/solana.svg";
import tezos from "../../assets/tezos.svg";

const Network = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpenDropdown(false);
    console.log(selectedOption);
  };

  const DropDownContainer = styled("div")`
    margin: 0;
  `;

  const DropDownHeader = styled("div")`
    font-weight: 500;
    color: white;
  `;

  const DropDownListContainer = styled("div")`
    width: 10.5em;
    position: absolute;
    z-index: 100;
  `;

  const DropDownList = styled("ul")`
    padding: 3;
    margin: 0;
    width: 10.5em;
    background: #1b1324;

    box-sizing: border-box;
    color: white;

    font-weight: 500;
    &:first-child {
      padding-top: 0.8em;
    }
  `;

  return (
    <DropDownContainer className="md:hidden lg:block">
      <DropDownHeader
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className="w-full border-[1px] bg-transparent border-[#1b1324] dark:border-yellow-300 cursor-pointer text-yellow-300 font-bold lg:text-sm text-[12px] rounded-xl px-4 py-3 mb-2 mt-2"
      >
        <p className="dark:text-yellow-300 text-[#1b1324] flex items-center">
          {" "}
          {selectedOption || "Ethereum"}
          <span className="px-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mx-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </p>
      </DropDownHeader>
      {isOpenDropdown && (
        <DropDownListContainer>
          <DropDownList
            onMouseEnter={() => setIsOpenDropdown(true)}
            className="p-2 rounded-lg w-[200px]"
          >
            <li
              onClick={onOptionClicked("Ethereum")}
              className="dark:bg-[#1b1324]  flex mb-3 items-center px-2"
            >
              <img
                src="ethereum.svg"
                className="object-contain mr-2 h-7 "
                alt=""
              />
              Ethereum
            </li>
            <li
              onClick={onOptionClicked("BNB")}
              className="dark:bg-[#1b1324] flex mb-3 items-center px-2"
            >
              <img src="bnb.svg" className="object-contain mr-2 h-7 " alt="" />
              BNB
            </li>
            <li
              onClick={onOptionClicked("Polygon")}
              className="bg-[#1b1324] flex mb-3 items-center px-2"
            >
              <img
                src="polygon.svg"
                className="object-contain mr-2 h-7 "
                alt=""
              />
              Polygon
            </li>
            <li
              onClick={onOptionClicked("Bitcoin Oridnals")}
              className="dark:bg-[#1b1324] flex mb-3 items-center px-2"
            >
              <img
                // bitcoin logo from the cloud
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
                className="object-contain mr-2 h-7 "
                alt=""
              />
              Bitcoin Oridnals
            </li>
            <li
              onClick={onOptionClicked("Solana")}
              className="dark:bg-[#1b1324] flex mb-3 items-center px-2"
            >
              <img
                // solana logo from the cloud
                src={solana.src}
                className="object-contain h-6 mr-2 "
                alt=""
              />
              Solana
            </li>
            <li
              onClick={onOptionClicked("Tezos")}
              className="dark:bg-[#1b1324] flex mb-3 items-center px-2"
            >
              <img
                src={tezos.src}
                className="object-contain mr-2 h-7 "
                alt=""
              />
              Tezos
            </li>
            <li
              onClick={onOptionClicked("Cardano")}
              className="dark:bg-[#1b1324] flex mb-3 items-center px-2"
            >
              <img
                src={"https://cryptologos.cc/logos/cardano-ada-logo.svg?v=024"}
                className="object-contain mr-2 h-7 "
                alt=""
              />
              Cardano
            </li>
            <li
              onClick={onOptionClicked("Flow")}
              className="dark:bg-[#1b1324] flex mb-3 items-center px-2"
            >
              <img
                src={"https://cryptologos.cc/logos/flow-flow-logo.svg?v=024"}
                className="object-contain mr-2 h-7 "
                alt=""
              />
              Flow
            </li>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Network;
