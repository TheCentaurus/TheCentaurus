import Link from "next/link";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import { BsImage, BsImages } from "react-icons/bs";

export default function Create() {
  const router = useRouter();
  return (
    <Layout>
      <div className=" text-white md:w-1/2 m-auto lg:mt-32 font-normal">
        <div className="flex justify-between ">
          {" "}
          <h1 className="font-bold text-xl lg:text-3xl border-l px-2">
            Create Collectible
          </h1>
          <p className="cursor-pointer underline" onClick={() => router.back()}>
            Go Back
          </p>
        </div>
        <p className="my-5 text-[#8175A7]">
          Switch between options of single and multiple to choose the count of
          your NFTs that has to be created and start creating your fortune
        </p>
        <p className="my-5 text-[#8175A7]">
          Choose “Single” if you want your collectible to be one of a kind or
          “Multiple” if you want to sell one collectible multiple times
        </p>
        <div className="grid grid-cols-2 gap-4 my-5 justify-between mt-10">
          <div
            onClick={() => router.push("/create-single")}
            className="flex flex-col items-center justify-center w-1/2 cursor-pointer rounded-xl"
          >
            <BsImage className="text-[100px]" color="#f6d10b" />
            <Link href="/create-single">
              <p className="text-[#F6D10B] cursor-pointer mt-5 text-xl font-bold">
                Single
              </p>
            </Link>
          </div>
          <div
            onClick={() => router.push("/create-multiple")}
            className="flex flex-col items-center justify-center w-1/2 cursor-pointer rounded-xl"
          >
            <BsImages className="text-[100px]" color="#f6d10b" />
            <Link href="/create-single">
              <p className="text-[#F6D10B] cursor-pointer mt-5 text-xl font-bold">
                Multiple
              </p>
            </Link>
          </div>
          <div className="col-span-2 text-[#8175a7]">
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
