import React from "react";

function ProfileCards({ products }) {
  return (
    <div className="z-20 grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="z-20 dark:bg-[#2A243D] bg-[#ffffff] border dark:border-none shadow-sm rounded-xl cursor-pointer"
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
  );
}

export default ProfileCards;
