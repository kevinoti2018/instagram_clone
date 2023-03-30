
import axios from 'axios'
import { baseUrl,config } from '../../Utils/Utils'

const createPost = async(postdata)=>{
    const response = await axios.post(`${baseUrl}/createPost`,{
        title:postdata.title,
        body:postdata.body,
        pic:postdata.pic
    },config)
    console.log(response);
    return response.data
}
const getPosts = async()=>{
    const response = await axios.get(`${baseUrl}/allpost`,config)
    console.log(response);
    return response.data
}



export const PostService = {
    createPost,
    getPosts
}