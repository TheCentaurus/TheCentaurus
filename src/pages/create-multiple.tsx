import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Layout } from "../components/Layout";
import postService from "@/api/post-services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

export default function CreateMultiple() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  );
  const [loading, setLoading] = useState(false)
  // const [logo, setLogo] = useState<File | null>(null);
  // const [banner, setBanner] = useState<File | null>(null);
  // const [featuredImage, setFeatureImage] = useState<File | null>(null);
  const [name, setName] = useState('')
  const[url, setUrl] = useState('')
  const [des, setDes] = useState('')
  const [cat,setCat] = useState('')
  const [supply, setSupply] = useState('')
  const [chain, setChain] = useState('')
  const [con, setCon] = useState('1')
  const submit = (e) =>{
    e.preventDefault()
    const formData = new FormData();
    // formData.append('logo', logo?? '');
    // formData.append('banner', banner?? '');
    // formData.append('featured', featuredImage?? '');
    formData.append('name', name);
    formData.append('url', url);
    formData.append('description', des);
    formData.append('category', cat);
    formData.append('supply', supply);
    formData.append('blockchain', chain);
    formData.append('explicit', con);
    formData.append('unlockable', '0');
    postService.createCollection(formData).then(
      (response) => {
        toast.success('Collection created', {
                             
          onClose: () => {
            window.location.reload()
          }
        })
      },
            (error) => {
                setLoading(false)
                
            }
    )
  }

  return (
    <Layout>
     
      <div className="flex justify-center ">
        <div className="z-20 max-w-screen-lg px-8 pt-10 my-16 md:px-15 lg:px-20 lg:pt-32">
          <div className="py-2">
            <h1 className="text-3xl font-bold text-yellow-300">
              Create Collection
            </h1>
          </div>
          <p className="py-2 text-black dark:text-white ">
            <span className="text-red-500"> *</span> Required fields
          </p>
          <form className="space-y-6" action="#" onSubmit={submit} method="POST">
            <div className="px-4 py-5 dark:bg-[#1b1324] bg-[#fff]  shadow sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-black dark:text-white">
                    Logo Image*
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This image will also be used for navigation. 350 x 350
                    recommended.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div>
                    <div className="flex justify-center w-full px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
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
                              required
                            
                              // onChange={(e) => setLogo(e.target.files ? e.target.files[0] : null)}
                              className="sr-only"
                            />
                          </label>
                          {/* {logo && <p>Filename: {logo?.name}</p>} */}
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
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-black dark:text-white">
                    Banner Image
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This image will appear top of your collection page. 1400 x
                    350 recommended.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div>
                    <div className="flex justify-center w-full px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
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
                              required
                              // value={banner?? ''}
                              // onChange={(e) => setBanner(e.target.files ? e.target.files[0] : null)}
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
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-black dark:text-white">
                    Featured Image
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This image will be used for the featured image on the home
                    page.600 x 400 recommended.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div>
                    <div className="flex justify-center w-full px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
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
                              required
                              // value={featuredImage?? ''}
                              // onChange={(e) => setFeatureImage(e.target.files ? e.target.files[0] : null)}
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

            <div className="px-4 py-5 dark:bg-[#1b1324] bg-[#fff]  shadow sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-black dark:text-white">
                    Information
                  </h3>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-black dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                        autoComplete="given-name"
                        className="block w-full mt-1 border-gray-300 dark:bg-[#2A243D] dark:border-transparent rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-black dark:text-white"
                      >
                        URL (optional)
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        autoComplete="https//:"
                        required
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="block w-full mt-1 border-gray-300 dark:bg-[#2A243D] dark:border-transparent rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-black dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        autoComplete="gg"
                        className="block w-full mt-1 border-gray-300 dark:bg-[#2A243D] dark:border-transparent rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-black dark:text-white"
                      >
                        Category and tags
                      </label>
                      <select
                        id="Category"
                        name="Category"
                        autoComplete="country-name"
                        required
                        value={cat}
                        onChange={(e) => setCat(e.target.value)}
                        className="block w-full px-3 py-2 mt-1 dark:text-white bg-white dark:bg-[#2A243D] dark:border-transparent border border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                      >
                        <option>Select a category</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-black dark:text-white"
                      >
                        Supply
                      </label>
                      <input
                        type="number"
                        name="street-address"
                        id="street-address"
                        value={supply}
                        onChange={(e) => setSupply(e.target.value)}
                        autoComplete="street-address"
                        className="block w-full mt-1 border-gray-300 dark:bg-[#2A243D] dark:border-transparent rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-black dark:text-white"
                      >
                        Blockchain
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={chain}
                        onChange={(e) => setChain(e.target.value)}
                        autoComplete="country-name"
                        className="block w-full dark:text-white px-3 py-2 mt-1 bg-white dark:bg-[#2A243D] dark:border-transparent border border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
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
                    <div className="grid grid-cols-2 mt-4 dark:text-white gap-y-6 sm:gap-x-4">
                      {mailingLists.map((mailingList) => (
                        <RadioGroup.Option
                          key={mailingList.id}
                          value={mailingList}
                          className={({ checked, active }) =>
                            classNames(
                              checked
                                ? "border-transparent"
                                : "border-gray-300",
                              active
                                ? "border-yellow-500 ring-2 ring-yellow-500"
                                : "",
                              "relative flex cursor-pointer rounded-lg border dark:text-white dark:bg-[#2A243D] dark:border-transparent bg-white p-4 shadow-sm focus:outline-none"
                            )
                          }
                        >
                          {({ checked, active }) => (
                            <>
                              <span className="flex flex-1">
                                <span className="flex flex-col">
                                  <RadioGroup.Label
                                    as="span"
                                    className="block text-sm font-medium text-black dark:text-white "
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
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
