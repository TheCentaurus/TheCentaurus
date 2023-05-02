import { Layout } from "@/components/Layout";
import { Spinner, useToast } from "@chakra-ui/react";
import { useUser } from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../slices/profile";

const storage = new ThirdwebStorage();

export default function Edit() {
  const toast = useToast();
  const { user, isLoggedIn } = useUser();
  const { isLoading } = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const [data, setData] = useState<any>({
    id: "",
    username: "",
    bio: "",
    avatar: "",
    banner: "",
    email: "",
    twitter: "",
    discord: "",
    links: "",
    walletAddress: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    //@ts-ignore
    dispatch(updateProfile(data))
      .unwrap()
      .then((res) => {
        toast({
          title: "Profile Updated.",
          description: "Your profile has been updated.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        console.log(res);
        location.href = "/profile";
      });
  };

  const uploadBanner = async (e: any) => {
    const file = e.target.files[0];
    const url = await storage.upload(file);
    setData({ ...data, banner: url });
  };

  const uploadAvatar = async (e: any) => {
    const file = e.target.files[0];
    const url = await storage.upload(file);
    setData({ ...data, avatar: url });
  };

  useEffect(() => {
    if (isLoggedIn) {
      //@ts-ignore
      dispatch(getProfile(user?.data?.id))
        .unwrap()
        .then((res) => {
          toast({
            title: "Profile Loaded.",
            description: "Your profile has been loaded.",
            status: "info",
            duration: 2000,
            isClosable: true,
          });
          setData(res);
        });
    }
  }, [isLoggedIn]);

  return (
    <Layout>
      <main className="relative pt-32">
        <div className="max-w-screen-md px-4 pb-6 mx-auto sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg dark:bg-[#1b1324] bg-[#fff] shadow">
            <div className="divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
              <div className="divide-y divide-gray-200 lg:col-span-9">
                {/* Profile section */}
                <div className="px-4 py-6 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-lg font-medium leading-6 dark:text-white text-[#413A5A]">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm dark:text-white text-[#413A5A]">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>

                  <div className="flex flex-col mt-6 lg:flex-row">
                    <div className="flex-grow space-y-6">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium dark:text-white text-[#413A5A]"
                        >
                          Username
                        </label>
                        <div className="flex mt-1 rounded-md shadow-sm">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            value={data?.username}
                            onChange={(e) => handleChange(e)}
                            className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium dark:text-white text-[#413A5A]"
                        >
                          About
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="bio"
                            value={data?.bio}
                            onChange={(e) => handleChange(e)}
                            name="bio"
                            rows={3}
                            className="block p-2 dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                            defaultValue={""}
                          />
                        </div>
                        <p className="mt-2 text-sm dark:text-white text-[#413A5A]">
                          Brief description for your profile. URLs are
                          hyperlinked.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6 mt-6">
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="twitter"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Avatar
                      </label>
                      <input
                        onChange={(e) => uploadAvatar(e)}
                        type="file"
                        name="avatar"
                        id="avatar"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="twitter"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Banner
                      </label>
                      <input
                        onChange={(e) => uploadBanner(e)}
                        type="file"
                        name="banner"
                        id="banner"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6 mt-6">
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="twitter"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Twitter
                      </label>
                      <input
                        value={data?.twitter}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="twitter"
                        id="twitter"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="discord"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Discord
                      </label>
                      <input
                        value={data?.discord}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="discord"
                        id="discord"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="links"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Website Url
                      </label>
                      <input
                        value={data?.links}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="links"
                        id="links"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Email
                      </label>
                      <input
                        value={data?.email}
                        onChange={(e) => handleChange(e)}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>
                    <div className="col-span-12">
                      <label
                        htmlFor="walletAddress"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Wallet Address
                      </label>
                      <input
                        value={data?.walletAddress}
                        readOnly
                        type="text"
                        name="walletAddress"
                        id="walletAddress"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>
                  </div>
                  <div className="py-6 ">
                    <button
                      onClick={() => handleSubmit()}
                      className="float-right px-4 py-2 text-white bg-yellow-400 rounded-md "
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div>
                            <Spinner size={"sm"} />
                          </div>
                        </div>
                      ) : (
                        "Save Profile"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
