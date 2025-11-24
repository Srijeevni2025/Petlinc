import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "@/features/user/queryFunctions";
import LoadingScreen from "./LoadingScreen";
import toast from "react-hot-toast";
import { useContext, useEffect, useRef } from "react";
import queryClient from "@/store/queryClient";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "@/store/context";
export default function ProtectedRoute({children}){

  
    const navigate = useNavigate();
    //const {data:user, isPending, error, isFetching} = useUser();
    const {isLoggedIn} = useContext(GlobalContext);
    const user = isLoggedIn.current;
     
    const location = useLocation(); /// to remember where user came from 

    useEffect(()=>{
       
        if( !user){
            toast.error("You are not signed in. Please sign in to continue...")
       
         navigate("/signin",  {replace: true, state: {from:location.pathname}});
        }
    }, [user,  navigate, location])

   

    
    return children

}