import { useQuery } from "@tanstack/react-query";
import { getLoggedInUser } from "../authentication/queryFunction";
import { useLocation } from "react-router-dom";


export function useUser(){
    const hasJWT = document.cookie.includes("jwt=");
    
    return useQuery({
        queryKey:["userData"],
        queryFn:getLoggedInUser,
        
        
    })
}