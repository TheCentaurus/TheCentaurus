import router from "next/router";

const Logo = () => {
  return (
    <>
      <div className=" py-2 cursor-pointer md:hidden md:py-0">
        <img
          onClick={() => router.push("/")}
          src="logo.svg"
          alt=""
          className=" inline-block  "
        />
      </div>
      <div className="items-center hidden cursor-pointer md:flex">
        <img
          onClick={() => router.push("/")}
          src="logo.svg"
          alt="logo"
          className="-mt-2 inline-block w-50"
        />
      </div>
    </>
  );
};

export default Logo;
