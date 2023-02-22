import { collection, products } from "@/utils/data";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import ProfileCards from "@/components/ProfileCards";

function MyCollections() {
  return (
    <Layout>
      <Container>
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
                    <div className="rounded-xl p-2 border border-custom">
                      <img
                        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1671024284920/Ak-mF6Kjh.png?w=500&h=262&fit=crop&crop=entropy&auto=compress,format&format=webp"
                        className="rounded-xl h-[250px] w-full object-cover"
                        alt=""/>
                      <div className="p-4 w-full flex space-x-5 -mt-8">
                        <img
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          className="rounded-lg h-14 w-14 object-cover ring-2 ring-white dark:ring-dark shadow-lg shadow-black/20"
                          alt=""/>
                        <p className="text-darkest dark:text-white font-semibold text-sm md:text-base mt-7">
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
      </Container>
    </Layout>
  );
}

export default MyCollections;
