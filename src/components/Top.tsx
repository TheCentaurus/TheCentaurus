import prm from "../assets/plm.png";
import indigo from "../assets/indigo.png";
import shaker from "../assets/shaker.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export function Top() {
  return (
    <>
      <div className="flex justify-center lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto ">
          <motion.div
            initial={{ x: -20 }}
            whileInView={{
              y: 0,
              x: 0,
              scale: 1,
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85,
              },
            }}
            viewport={{ amount: 0.8 }}
            className="my-4 z-20"
          >
            <motion.h1 className="text-3xl font-semibold text-[#413A5A] dark:text-[#E6E0FA]">
              Top Buyers
            </motion.h1>

            <div className="max-w-md p-4 bg-[#d5eef1ad] border dark:border-none dark:bg-[#1B1324] rounded-lg shadow-md sm:p-8 my-4">
              <div className="flow-root ">
                <ul role="list">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-xl text-[#413A5A] dark:text-[#E6E0FA] ">
                          1
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={prm.src}
                          alt=""
                          className="h-12 w-12 rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-lg  text-[#413A5A] dark:text-[#E6E0FA] font-semibold">
                          Prmlrecords
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-lg  text-[#413A5A] dark:text-[#E6E0FA] ">
                          2
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={indigo.src}
                          alt=""
                          className="h-12 w-12 rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-lg  text-[#413A5A] dark:text-[#E6E0FA]">
                          Indigo Bang
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 40 }}
            whileInView={{
              x: 0,
            }}
            viewport={{ amount: 0.8 }}
            className="my-4 z-20"
          >
            {" "}
            <motion.h1 className="text-3xl font-semibold text-[#413A5A] dark:text-[#E6E0FA]">
              Top Sellers
            </motion.h1>
            <div className="max-w-md p-4 bg-[#d5eef1ad] border dark:border-none dark:bg-[#1B1324] rounded-lg shadow-md sm:p-8 my-4">
              <div className="flow-root ">
                <ul role="list">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-xl text-[#413A5A] dark:text-[#E6E0FA] ">
                          1
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={shaker.src}
                          alt=""
                          className="h-12 w-12 rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-lg  text-[#413A5A] dark:text-[#E6E0FA]">
                          Shaker Sangam
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-lg  text-[#413A5A] dark:text-[#E6E0FA] ">
                          2
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={prm.src}
                          alt=""
                          className="h-12 w-12 rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-lg  text-[#413A5A] dark:text-[#E6E0FA]">
                          Prmlrecords
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
