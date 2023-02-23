import { Layout } from "@/components/Layout";
import { useState } from "react";

const user = {
  name: "User Name",
  handle: "username",
  email: "user@example.com",
  imageUrl: "avatar.jpg",
};

export default function Example() {
  const [availableToHire, setAvailableToHire] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [allowCommenting, setAllowCommenting] = useState(true);
  const [allowMentions, setAllowMentions] = useState(true);

  return (
    <Layout>
      <main className="relative pt-32">
        <div className="mx-auto max-w-screen-md px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg dark:bg-[#1b1324] bg-[#fff] shadow">
            <div className="divide-y divide-gray-200  lg:divide-y-0 lg:divide-x">
              <form
                className="divide-y divide-gray-200 lg:col-span-9"
                action="#"
                method="POST"
              >
                {/* Profile section */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-lg font-medium leading-6 dark:text-white text-[#413A5A]">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm dark:text-white text-[#413A5A]">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="flex-grow space-y-6">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium dark:text-white text-[#413A5A]"
                        >
                          Username
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="z-20 w-full mt-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
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
                            id="about"
                            name="about"
                            rows={3}
                            className="z-20 w-full mt-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
                            defaultValue={""}
                          />
                        </div>
                        <p className="mt-2 text-sm dark:text-white text-[#413A5A]">
                          Brief description for your profile. URLs are
                          hyperlinked.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                      <p
                        className="text-sm font-medium dark:text-white text-[#413A5A]"
                        aria-hidden="true"
                      >
                        Photo
                      </p>
                      <div className="mt-1 lg:hidden">
                        <div className="flex items-center">
                          <div
                            className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                            aria-hidden="true"
                          >
                            <img
                              className="h-full w-full rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-5 rounded-md shadow-sm">
                            <div className="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                              <label
                                htmlFor="mobile-user-photo"
                                className="pointer-events-none relative text-sm font-medium leading-4 dark:text-white text-[#413A5A]"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                id="mobile-user-photo"
                                name="user-photo"
                                type="file"
                                className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative hidden overflow-hidden rounded-full lg:block">
                        <img
                          className="relative h-40 w-40 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="z-20 w-full mt-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="z-20 w-full mt-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
                      />
                    </div>

                    <div className="col-span-12">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        URL
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        className="z-20 w-full mt-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="z-20 w-full mt-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
                      />
                    </div>
                  </div>
                  <div className="py-6 ">
                    <button className=" float-right border bg-yellow-400 text-white px-4 py-2 rounded-md ">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
