import Link from "next/link";
import { useRouter } from "next/router";
import { BsImage, BsImages } from "react-icons/bs";
import { Layout } from "../components/Layout";
import { useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";
import postServices from '../api/post-services'
export default function Create() {
  const address = useAddress();
  const router = useRouter();
  useEffect(() =>{
    
    postServices.registerUser(address).then(
            
      (response) => {
        
       
        console.log(response.data)
        
      },
      (error) => {
         
      }
    )
  },[])
  return (
    <Layout>
      <div className="py-10 md:py-32">
        <div className="z-20 text-[#413A5A] bg-white dark:bg-transparent rounded-2xl py-10 dark:text-white md:w-1/2 m-auto  font-normal px-10 md:px-15 lg:px-20 ">
          <div className="z-20 flex items-center justify-between ">
            {" "}
            <h1 className="z-20 px-2 text-xl font-bold border-l lg:text-3xl">
              Create Collectible 
            </h1>
            <p
              className="z-20 underline cursor-pointer"
              onClick={() => router.back()}
            >
              Go Back
            </p>
          </div>
          <p className="z-20 my-5 dark:text-[#8175A7] text-[#413A5A]">
            Switch between options of single and multiple to choose the count of
            your NFTs that has to be created and start creating your fortune
          </p>
          <p className="z-20 my-5 dark:text-[#8175A7] text-[#413A5A]">
            Choose “Single” if you want your collectible to be one of a kind or
            “Multiple” if you want to sell one collectible multiple times
          </p>
          <div className="z-20 grid justify-between grid-cols-2 gap-4 my-5 mt-10">
            <div
              onClick={() => router.push("/create-single")}
              className="z-20 flex flex-col items-center justify-center w-full transition duration-300 ease-in-out cursor-pointer dark:bg-transparent rounded-xl hover:scale-75"
            >
              <BsImage className="z-20 text-[100px] m-auto" color="#f6d10b" />
              <Link href="/create-single">
                <p className="z-20 dark:text-[#F6D10B] cursor-pointer mt-5 text-xl font-bold text-center">
                  Single
                </p>
              </Link>
            </div>
            <div
              onClick={() => router.push("/create-collection")}
              className="z-20 flex flex-col items-center justify-center w-full transition duration-300 ease-in-out cursor-pointer rounded-xl hover:scale-75"
            >
              <BsImages className="z-20 text-[100px]" color="#f6d10b" />
              <Link href="/create-single">
                <p className="z-20 dark:text-[#F6D10B] cursor-pointer mt-5 text-xl font-bold text-center">
                 Collection
                </p>
              </Link>
            </div>
            <div className="z-20 col-span-2 dark:text-[#8175A7] text-[#413A5A]">
              <p>
                We do not own your private keys and cannot access your funds
                without your confirmation..
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
