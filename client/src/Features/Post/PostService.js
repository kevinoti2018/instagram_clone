
import axios from 'axios'
import { baseUrl,config } from '../../Utils/Utils'

const createPost = async(postdata)=>{
    const response = await axios.post(`${baseUrl}/createpost`,{
        title:postdata.title,
        body:postdata.body,
        pic:postdata.pic
    },config)
    // console.log(response);
    return response.data
}



export const PostService = {
    createPost
}