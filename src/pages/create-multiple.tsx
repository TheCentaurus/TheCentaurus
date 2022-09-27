import React from "react";
import { BsImage } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Layout } from "../components/Layout";
import { FormControl, FormLabel, Stack, Switch } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
function CreateMultiple() {
  const [value, setValue] = React.useState("1");
  // make a preview of the image
  const [image, setImage] = React.useState("");
  const [imagePreview, setImagePreview] = React.useState("");
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // @ts-ignore
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Layout>
      <div className="z-20 px-10 md:px-15 lg:px-20 pt-10 lg:pt-32">
        {/* make banner for profile page
        

        */}
        <div className="z-20 w-full bg-[#1b1324] h-44 lg:h-auto rounded-xl p-5">
          <BsImage className="z-20 m-auto text-yellow-300 text-[100px]" />
        </div>
        <div className="z-20 flex flex-col items-center lg:items-stretch lg:flex-row justify-between mt-10">
          <div className="z-20 w-10/12 h-fit lg:w-fit lg:h-fit bg-[#1b1324] rounded-xl ml-5  lg:-mt-16 font-medium text-[#8175A7] mb-5">
            <img
              src="user.png"
              className="z-20 lg:h-44 h-52 object-cover rounded-xl m-auto"
              alt=""
            />
            <p className="z-20 ml-2 text-sm my-3">0xa929c6b...0ce7</p>
            <hr className="z-20 mx-2 my-3" />
            <p className="z-20 ml-2 mb-2">0 followers</p>
          </div>
          <div className="z-20  bg-[#1b1324] lg:w-1/2 rounded-xl p-5 text-white mb-5 font-medium">
            <h1 className="z-20 font-bold text-xl lg:text-2xl mb-5 border-l px-2">
              Create Multiple Collectible Item
            </h1>
            {/* make a file input with max 30mb */}
            <div className="z-20 w-full">
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
                className="z-20 cursor-pointer text-[#8175A7] text-sm border-[1px] border-yellow-300 rounded-xl py-2 px-8 w-full text-center flex justify-center items-center"
              >
                Upload Image
              </label>
            </div>
            <div className="z-20 w-full mt-5">
              <label htmlFor="categories">Categories</label>
              <select
                name="category"
                id="category"
                className="z-20 w-full mt-2 bg-[#1b1324] text-white border-[1px] border-yellow-300 rounded-xl py-2 px-8"
              >
                <option value="Art">Art</option>
                <option value="Animation">Animation</option>
                <option value="Games">Games</option>
                <option value="Music">Music</option>
                <option value="Videos">Videos</option>
                <option value="Memes">Memes</option>
                <option value="Metaverses">Metaverses</option>
                <option value="Physical Art">Physical Art</option>
                <option value="Domain Name ">Domain Name </option>
                <option value="Utility">Utility</option>
                <option value="Virtual World ">Virtual World </option>
                <option value="Collectibles ">Collectibles </option>
                <option value="Sports">Sports</option>
                <option value="Trading Cards">Trading Cards</option>
                <option value="Identification">Identification</option>
                <option value="Certificates">Certificates</option>
                <option value="Digital Art">Digital Art</option>
                <option value="Slupture Art">Slupture Art</option>
                <option value="Digital Animation">Digital Animation</option>
                <option value="Brand">Brand</option>
                <option value="Photography">Photography</option>
              </select>
            </div>
            <div className="z-20 w-full mt-5">
              <p className="z-20 font-bold mb-2">Item Details</p>
              <label htmlFor="title">Item Name</label>
              <input
                type="text"
                className="z-20 w-full mt-2 mb-2 bg-[#1b1324] text-white border-[1px] border-yellow-300 rounded-xl py-2 px-8"
              />
              <label htmlFor="title">Description</label>
              <textarea
                name="description"
                className="z-20 w-full mt-2 mb-2 bg-[#1b1324] text-white border-[1px] border-yellow-300 rounded-xl py-2 px-8"
              />
              <label htmlFor="title">Royalties</label>
              <input
                placeholder="eg. 10%"
                type="text"
                className="z-20 w-full mt-2 mb-2 bg-[#1b1324] text-white border-[1px] border-yellow-300 rounded-xl py-2 px-8"
              />
              <div className="z-20 grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="title">Properties</label>
                  <input
                    placeholder="eg. size"
                    type="text"
                    className="z-20 w-full mt-2 bg-[#1b1324] text-white border-[1px] border-yellow-300 rounded-xl py-2 px-8"
                  />
                </div>
                <div>
                  <label htmlFor="title">Value</label>
                  <input
                    placeholder="eg. M"
                    type="text"
                    className="z-20 w-full mt-2 bg-[#1b1324] text-white border-[1px] border-yellow-300 rounded-xl py-2 px-8"
                  />
                </div>
              </div>
              <div className="z-20 mt-3">
                <FormControl
                  display="flex"
                  w="full"
                  justifyContent="space-between"
                  alignItems="center"
                  my={2}
                >
                  <div>
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Put on sale
                    </FormLabel>
                    <p className="z-20 text-sm font-normal">
                      You'll receive bids on this item
                    </p>
                  </div>
                  <Switch id="email-alerts" />
                </FormControl>
                <FormControl
                  display="flex"
                  w="full"
                  justifyContent="space-between"
                  alignItems="center"
                  my={2}
                >
                  <div>
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Instant sale price
                    </FormLabel>
                    <p className="z-20 text-sm font-normal">
                      Enter the price for which the item will be instantly sold
                    </p>
                  </div>
                  <Switch id="email-alerts" />
                </FormControl>
                <FormControl
                  display="flex"
                  w="full"
                  justifyContent="space-between"
                  alignItems="center"
                  my={2}
                >
                  <div>
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Unlock once purchased
                    </FormLabel>
                    <p className="z-20 text-sm font-normal">
                      Content will be unlocked after successful transaction
                    </p>
                  </div>
                  <Switch id="email-alerts" />
                </FormControl>
              </div>
              <div>
                <p className="z-20 mb-2">Choose Type</p>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="row">
                    <Radio value="1">ERC-721</Radio>
                    <Radio value="2">NFT</Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div className="z-20 flex ">
                <button className="z-20 m-auto px-8 py-2 border-[1px] border-yellow-300 rounded-lg mt-5">
                  Create Contract
                </button>
              </div>
            </div>
          </div>
          <div className="z-20 mb-5 bg-[#1b1324] lg:w-1/4 rounded-xl p-5 text-white">
            {/* preview image */}
            <div className="z-20 w-full">
              <p className="z-20 mb-5 text-center">Preview</p>

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

export default CreateMultiple;