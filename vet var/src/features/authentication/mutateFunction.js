import queryClient from '@/store/queryClient';
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL;

// function to fetch logged in user details
export async function logoutUser(){
    const res = await axios({
        method:'post',
        url:`${BASE_URL}/api/v1/users/logout`,
        headers:{
            'Content-Type':'application/json'
        },
        withCredentials:true
    })
    
 console.log(res)
    return res.data;
}