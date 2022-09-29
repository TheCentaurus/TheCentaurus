import * as React from "react";
import logo from "../assets/logo.svg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Connect } from "../components";

export default function ConnectPage() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div className="bg-cover min-h-[100vh] bg-center dark:text-white text-[#413A5A] ">
      <div className="flex flex-col sm:grid sm:gap-4 sm:grid-cols-6 ">
        <div
          className="hidden h-screen sm:col-span-1 sm:block "
          style={{
            backgroundImage: "url(/art.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        ></div>
        <div className="min-h-screen sm:col-span-5 ">
          <div className="flex items-center justify-center align-middle sm:hidden">
            <a href="/" className="p-2 m-2">
              <img src={logo.src} alt="logo" className="img-responsive" />
            </a>
          </div>
          <div className="items-end justify-end hidden mx-8 align-middle sm:flex ">
            <a href="/" className="p-2 m-2">
              <img src={logo.src} alt="logo" className="img-responsive" />
            </a>
          </div>
          <div className="w-full px-4 mx-0 mt-32 sm:mt-64 sm:mx-16 sm:w-1/3">
            <div className="mb-8">
              <h1 className="mb-2 text-4xl dark:text-[#8175A7] text-[#413A5A]">
                Connect Wallet
              </h1>
              <p className="dark:text-[#8175A7] text-[#413A5A]">
                Choose how you want to connect. There are several wallet
                providers.
              </p>
            </div>
            <Tabs>
              <TabList>
                <Tab>
                  <h1 className="dark:text-[#8175A7] text-[#413A5A]">
                    Ethereum
                  </h1>
                </Tab>
                <Tab>
                  <h1 className="dark:text-[#8175A7] text-[#413A5A]">BSC</h1>
                </Tab>
                <Tab>
                  {" "}
                  <h1 className="dark:text-[#8175A7] text-[#413A5A]">Solana</h1>
                </Tab>

                <Tab>
                  <h1 className="dark:text-[#8175A7] text-[#413A5A]">
                    Polygon
                  </h1>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div>
                    <Connect />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    {" "}
                    <Connect />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    <button
                      disabled
                      className="flex items-center w-full p-3 m-2 align-middle border border-[#8175A7] rounded-xl "
                    >
                      <span className="px-1">
                        <img
                          src="/phantom.png"
                          alt="metamask"
                          className="w-6 h-6 mr-1 img-responsive"
                        />
                      </span>{" "}
                      Phantom
                    </button>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div>
                    <Connect />
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
