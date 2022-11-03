import React from "react";
import { BsImage } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Layout } from "../components/Layout";
import { FormControl, FormLabel, Stack, Switch } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ProfileCards from "../components/ProfileCards";
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
      id: 8,
      name: "Nature Cloud",
      url: "The Centaurus ",
      imageSrc: "/images/cloud.jpeg",
      price: "5.0",
    },
  ];
  const liked = [
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
  ];
  const onSale = [
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
  return (
    <Layout>
      <div className="z-20 px-8 md:px-15 lg:px-20 pt-10 lg:pt-32">
        {/* make banner for profile page
        

        */}
        <div className="z-20 flex flex-col items-center lg:items-stretch lg:flex-row justify-between mt-10">
          <div className="z-20 w-full  dark:bg-[#1b1324] bg-[#fff] border dark:border-none h-44 lg:h-auto rounded-xl p-5 font-medium dark:text-[#8175a7] text-[#413A5A] mb-5">
            <BsImage className="z-20 m-auto text-yellow-300 text-[100px]" />
          </div>
        </div>

        <div className="z-20 flex flex-col items-center lg:items-stretch lg:flex-row justify-between mt-10">
          <div className="z-20 w-full pt-10 lg:pt-0 h-fit lg:w-fit lg:h-fit dark:bg-[#1b1324] bg-[#fff] rounded-xl lg:ml-5  lg:-mt-16 font-medium dark:text-[#8175a7] text-[#413A5A] mb-5">
            <img
              src="user.png"
              className="z-20 lg:h-44 h-52 object-cover rounded-xl m-auto"
              alt=""
            />
            <p className="z-20 lg:ml-2 text-sm my-3 mx-7">0xa929c6b...0ce7</p>
            <hr className="z-20 lg:mx-2 my-3 mx-7" />
            <p className="z-20 lg:ml-2 mb-2 mx-7">0 followers</p>
          </div>
          <div className="w-full p-5">
            <div
              className="w-full  z-20 dark:bg-[#1b1324] bg-[#fff] border dark:border-none shadow-sm rounded-xl p-5
            dark:text-white text-[#413A5A] mb-5 font-medium"
            >
              <Tabs zIndex={200} className="z-20">
                <TabList zIndex={200}>
                  <Tab>On Sale</Tab>
                  <Tab>Created</Tab>
                  <Tab>Collectibles</Tab>
                  <Tab>Liked</Tab>
                  <Tab>Activity</Tab>
                  <Tab>Following</Tab>
                  <Tab>Followers</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <ProfileCards products={onSale} />
                  </TabPanel>
                  <TabPanel>
                    <ProfileCards products={products} />
                  </TabPanel>
                  <TabPanel>
                    <ProfileCards products={collection} />
                  </TabPanel>
                  <TabPanel>
                    <ProfileCards products={onSale} />
                  </TabPanel>
                  <TabPanel>
                    <ProfileCards products={collection} />
                  </TabPanel>
                  <TabPanel>
                    {products.map((product, index) => (
                      <div
                        key={index}
                        className="w-full rounded-2xl bg-white mb-3 border dark:bg-[#2d203c] dark:border-none p-5 grid grid-cols-2"
                      >
                        <div className="flex items-center">
                          <img
                            src={product.imageSrc}
                            className="h-10 w-10 object-cover rounded-full mr-5"
                            alt=""
                          />
                          <div>
                            <p className="text-sm font-medium dark:text-white">
                              {product.url}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-end">
                          <button className="bg-[#F5F5F5] dark:bg-[#18111f] dark:text-white text-[#413A5A] px-5 py-2 rounded-xl font-medium">
                            Unfollow
                          </button>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {onSale.map((product, index) => (
                      <div
                        key={index}
                        className="w-full rounded-2xl bg-white mb-3 border dark:bg-[#2d203c] dark:border-none p-5 grid grid-cols-2"
                      >
                        <div className="flex items-center">
                          <img
                            src={product.imageSrc}
                            className="h-10 w-10 object-cover rounded-full mr-5"
                            alt=""
                          />
                          <div>
                            <p className="text-sm font-medium dark:text-white">
                              {product.url}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-end">
                          <button className="bg-[#F5F5F5] dark:bg-[#18111f] dark:text-white text-[#413A5A] px-5 py-2 rounded-xl font-medium">
                            Unfollow
                          </button>
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
