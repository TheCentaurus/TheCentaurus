import profileService from "@/api/profile.service";
import { Layout } from "@/components/Layout";
import { Spinner, Toast } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Example() {
  const [availableToHire, setAvailableToHire] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [allowCommenting, setAllowCommenting] = useState(true);
  const [allowMentions, setAllowMentions] = useState(true);
  const [user, setUser] = useState(null);
  const address = useAddress();
  const [data, setData] = useState<ProfileData | null>(null);
  const [firstName, setFirstName] = useState(data?.firstName);
  const [lastName, setLastName] = useState(data?.lastName);
  const [username, setUsername] = useState(data?.username);
  const [bio, setBio] = useState(data?.bio);
  const [website, setWebsite] = useState(data?.website);
  const [location, setLocation] = useState(data?.location);
  const [avatar, setAvatar] = useState(data?.avatar);
  const [coverImage, setCoverImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(data?.email);
  const [image, setImage] = useState("");
  const [id, setId] = useState(data?.id);

  interface ProfileData {
    firstName: string;
    lastName: string;
    username: string;
    bio: string;
    website: string;
    location: string;
    avatar: string;
    coverImage: string;
    email: string;
    id: string;
    image: string;
    // Add any other properties here
  }

  useEffect(() => {
    profileService.getProfile(address).then((res) => {
      console.log(res?.data[0], "res");

      setData(res?.data[0]);
      alert("Profile fetched successfully");
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    if (data) {
      // add null check here
      setFirstName(data.firstName || "");
      setLastName(data.lastName || "");
      setUsername(data.username || "");
      setEmail(data.email || "");
      setBio(data.bio || "");
      setWebsite(data.website || "");
      setLocation(data.location || "");
      setAvatar(data.avatar || "");
      setCoverImage(data.coverImage || "");
      setId(data.id || "");
    }

    setLoading(false);
  }, [data]);

  console.log(user, "user");

  function handleChangeFile(e: any) {
    setImage(e.target.files[0]);
    console.log(e.target.files[0], "kkkkkk");
  }

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
          about: bio,
          website: website,
          avatar: imageUrl,
          user_id: id,
        };
        console.log(data, "data");
        profileService
          .updateProfile(data)
          .then((res) => {
            setLoading(false);
            localStorage.setItem("profile", JSON.stringify(res.data));
            Toast({
              title: "Success",
              description: "Profile updated successfully",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
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
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
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
                              className="w-full h-full rounded-full"
                              src={avatar ? avatar : data?.avatar}
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
                          className="relative w-40 h-40 rounded-full"
                          src={avatar ? avatar : data?.avatar}
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
