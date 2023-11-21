import axios from "axios";
const baseURL = 'https://www.api.thecentaurus.io/api'


const registerUser = (address) =>{
    const value = {"userAddress": address, "secret" : "HwgGvrRwdTYUJuytr567jbHGftyI7TfvbnjUYTFVBNbvcGBHNhgdxcvbn985gb"}
    return axios.post(baseURL +'/register', value )
}
const createCollection = (data) =>{
    return axios.post(baseURL +'/create-collection', data )
}
const storeNft = (data) =>{
    return axios.post(baseURL +'/create-nft', data )
}

const userProfile = (data) =>{
    return axios.post(baseURL +'/update-user', data )
}

const postService = {
    createCollection,
    registerUser,
    storeNft,
    userProfile
}

export default postService