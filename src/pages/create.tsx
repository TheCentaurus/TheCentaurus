import Link from "next/link";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import { BsImage, BsImages } from "react-icons/bs";

export default function Create() {
  const router = useRouter();
  return (
    <Layout>
      <div className="z-20  text-white md:w-1/2 m-auto pt-10 lg:pt-32 font-normal px-10 md:px-15 lg:px-20 ">
        <div className="z-20 flex justify-between items-center ">
          {" "}
          <h1 className="z-20 font-bold text-xl lg:text-3xl border-l px-2">
            Create Collectible
          </h1>
          <p
            className="z-20 cursor-pointer underline"
            onClick={() => router.back()}
          >
            Go Back
          </p>
        </div>
        <p className="z-20 my-5 text-[#8175A7]">
          Switch between options of single and multiple to choose the count of
          your NFTs that has to be created and start creating your fortune
        </p>
        <p className="z-20 my-5 text-[#8175A7]">
          Choose “Single” if you want your collectible to be one of a kind or
          “Multiple” if you want to sell one collectible multiple times
        </p>
        <div className="z-20 grid grid-cols-2 gap-4 my-5 justify-between mt-10">
          <div
            onClick={() => router.push("/create-single")}
            className="z-20 flex flex-col items-center justify-center w-full cursor-pointer rounded-xl"
          >
            <BsImage className="z-20 text-[100px] m-auto" color="#f6d10b" />
            <Link href="/create-single">
              <p className="z-20 text-[#F6D10B] cursor-pointer mt-5 text-xl font-bold text-center">
                Single
              </p>
            </Link>
          </div>
          <div
            onClick={() => router.push("/create-multiple")}
            className="z-20 flex flex-col items-center justify-center w-full cursor-pointer rounded-xl"
          >
            <BsImages className="z-20 text-[100px]" color="#f6d10b" />
            <Link href="/create-single">
              <p className="z-20 text-[#F6D10B] cursor-pointer mt-5 text-xl font-bold text-center">
                Multiple
              </p>
            </Link>
          </div>
          <div className="z-20 col-span-2 text-[#8175a7]">
            <p>
              We do not own your private keys and cannot access your funds
              without your confirmation..
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
