import queryClient from '@/store/queryClient';
import axios from 'axios'


// function to fetch logged in user details
export async function logoutUser(){
    const res = await axios({
        method:'post',
        url:'http://localhost:4000/api/v1/users/logout',
        headers:{
            'Content-Type':'application/json'
        },
        withCredentials:true
    })
    
 console.log(res)
    return res.data;
}