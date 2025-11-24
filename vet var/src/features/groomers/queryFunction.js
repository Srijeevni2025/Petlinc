import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getAllGroomers(){
    const res = await axios({
        method:'get',
        url:`${BASE_URL}/api/v1/groomers/get-all-groomers`,
        headers:{
            'Content-Type':'application/json'
        }
    })

    return res.data
}