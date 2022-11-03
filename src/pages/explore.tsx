import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
const products = [
  {
    id: 1,
    name: "The Centaurus Elite",
    url: "The Centaurus ",
    imageSrc: "/images/1.png",
    price: "5.0",
  },
  {
    id: 2,
    name: "Strange Rock (Tokyo)",
    url: "The Centaurus ",
    imageSrc: "/images/rock.png",
    price: "5.0",
  },
  {
    id: 3,
    name: "Buffaosoldier01 / 5 of 5",
    url: "The Centaurus ",
    imageSrc: "/images/buffalosoldier01.jpeg",
    price: "5.0",
  },
  {
    id: 4,
    name: "SCOTIA",
    url: "The Centaurus ",
    imageSrc: "/images/SCOTIA.png",
    price: "5.0",
  },
  {
    id: 5,
    name: "Bonanza-Black",
    url: "The Centaurus ",
    imageSrc: "/images/Bonanza-Black.jpeg",
    price: "5.0",
  },
  {
    id: 6,
    name: "Bitcoin / 1000 of 1000",
    url: "The Centaurus ",
    imageSrc: "/images/bitcoin.gif",
    price: "5.0",
  },
  {
    id: 7,
    name: "Strange Rock (BERLIN)",
    url: "The Centaurus ",
    imageSrc: "/images/rock2.jpeg",
    price: "5.0",
  },
  {
    id: 8,
    name: "Nature Cloud",
    url: "The Centaurus ",
    imageSrc: "/images/cloud.jpeg",
    price: "5.0",
  },
];

export default function Explore() {
  const router = useRouter();
  return (
    <Layout>
      <div className="z-20 px-6 md:px-15 lg:px-20 pt-10 lg:pt-32 pb-16">
        <div className="z-20 max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="z-20 text-2xl font-bold dark:text-[#E6E0FA] text-[#413A5A] sm:text-4xl">
            Explore Exclusive Digital Assets
          </h2>

          <div className="dark:bg-[#2A243D] bg-[#fff] border dark:border-none h-16 mt-12 rounded-xl w-full flex items-center p-2">
            <div className="z-20 flex items-center justify-around w-full md:w-5/12 lg:w-5/12 md:justify-between">
              <form className="z-20 w-full">
                <label className="z-20 mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                  Search
                </label>
                <div className="z-20 relative">
                  <div className="z-20 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="z-20 w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="z-20 block p-3 pl-10 w-full md:w-auto text-sm text-gray-50 bg-[#f1f1f1] dark:bg-[#221C30] placeholder:text-[#8175A7] rounded-lg border-none  border-[#8175A7] "
                    placeholder="Search "
                    required
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="z-20 grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="z-20 dark:bg-[#2A243D] bg-[#fff] border dark:border-none shadow-sm rounded-xl cursor-pointer"
                onClick={() =>
                  router.push(
                    {
                      pathname: "/collections",
                      query: product,
                    },
                    "/collections"
                  )
                }
              >
                <div className="z-20 relative">
                  <div className="z-20 relative w-full overflow-hidden rounded-xl h-72">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="z-20 object-contain object-cover w-full h-full"
                    />
                  </div>
                  <div className="z-20 relative mx-4 mt-4">
                    <h3 className="z-20 text-xl font-semibold dark:text-[#E6E0FA] text-[#413A5A]">
                      {product.name}
                    </h3>
                    <div className="flex items-center my-4 align-center">
                      <div>
                        <img
                          src={product.imageSrc}
                          alt={product.name}
                          className="z-20 object-contain object-center w-8 h-8 bg-white rounded-lg"
                        />
                      </div>
                      <p className="z-20 mt-1 ml-2 text-xs font-light tracking-widest dark:text-white text-[#413A5A] uppercase">
                        @{product.url}
                      </p>
                    </div>
                  </div>
                  <div className="z-20 absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72">
                    <div
                      aria-hidden="true"
                      className="z-20 absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black "
                    />
                    <span className="flex items-center align-center dark:bg-[#2A243D] bg-[#fff] p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#ffffff"
                        className="z-20 w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>

                      <p className="z-20 relative text-sm font-semibold dark:text-[#E6E0FA] text-[#413A5A] ml-2">
                        2
                      </p>
                    </span>
                  </div>
                </div>
                <div className="z-20 mx-4 my-6">
                  <h1 className="dark:text-[#E6E0FA] text-[#413A5A]">
                    Reserve Price
                  </h1>
                  <p className="dark:text-white text-[#413A5A]">
                    {product.price} WBNB
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
