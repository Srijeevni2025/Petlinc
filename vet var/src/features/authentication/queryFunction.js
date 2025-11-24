import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(BASE_URL)
// function to fetch logged in user details
export async function getLoggedInUser(){
    const res = await axios({
        method:'get',
        url:`${BASE_URL}/api/v1/users/get-me`,
        headers:{
            'Content-Type':'application/json'
        },
        withCredentials:true,
        retry:false
    })
    if(res.status === 401 ) return null;
    console.log(res.data)
    return res.data;
}