import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import verified from "../assets/verified.png";
import { motion } from "framer-motion";
export function Feature(props: any) {
  console.log(props.data, "data");
  // this is the state in which you will store data from props inorder to render it in the feature carousel
  const [state, setState] = useState({
    index: 0,
    urls: props.data?.data?.map((datum: any) => {
      return datum;
    }),
  });
  const next = () => {
    setState((oldState) => {
      return {
        ...oldState,
        index: state.index + 1,
      };
    });
  };
  const previous = () => {
    setState((oldState) => {
      return {
        ...oldState,
        index: state.index - 1,
      };
    });
  };
  useEffect(() => {
    return setState((oldState) => ({
      ...oldState,
      urls: [...props.data.data],
    }));
  }, [props.data.data]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
        type: "fade",
        stiffness: 200,
        delay: 0.5,
      }}
      className="w-5/6 lg:max-w-lg lg:w-full md:w-full bg-[#2A243D] rounded-xl p-5 m-auto"
    >
      <div className="relative">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            type: "fade",
            stiffness: 200,
            delay: 1.2,
          }}
          className="object-cover object-center  rounded "
          alt="hero"
          src={state.urls[state.index].pic.src.src}
        />
        <div className="flex justify-between items-center mb-3 ">
          {state.index !== 0 ? (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={previous}
              className="bg-[#1B1324] cursor-pointer h-7 w-7 md:h-10 md:w-10 justify-center  p-2 flex items-center rounded-lg"
            >
              <AiOutlineLeft color="#F6D10B" />
            </motion.div>
          ) : (
            <div className="bg-[#1B1324] h-7 w-7 md:h-10 md:w-10 justify-center cursor-not-allowed  p-2 flex items-center rounded-lg">
              <AiOutlineLeft color="#F6D10B" />
            </div>
          )}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              type: "fade",
              stiffness: 200,
              delay: 1.2,
            }}
            src={state.urls[state.index].elipsePic.src.src}
            className="object-cover object-center rounded w-16 h-16 md:w-auto md:h-auto -mt-8  md:-mt-12"
            alt="hero"
          />
          {state?.urls.length - 1 !== state.index ? (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="bg-[#1B1324] h-7 w-7 md:h-10 cursor-pointer md:w-10 justify-center  p-2 flex items-center rounded-lg"
            >
              <AiOutlineRight color="#F6D10B" />
            </motion.div>
          ) : (
            <div className="bg-[#1B1324] h-7 w-7 md:h-10 md:w-10 justify-center  p-2 flex items-center rounded-lg cursor-not-allowed">
              <AiOutlineRight color="#F6D10B" />
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full justify-between items-center ">
        <div className="flex items-center">
          <h1 className="text-[#E6E0FA] font-bold text-[14px] md:text-[24px] mr-2">
            {state.urls[state.index].title}
          </h1>
          <img
            src={verified.src}
            alt=""
            className="h-4 md:h-5 object-contain md:mt-2"
          />
        </div>
        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-1  ml-4 text-sx lg:text-lg text-[#F6D10B] border-[1px] border-[#F6D10B]  rounded-xl bg-transparent"
          >
            Follow
          </motion.button>
        </div>
      </div>
      <div className="h-[1px] w-full bg-slate-400 my-5"></div>
      {/* <hr className="bg-slate-400 my-5" /> */}
      <div>
        <p className="text-[#E6E0FA] text-sm md:text-md">
          {state.urls[state.index].description}
        </p>
      </div>
    </motion.div>
  );
}
