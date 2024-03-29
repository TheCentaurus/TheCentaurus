import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Layout } from "../components/Layout";

const options = [
  {
    id: 1,
    title: "Fixed price",
    description: "The item is listed at the price you set",
  },
  {
    id: 2,
    title: "Timed Auction",
    description: "The item is listed for auction",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateListing() {
  const [selectedOptions, setSelectedOptions] = useState(options[0]);
  return (
    <Layout>
      <div className="flex justify-center ">
        <div className="z-20 max-w-screen-lg px-8 pt-10 my-16 md:px-15 lg:px-20 lg:pt-32">
          <div className="py-2">
            <h1 className="text-3xl font-bold text-yellow-300">
              Create a Listing
            </h1>
          </div>

          <form className="space-y-6" action="#" method="POST">
            <div className="px-4 py-5 bg-white dark:bg-[#1B1324] dark:text-white shadow sm:rounded-lg sm:p-6">
              <p className="py-2 dark:text-[#8175A7] text-[#413A5A]">
                <span className="text-red-500"> *</span> Required fields
              </p>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-medium leading-6 dark:text-[#] dark:text-[#8175A7] text-[#413A5A]">
                    Choose a type of Sale
                  </h3>

                  <RadioGroup
                    value={selectedOptions}
                    onChange={setSelectedOptions}
                  >
                    <div className="mt-4 space-y-4">
                      {options.map((option) => (
                        <RadioGroup.Option
                          key={option.id}
                          value={option}
                          className={({ checked, active }) =>
                            classNames(
                              checked
                                ? "border-transparent"
                                : "border-gray-300",
                              active
                                ? "border-yellow-500 ring-2 ring-yellow-500"
                                : "",
                              "relative flex cursor-pointer rounded-lg border bg-white dark:bg-[#2A243D] p-4 shadow-sm focus:outline-none"
                            )
                          }
                        >
                          {({ checked, active }) => (
                            <>
                              <span className="flex flex-1">
                                <span className="flex flex-col">
                                  <RadioGroup.Label
                                    as="span"
                                    className="block text-sm font-medium dark:text-[#8175A7] text-[#413A5A]"
                                  >
                                    {option.title}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className="flex items-center mt-1 text-sm text-gray-500"
                                  >
                                    {option.description}
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
                <div className="mb-4 md:col-span-1">
                  <div>
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
                </div>
              </div>
              <div className="mb-4 md:grid md:grid-cols-3 md:gap-6 lg:-mt-24">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-medium leading-6 dark:text-[#8175A7] text-[#413A5A]">
                    Set a Price
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This image will appear top of your collection page. 1400 x
                    350 recommended.
                  </p>

                  <input
                    type="number"
                    name="set-price"
                    id="set-price"
                    autoComplete="set-price"
                    className="block w-full mt-1 border-gray-300 dark:bg-[#2A243D] rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mb-4 md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-medium  leading-6 dark:text-[#8175A7] text-[#413A5A]">
                    Set Duration
                  </h3>

                  <select
                    id="countries"
                    className=" border border-gray-300 dark:text-[#8175A7] text-[#413A5A] text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-[#2A243D] dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                  >
                    <option selected>Choose a country</option>
                    <option value="1 months">1 month</option>
                    <option value="2 months">2 months</option>
                    <option value="3 months">3 months</option>
                    <option value="4 months">4 months</option>
                  </select>
                </div>
              </div>
              {/* more fields belowe */}

              <div>
                <h3 className="text-lg font-medium leading-6 dark:text-[#8175A7] text-[#413A5A]">
                  Summary
                </h3>
                <div className="mb-4 md:grid md:grid-cols-2 md:gap-6">
                  <ul className="flex gap-4 md:col-span-2">
                    <li>Listing : 100 BNB</li>
                    <li>Service Fee : 2.4%</li>
                    <li>Creator Fee : 0%</li>
                  </ul>

                  <div className="w-full ">
                    <div className="flex justify-between w-2/3 gap-4 border-t-2 ">
                      <h1 className="font-bold">Potential Earnings</h1>{" "}
                      <h1 className="font-bold">97.5 BNB</h1>
                    </div>
                  </div>
                  <div className="flex w-full md:col-span-2 ">
                    <div className="">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
