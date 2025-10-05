import axios from 'axios'


// function to fetch logged in user details
export async function getLoggedInUser(){
    const res = await axios({
        method:'get',
        url:'http://localhost:4000/api/v1/users/get-me',
        headers:{
            'Content-Type':'application/json'
        },
        withCredentials:true,
        retry:true
    })
    console.log(res.data)
    return res.data;
}