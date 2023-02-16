import axios from 'axios'
import { baseUrl } from './../../Utils/Utils';
const register = async (user)=>{
    const response = await axios.post(`${baseUrl}/signup`,user)
    console.log(response);
    return response.data
}   

export const AuthService = {
    register
}