import profileService from "@/api/profile.service";
import { Layout } from "@/components/Layout";
import { Spinner, Toast } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
const user = {
  name: "User Name",
  handle: "username",
  email: "user@example.com",
  imageUrl: "art.png",
  bannerUrl: "art.png",
};

export default function Example() {
  const [availableToHire, setAvailableToHire] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [allowCommenting, setAllowCommenting] = useState(true);
  const [allowMentions, setAllowMentions] = useState(true);
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showError, setShowError] = useState(false);
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [discord, setDiscord] = useState("");
  const [banner, setBanner] = useState("");
  const [previewUrl, setPreviewUrl] = useState("art.png");
  const [previewUrlBanner, setPreviewUrlBanner] = useState("art.png");
  console.log(previewUrl, "previewUrl");
  const address = useAddress();
  const router = useRouter();

  function handleChangeFile(e: any) {
    // previewUrl
    setPreviewUrl(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    console.log(e.target.files[0], "kkkkkk");
  }
  function handleChangeFileBanner(e: any) {
    // previewUrl
    setPreviewUrlBanner(URL.createObjectURL(e.target.files[0]));
    setBanner(e.target.files[0]);
    console.log(e.target.files[0], "kkkkkk");
  }
  console.log(image, "kkkkkk");
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("upload_preset", "coindraw");
    formdata.append("cloud_name", "dqzpz4w3l");

    const cloudinaryRes = await axios
      .post("https://api.cloudinary.com/v1_1/dqzpz4w3l/image/upload", formdata)
      .then((res) => {
        console.log(res.data);
        const imageUrl = res.data.secure_url; // set imageUrl to the secure URL of the uploaded image
        const data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          walletAddress: address,
          username: username,
          about: about,
          website: website,
          avatar: imageUrl,
        };
        console.log(data, "data");
        profileService
          .createProfile(data)
          .then((res) => {
            setLoading(false);
            localStorage.setItem("profile", JSON.stringify(res.data));
            router.push("/profile");
            console.log(res.data);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      })
      .catch((err) => {
        setLoading(false);
        Toast({
          title: "Error",
          description: "Error uploading image, make sure it is an image file.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });

        console.log(err);
      });
  };

  return (
    <Layout>
      <main className="relative pt-32">
        <div className="max-w-screen-md px-4 pb-6 mx-auto sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg dark:bg-[#1b1324] bg-[#fff] shadow">
            <div className="divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
              <form
                className="divide-y divide-gray-200 lg:col-span-9"
                action="#"
                method="POST"
              >
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            id="about"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            name="about"
                            rows={3}
                            className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                            defaultValue={""}
                          />
                        </div>
                        <p className="mt-2 text-sm dark:text-white text-[#413A5A]">
                          Brief description for your profile. URLs are
                          hyperlinked.
                        </p>
                      </div>
                    </div>

                    <div className="flex-grow mt-6 lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                      <p
                        className="text-sm font-medium dark:text-white text-[#413A5A]"
                        aria-hidden="true"
                      >
                        Photo
                      </p>
                      <div className="mt-1 lg:hidden">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
                            aria-hidden="true"
                          >
                            <img
                              className="w-full h-full object-cover rounded-full"
                              src={previewUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-5 rounded-md shadow-sm">
                            <div className="relative flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md group focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                              <label
                                htmlFor="mobile-user-photo"
                                className="pointer-events-none relative text-sm font-medium leading-4 dark:text-white text-[#413A5A]"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                onChange={(e) => handleChangeFile(e)}
                                id="mobile-user-photo"
                                name="user-photo"
                                type="file"
                                className="absolute w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative hidden overflow-hidden rounded-full lg:block">
                        <img
                          className="relative w-40 h-40 object-cover rounded-full"
                          src={previewUrl}
                          alt=""
                        />
                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-black bg-opacity-75 opacity-0 focus-within:opacity-100 hover:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            onChange={(e) => handleChangeFile(e)}
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            className="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6 mt-6">
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        First name
                      </label>
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
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
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Website Url
                      </label>
                      <input
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        type="text"
                        name="url"
                        id="url"
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>
                    {/* social media inputs */}
                    <div className="col-span-6">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Facebook
                      </label>
                      <input
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                        type="text"
                        name="url"
                        id="url"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                      <small className="block font-medium dark:text-white text-[#413A5A]">
                        e.g https://www.facebook.com/user
                      </small>
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Instagram
                      </label>
                      <input
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                      <small className="block font-medium dark:text-white text-[#413A5A]">
                        e.g https://www.instagram.com/user
                      </small>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Twitter
                      </label>
                      <input
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                        type="text"
                        name="url"
                        id="url"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                      <small className="block font-medium dark:text-white text-[#413A5A]">
                        e.g https://www.twitter.com/user
                      </small>
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Discord
                      </label>
                      <input
                        value={discord}
                        onChange={(e) => setDiscord(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                      <small className="block font-medium dark:text-white text-[#413A5A]">
                        e.g https://www.discord.gg/tXdg..
                      </small>
                    </div>

                    <div className="col-span-12">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium dark:text-white text-[#413A5A]"
                      >
                        Wallet Address
                      </label>
                      <input
                        value={address}
                        readOnly
                        // onChange={(e) => setWebsite(e.target.value)}
                        type="text"
                        name="url"
                        id="url"
                        className="block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"
                      />
                    </div>
                  </div>
                  <div className="flex-grow mt-6 lg:mt-6 lg:flex-shrink-0 lg:flex-grow-0">
                    <p
                      className="text-sm font-medium dark:text-white text-[#413A5A]"
                      aria-hidden="true"
                    >
                      Banner
                    </p>
                    <div className="mt-1 lg:hidden">
                      <div className="flex items-center">
                        <div
                          className="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
                          aria-hidden="true"
                        >
                          <img
                            className="w-full h-full rounded-xl"
                            src={previewUrlBanner}
                            alt=""
                          />
                        </div>
                        <div className="ml-5 rounded-md shadow-sm">
                          <div className="relative flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md group focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                            <label
                              htmlFor="mobile-user-photo"
                              className="pointer-events-none relative text-sm font-medium leading-4 dark:text-white text-[#413A5A]"
                            >
                              <span>Change</span>
                              <span className="sr-only"> user banner</span>
                            </label>
                            <input
                              onChange={(e) => handleChangeFileBanner(e)}
                              id="mobile-user-photo"
                              name="user-photo"
                              type="file"
                              className="absolute w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative hidden overflow-hidden rounded-lg lg:block">
                      <img
                        className="relative w-full h-40 rounded-lg object-cover"
                        src={previewUrlBanner}
                        alt=""
                      />
                      <label
                        htmlFor="desktop-user-photo"
                        className="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-black bg-opacity-75 opacity-0 focus-within:opacity-100 hover:opacity-100"
                      >
                        <span>Change</span>
                        <span className="sr-only"> user photo</span>
                        <input
                          onChange={(e) => handleChangeFileBanner(e)}
                          type="file"
                          id="desktop-user-photo"
                          name="user-photo"
                          className="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="py-6 ">
                    <button
                      onClick={handleSubmit}
                      className="float-right px-4 py-2 text-white bg-yellow-400 rounded-md "
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div>
                            <Spinner />
                          </div>
                        </div>
                      ) : (
                        "Save"
                      )}
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
