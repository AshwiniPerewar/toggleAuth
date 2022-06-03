import React,{useState,createContext} from 'react'
import { useNavigate,useLocation} from 'react-router-dom';
export const AuthContext = createContext();


export const AuthProvider=({children})=>
{
    const[isAuth,setIsAuth]=useState(false);
    const navigate=useNavigate();
    const {state}=useLocation();
    

    const toggleAuth=()=>
    {
        if(isAuth)
        {
        setIsAuth(false);
        navigate("/");
        localStorage.setItem("token","")
        }
        else
        {
        setIsAuth(true); 
        if(state.from)
        navigate(state.from,{replace:true});
        else
        navigate("/");
        }
    }

    return(
        <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>
    )
}
