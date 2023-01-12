import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import ProfileCards from "@/components/ProfileCards";
import { collection, products } from "@/utils/data";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

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
      </Container>
    </Layout>
  );
}

export default MyCollections;
