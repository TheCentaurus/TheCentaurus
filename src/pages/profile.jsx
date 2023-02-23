import { Container } from "@/components/Container";
import { collection, products } from "@/utils/data";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { FiEdit } from "react-icons/fi";
import { Layout } from "../components/Layout";

import ProfileCards from "@/components/ProfileCards";

function Profile() {
  const address = useAddress();
  const router = useRouter();
  return (
    <Layout>
      <div className="lg:pt-7 xl:pt-[7.1rem]">
        <div className="relative">
          <img
            src="/profile-bg.jpg"
            className="h-[150px] sm:h-[200px] xl:h-[320px] w-full object-cover"
            alt=""
          />

          <Container>
            <img
              src="/avatar.jpg"
              className="rounded-full h-[80px] w-[80px] md:h-[100px] md:w-[100px] xl:h-[180px] xl:w-[180px] object-cover -mt-16 md:-mt-20 xl:-mt-36 ring-4 lg:ring-[6px] ring-[#f0fbef] dark:ring-secondary absolute"
              alt=""
            />
          </Container>
        </div>
      </div>
      <Container>
        <div className="z-20 flex flex-col items-center justify-between mt-10 lg:items-stretch lg:flex-row">
          <div className="w-full pb-5">
            <div className="flex justify-between my-5 ml-5">
              <div>
                <h1 className="font-semibold text-2xl text-[#413A5A] dark:text-white">
                  John Doe
                </h1>
                <div className="flex space-x-5">
                  <h3 className="font-medium text-sm text-[#413A5A] dark:text-white">
                    {address
                      ? `${address?.substring(0, 5)}...${address?.substring(
                          address?.length - 5
                        )}`
                      : `You're not logged in`}
                  </h3>
                  {address && (
                    <h3 className="font-medium text-sm text-[#413A5A] dark:text-white">
                      Joined January 2023
                    </h3>
                  )}
                </div>
              </div>
              <div className="flex space-x-5">
                <button
                  onClick={() =>
                    router.push({
                      pathname: "/edit-profile",
                      query: { address: address },
                    })
                  }
                  className="px-4 py-2 flex items-center border-2 rounded-md dark:bg-[#1b1324] bg-[#fff] dark:text-white text-black"
                >
                  <FiEdit /> <span className="px-2">Edit Profile</span>
                </button>
              </div>
            </div>

            <div className="z-20 lg:pt-7 xl:pt-[7.1rem] pb-16">
              <h2 className="z-20 text-2xl font-bold dark:text-[#E6E0FA] text-[#413A5A] sm:text-4xl">
                My Collections
              </h2>
              <Tabs zIndex={200} className="z-20" id="profile-tabs">
                <TabList
                  zIndex={200}
                  className="dark:bg-[#2A243D] bg-[#fff] border dark:border-none h-16 mt-12 rounded-xl w-full flex items-center p-2"
                >
                  <Tab className="text-xs md:text-md dark:text-[#E6E0FA] text-[#413A5A]">
                    Created
                  </Tab>
                  <Tab className="text-xs md:text-md dark:text-[#E6E0FA] text-[#413A5A]">
                    Collected
                  </Tab>
                  <Tab className="text-xs md:text-md dark:text-[#E6E0FA] text-[#413A5A]">
                    Listings
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <ProfileCards products={products} />
                  </TabPanel>
                  <TabPanel>
                    <ProfileCards products={collection} />
                  </TabPanel>
                  <TabPanel>
                    <div className="grid grid-cols-4">
                      <div>
                        <div className="p-2 border rounded-xl border-custom">
                          <img
                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1671024284920/Ak-mF6Kjh.png?w=500&h=262&fit=crop&crop=entropy&auto=compress,format&format=webp"
                            className="rounded-xl h-[250px] w-full object-cover"
                            alt=""
                          />
                          <div className="flex w-full p-4 -mt-8 space-x-5">
                            <img
                              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                              className="object-cover rounded-lg shadow-lg h-14 w-14 ring-2 ring-white dark:ring-dark shadow-black/20"
                              alt=""
                            />
                            <p className="text-sm font-semibold text-darkest dark:text-white md:text-base mt-7">
                              Detail
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Profile;
