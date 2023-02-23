import { collection, products } from "@/utils/data";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { Container } from "@/components/Container";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { FiEdit } from "react-icons/fi";
import { Layout } from "../components/Layout";
import ProfileCards from "../components/ProfileCards";

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
        <div className="z-20 flex flex-col items-center lg:items-stretch lg:flex-row justify-between mt-10">
          <div className="w-full pb-5">
            <div className="my-5 ml-5 flex justify-between">
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
                  className="px-4 py-2 flex items-center border-2 rounded-md"
                >
                  <FiEdit /> <span className="px-2">Edit Profile</span>
                </button>
              </div>
            </div>
            <div
              className="w-full  z-20 dark:bg-[#1b1324] bg-[#fff] border dark:border-none shadow-sm rounded-xl sm:p-5
            dark:text-white text-[#413A5A] mb-5 font-medium "
            >
              <Tabs zIndex={200} className="z-20" id="profile-tabs">
                <TabList zIndex={200}>
                  <Tab className="text-xs md:text-md">Created</Tab>
                  <Tab className="text-xs md:text-md">Collected</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <ProfileCards products={products} />
                  </TabPanel>
                  <TabPanel>
                    <ProfileCards products={collection} />
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
