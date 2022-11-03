import React from "react";
import { BsImage } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Layout } from "../components/Layout";
import { FormControl, FormLabel, Stack, Switch } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
function Settings() {
  const [value, setValue] = React.useState("1");
  // make a preview of the image
  const [image, setImage] = React.useState("");
  const [imagePreview, setImagePreview] = React.useState("");
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // @ts-ignore
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
  const [imageCover, setImageCover] = React.useState("");
  const [imagePreviewCover, setImagePreviewCover] = React.useState("");
  const handleImageChangeCover = (e) => {
    setImageCover(e.target.files[0]);
    // @ts-ignore
    setImagePreviewCover(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Layout>
      <div className="z-20 px-8 md:px-15 lg:px-20 pt-10 lg:pt-32">
        {/* make banner for profile page
        

        */}
        <div className="z-20 flex flex-col items-center lg:items-stretch lg:flex-row justify-between mt-10">
          <div className="z-20 w-full  dark:bg-[#1b1324] bg-[#fff] border dark:border-none h-44 lg:h-auto rounded-xl p-5 font-medium dark:text-[#8175a7] text-[#413A5A] mb-5">
            <BsImage className="z-20 m-auto text-yellow-300 text-[100px]" />
          </div>
        </div>
        <div className="z-20 flex flex-col items-center lg:items-stretch lg:flex-row justify-between mt-10">
          <div className="z-20 w-full pt-10 lg:pt-0 h-fit lg:w-fit lg:h-fit dark:bg-[#1b1324] bg-[#fff] rounded-xl lg:ml-5  lg:-mt-16 font-medium dark:text-[#8175a7] text-[#413A5A] mb-5">
            <img
              src="user.png"
              className="z-20 lg:h-44 h-52 object-cover rounded-xl m-auto"
              alt=""
            />
            <p className="z-20 lg:ml-2 text-sm my-3 mx-7">0xa929c6b...0ce7</p>
            <hr className="z-20 lg:mx-2 my-3 mx-7" />
            <p className="z-20 lg:ml-2 mb-2 mx-7">0 followers</p>
          </div>
          <div className="z-20  dark:bg-[#1b1324] bg-[#fff] lg:w-1/2 rounded-xl p-5 dark:text-white text-[#413A5A] mb-5 font-medium">
            <h1 className="z-20 font-bold text-xl lg:text-2xl mb-5 border-l px-2">
              Create Single Collectible Item
            </h1>
            {/* make a file input with max 30mb */}
            <div className="z-20 w-full ">
              <div className="z-20 w-full lg:hidden">
                <p className="z-20 mb-5 text-center">Cover Preview</p>

                <img
                  src={
                    imagePreviewCover
                      ? imagePreviewCover
                      : "img_placeholder.png"
                  }
                  className="z-20 h-64 w-full object-contain rounded-xl"
                  alt=""
                />
              </div>
              <p className="z-20 mb-5">PNG, GIF, WEBP, MP4 or MP3. Max 30mb.</p>
              <input
                type="file"
                className="z-20 hidden "
                id="cover"
                accept="image/*"
                onChange={handleImageChangeCover}
              />
              <label
                htmlFor="cover"
                className="z-20 cursor-pointer dark:text-[#8175a7] text-[#413A5A] text-sm border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8 w-full text-center flex justify-center items-center"
              >
                Upload Cover
              </label>
            </div>
            <div className="z-20 w-full mt-5 ">
              <div className="z-20 w-full lg:hidden">
                <p className="z-20 mb-5 text-center">Profile Picture Preview</p>

                <img
                  src={imagePreview ? imagePreview : "img_placeholder.png"}
                  className="z-20 h-64 w-full object-contain rounded-xl"
                  alt=""
                />
              </div>
              <p className="z-20 mb-5">PNG, GIF, WEBP, MP4 or MP3. Max 30mb.</p>
              <input
                type="file"
                className="z-20 hidden "
                id="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label
                htmlFor="file"
                className="z-20 cursor-pointer dark:text-[#8175a7] text-[#413A5A] text-sm border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8 w-full text-center flex justify-center items-center"
              >
                Upload Profile picture
              </label>
            </div>

            <div className="z-20 w-full mt-5">
              <p className="z-20 font-bold mb-2">Item Details</p>
              <label htmlFor="title">Username</label>
              <input
                type="text"
                placeholder="username"
                className="z-20 w-full mt-2 mb-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
              />

              <label htmlFor="title">Twitter Username</label>
              <input
                placeholder="@username"
                type="text"
                className="z-20 w-full mt-2 mb-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
              />
              <div className="z-20 ">
                <div>
                  <label htmlFor="title">Personal Site Or Portfolio</label>
                  <input
                    placeholder="eg. https://www.example.com"
                    type="text"
                    className="z-20 w-full mt-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
                  />
                </div>
              </div>
              <label htmlFor="title">Bio</label>
              <textarea
                name="description"
                className="z-20 w-full mt-2 mb-2 dark:bg-[#1b1324] bg-[#fff] dark:text-white text-[#413A5A] border-[1px] dark:border-yellow-300 border rounded-xl py-2 px-8"
              />
              <div className="z-20 flex ">
                <button className="z-20 m-auto px-8 py-2 border-[1px] dark:text-yellow-300 dark:border-yellow-300 border-[#1b1324] rounded-lg mt-5">
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block z-20 mb-5 dark:bg-[#1b1324] bg-[#fff] lg:w-1/4 rounded-xl p-5 dark:text-white text-[#413A5A]">
            {/* preview image */}
            <div className="z-20 w-full">
              <p className="z-20 mb-5 text-center">Cover Preview</p>

              <img
                src={
                  imagePreviewCover ? imagePreviewCover : "img_placeholder.png"
                }
                className="z-20 h-64 w-full object-contain rounded-xl"
                alt=""
              />
            </div>
            <div className="z-20 w-full">
              <p className="z-20 mb-5 text-center">Profile Picture Preview</p>

              <img
                src={imagePreview ? imagePreview : "img_placeholder.png"}
                className="z-20 h-64 w-full object-contain rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;
