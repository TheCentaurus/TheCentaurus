import axios from "axios";
const baseURL = 'https://www.api.thecentaurus.io/api'
const SECRET = 'HwgGvrRwdTYUJuytr567jbHGftyI7TfvbnjUYTFVBNbvcGBHNhgdxcvbn985gb'

const getNft = () =>{
  return  axios.get(baseURL + `/all-nfts?secret=${SECRET}`)
}

const getUserCollection = (address) =>{
    
   return axios.get(baseURL + `/user-collections?userAddress=${address}&secret=${SECRET}`)
}
const getAllCollection = () =>{
   return axios.get(baseURL + `/all-collections?secret=${SECRET}`)
}

const getUserProfile = (userAddress) =>{
   return axios.get(baseURL + `/user-details?secret=${SECRET}&userAddress=${userAddress}`)
}
const getServices = {
    getNft,
    getUserCollection,
    getAllCollection,
    getUserProfile 
}

export default getServices;