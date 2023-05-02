import router from "next/router";

const Logo = () => {
  return (
    <>
      <div className="items-center py-2 cursor-pointer lg:hidden lg:py-0">
        <img
          onClick={() => router.push("/")}
          src="logo.svg"
          alt=""
          className="object-contain h-16 ml-5 lg:w-full"
        />
      </div>
      <div className="items-center hidden cursor-pointer md:flex">
        <img
          onClick={() => router.push("/")}
          src="logo.svg"
          alt="logo"
          className="-mt-2 w-50"
        />
      </div>
    </>
  );
};

export default Logo;
