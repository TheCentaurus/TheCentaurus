import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../components/Layout";
function Profile() {
  const [value, setValue] = React.useState("1");
  // make a preview of the image
  const [image, setImage] = React.useState("");
  const [imagePreview, setImagePreview] = React.useState("");
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // @ts-ignore
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
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
  const collection = [
    {
      id: 2,
      name: "Strange Rock (Tokyo)",
      url: "The Centaurus ",
      imageSrc: "/images/rock.png",
      price: "5.0",
      followers: "5",
    },
    {
      id: 3,
      name: "Buffaosoldier01 / 5 of 5",
      url: "The Centaurus ",
      imageSrc: "/images/buffalosoldier01.jpeg",
      price: "5.0",
      followers: "9",
    },
    {
      id: 4,
      name: "SCOTIA",
      url: "The Centaurus ",
      imageSrc: "/images/SCOTIA.png",
      price: "5.0",
      followers: "5",
    },

    {
      id: 8,
      name: "Nature Cloud",
      url: "The Centaurus ",
      imageSrc: "/images/cloud.jpeg",
      price: "5.0",
      followers: "8",
    },
  ];
  const liked = [
    {
      id: 1,
      name: "The Centaurus Elite",
      url: "The Centaurus ",
      imageSrc: "/images/1.png",
      price: "5.0",
      followers: "8",
    },
    {
      id: 2,
      name: "Strange Rock (Tokyo)",
      url: "The Centaurus ",
      imageSrc: "/images/rock.png",
      price: "5.0",
      followers: "8",
    },
    {
      id: 3,
      name: "Buffaosoldier01 / 5 of 5",
      url: "The Centaurus ",
      imageSrc: "/images/buffalosoldier01.jpeg",
      price: "5.0",
      followers: "8",
    },
    {
      id: 4,
      name: "SCOTIA",
      url: "The Centaurus ",
      imageSrc: "/images/SCOTIA.png",
      price: "5.0",
    },
  ];
  const onSale = [
    {
      id: 3,
      name: "Buffaosoldier01 / 5 of 5",
      url: "The Centaurus ",
      imageSrc: "/images/buffalosoldier01.jpeg",
      price: "5.0",
      followers: "8",
    },
    {
      id: 4,
      name: "Buffaosoldier01 / 5 of 5",
      url: "The Centaurus ",
      imageSrc: "/images/buffalosoldier01.jpeg",
      price: "5.0",
      followers: "8",
    },
    {
      id: 4,
      name: "SCOTIA",
      url: "The Centaurus ",
      imageSrc: "/images/SCOTIA.png",
      price: "5.0",
      followers: "20",
    },

    {
      id: 7,
      name: "Strange Rock (BERLIN)",
      url: "The Centaurus ",
      imageSrc: "/images/rock2.jpeg",
      price: "5.0",
      followers: "3",
    },
    {
      id: 8,
      name: "Nature Cloud",
      url: "The Centaurus ",
      imageSrc: "/images/cloud.jpeg",
      price: "5.0",
      followers: "8",
    },
  ];
  const router = useRouter();
  return (
    <Layout>
      <div className="z-20 md:px-15 lg:px-20 pt-10 lg:pt-32">
        <h1 className="z-20 font-bold text-xl lg:text-5xl ml-5 dark:text-white text-black px-2">
          Activity
        </h1>
        <div className="z-20 flex flex-col items-center lg:items-stretch lg:flex-row justify-between mt-10">
          <div className="w-full p-5">
            <div
              className="w-full  z-20 dark:bg-[#1b1324] bg-[#fff] border dark:border-none shadow-sm rounded-xl p-5
            dark:text-white text-[#413A5A] mb-5 font-medium "
            >
              <Tabs zIndex={200} className="z-20">
                <TabList zIndex={200} className="overflow-x-scroll">
                  <Tab className="text-xs md:text-lg">Minted</Tab>
                  <Tab className="text-xs md:text-lg">Bids</Tab>
                  <Tab className="text-xs md:text-lg">Liked</Tab>
                  <Tab className="text-xs md:text-lg">Followings</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    {collection.map((product, index) => (
                      <div
                        key={index}
                        className="w-full rounded-2xl bg-white mb-3 border dark:bg-[#2d203c] dark:border-none p-5 grid grid-cols-2"
                      >
                        <div className="flex items-center">
                          <img
                            onClick={() => router.push("/profile")}
                            src={product.imageSrc}
                            className="h-32 w-32 object-cover rounded-2xl mr-5 cursor-pointer"
                            alt=""
                          />
                          <div>
                            <p className=" font-semibold text-lg dark:text-white ">
                              {product.name}
                            </p>
                            <p className="text-sm font-medium my-2 dark:text-white">
                              Minted by @Shaker Sangam
                            </p>
                            <p className="text-sm font-medium dark:text-white">
                              2 months ago
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {collection.map((product, index) => (
                      <div
                        key={index}
                        className="w-full rounded-2xl bg-white mb-3 border dark:bg-[#2d203c] dark:border-none p-5 grid grid-cols-2"
                      >
                        <div className="flex items-center">
                          <img
                            onClick={() => router.push("/profile")}
                            src={product.imageSrc}
                            className="h-32 w-32 object-cover rounded-2xl mr-5 cursor-pointer"
                            alt=""
                          />
                          <div>
                            <p className=" font-semibold text-lg dark:text-white ">
                              {product.name}
                            </p>
                            <p className="text-sm font-medium my-2 dark:text-white">
                              Bid by @Shaker Sangam
                            </p>
                            <p className="text-sm font-medium dark:text-white">
                              2 months ago
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {collection.map((product, index) => (
                      <div
                        key={index}
                        className="w-full rounded-2xl bg-white mb-3 border dark:bg-[#2d203c] dark:border-none p-5 grid grid-cols-2"
                      >
                        <div className="flex items-center">
                          <img
                            onClick={() => router.push("/profile")}
                            src={product.imageSrc}
                            className="h-32 w-32 object-cover rounded-2xl mr-5 cursor-pointer"
                            alt=""
                          />
                          <div>
                            <p className=" font-semibold text-lg dark:text-white ">
                              {product.name}
                            </p>
                            <p className="text-sm font-medium my-2 dark:text-white">
                              liked by @Shaker Sangam
                            </p>
                            <p className="text-sm font-medium dark:text-white">
                              2 months ago
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {collection.map((product, index) => (
                      <div
                        key={index}
                        className="w-full rounded-2xl bg-white mb-3 border dark:bg-[#2d203c] dark:border-none p-5 grid grid-cols-2"
                      >
                        <div className="flex items-center">
                          <img
                            onClick={() => router.push("/profile")}
                            src={product.imageSrc}
                            className="h-32 w-32 object-cover rounded-2xl mr-5 cursor-pointer"
                            alt=""
                          />
                          <div>
                            <p className=" font-semibold text-lg dark:text-white ">
                              {product.name}
                            </p>
                            <p className="text-sm font-medium my-2 dark:text-white">
                              followed by @Shaker Sangam
                            </p>
                            <p className="text-sm font-medium dark:text-white">
                              2 months ago
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
