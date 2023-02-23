import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Layout } from "../components/Layout";

const mailingLists = [
  {
    id: 1,
    title: "Unlockable Content",
    description: "Last message sent an hour ago",
  },
  {
    id: 2,
    title: "Explicit & Sensitive Content",
    description: "Last message sent 2 weeks ago",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateSingle() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  );
  return (
    <Layout>
      <div className="flex justify-center ">
        <div className="z-20 max-w-screen-lg px-8 pt-10 my-16 md:px-15 lg:px-20 lg:pt-32">
          <div className="py-2">
            <h1 className="text-3xl font-bold text-yellow-300">
              Create New Item
            </h1>
          </div>
          <p className="py-2 text-black dark:text-white">
            <span className="text-red-500"> *</span> Required fields
          </p>
          <form className="space-y-6" action="#" method="POST">
            <div className="px-4 py-5 dark:bg-[#1b1324] bg-[#fff]  shadow sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Image, Video,Audio, or 3D Model *
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    File types supported: .png, .jpg, .jpeg, .gif, .mp4, .mp3,
                    .wav, .webm, .glb, .gltf, .obj, .fbx, .stl, .usdz, .glb,
                    .gltf, .obj, .fbx, .stl, .usdz. Max size: 100MB
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div>
                    <div className="flex justify-center w-full px-6 pt-5 pb-6 mt-1 border-2 dark:bg-[#1b1324] bg-[#fff] border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="w-12 h-12 mx-auto text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative font-medium text-yellow-400 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 hover:text-yellow-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-5 dark:bg-[#1b1324] bg-[#fff] shadow sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Information
                  </h3>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full mt-1 dark:bg-[#1b1324] bg-[#fff] rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        External Link (optional)
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full mt-1 dark:bg-[#1b1324] bg-[#fff] rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="block w-full mt-1 dark:bg-[#1b1324] bg-[#fff] rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Collection
                      </label>
                      <p className="text-sm text-gray-400 dark:text-white">
                        This is where your item will appear
                      </p>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full px-3 py-2 mt-1  border dark:bg-[#1b1324] bg-[#fff] rounded-md shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm text-gray-900 dark:text-white"
                      >
                        <option>Select collection</option>
                        <option>Collection Name</option>
                        <option>Collection Name</option>
                        <option>Collection Name</option>
                        <option>Collection Name</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Supply
                      </label>
                      <input
                        type="number"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full mt-1 dark:bg-[#1b1324] bg-[#fff] rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Blockchain
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full px-3 py-2 mt-1 text-gray-900 dark:text-white border dark:bg-[#1b1324] bg-[#fff] rounded-md shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                      >
                        <option>Ethereum</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1"></div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <RadioGroup
                    value={selectedMailingLists}
                    onChange={setSelectedMailingLists}
                  >
                    <div className="grid grid-cols-2 mt-4 gap-y-6 sm:gap-x-4">
                      {mailingLists.map((mailingList) => (
                        <RadioGroup.Option
                          key={mailingList.id}
                          value={mailingList}
                          className={({ checked, active }) =>
                            classNames(
                              checked ? "border-transparent" : " bg-[#fff]",
                              active
                                ? "border-yellow-500 ring-2 ring-yellow-500"
                                : "",
                              "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                            )
                          }
                        >
                          {({ checked, active }) => (
                            <>
                              <span className="flex flex-1">
                                <span className="flex flex-col">
                                  <RadioGroup.Label
                                    as="span"
                                    className="block text-sm font-medium text-gray-900"
                                  >
                                    {mailingList.title}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className="flex items-center mt-1 text-sm text-gray-500"
                                  >
                                    {mailingList.description}
                                  </RadioGroup.Description>
                                </span>
                              </span>
                              <CheckCircleIcon
                                className={classNames(
                                  !checked ? "invisible" : "",
                                  "h-5 w-5 text-yellow-400"
                                )}
                                aria-hidden="true"
                              />
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-yellow-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-lg"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
