import postService from "@/api/post-services";
import { Layout } from "@/components/Layout";
import { Spinner, useToast } from "@chakra-ui/react";
import { useUser } from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useAddress } from "@thirdweb-dev/react";
import 'react-toastify/dist/ReactToastify.css';
import getServices from "@/api/get-services";

export default function Edit() {

  const [loading, setLoading] = useState(false)
  const[mail, setMail] = useState('')
  const[about, setAbout] = useState('')
  const [username, setUsername] = useState('')
  const [avater, setAvater] = useState('')
  const [banner, setBanner] = useState('')
  const [twitter, setTwitter] = useState('')
  const [addresss, setAddress] = useState('')
  const [url, setUrl] = useState('')
  const [discord, setDiscord] = useState('')
  const address = useAddress();
  const [data, setData] = useState([])

  const onSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('userAddress', address?? '');
    formData.append('username', username?? '');
    formData.append('about', about?? '');
    formData.append('secret', 'HwgGvrRwdTYUJuytr567jbHGftyI7TfvbnjUYTFVBNbvcGBHNhgdxcvbn985gb');
    formData.append('avatar', avater?? '');
    formData.append('banner', banner?? '');
    formData.append('twitter', twitter?? '');
    formData.append('website_url', url?? '');
    formData.append('email', discord?? '');
    formData.append('email', mail?? '');
    setLoading(true)

    postService.userProfile(formData).then(
      (response) => {
        setLoading(false)
        if(response.data.message === 'Update successful'){
            toast.success(response.data.message, {
                             
                onClose: () => {
                  window.location.reload()
                }
              })
        }else{
            toast.error(response.data.message)
        }
       
      },
            (error) => {
                setLoading(false)
                
            }
    )
  }

  useEffect(() => {
   
      getServices.getUserProfile(address).then(
          (response) => {
            setLoading(false)
          if(response.data.data.lenght >= 0){
          setData(response.data.data)
          setUsername(data[0].username?? '')
          setAbout(data[0].about?? '')
          setTwitter(data[0].twitter?? '')
          setMail(data[0].email?? '')
          setDiscord(data[0].discord?? '')
          }else{
              setData([])
          }
         
          console.log(response.data.data)
          
        },
        (error) => {
            setLoading(false)
            
        }
        )
  
  }, [])


  return (
    <Layout>
      <main className="relative pt-32">
      
        <div className="max-w-screen-md px-4 pb-6 mx-auto sm:px-6 lg:px-8 lg:pb-16">
        <ToastContainer/>
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
                  <form onSubmit={onSubmit}>
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
                            id="bio"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
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
                      //  onChange={(e) => uploadAvatar(e)}
                        type="file"
                        name="avatar"
                        onChange={(e) => setAvater(e.target.files ? e.target.files[0] : null)}
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
                        onChange={(e) => setBanner(e.target.files ? e.target.files[0] : null)}
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
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
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
                        value={discord}
                       onChange={(e) => setDiscord(e.target.value)}
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
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
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
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
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
                        value={address}
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
                      // onClick={() => handleSubmit()}
                      className="float-right px-4 py-2 text-white bg-yellow-400 rounded-md "
                    >
                      {loading ? (
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
