import React,{useState,useContext} from 'react'
import '../App.css';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const[loginCred,setLoginCred]=useState([]);
    const{toggleAuth}=useContext(AuthContext);
    

    const onchange=(e)=>
    {
        const{name,value}=e.target;
        setLoginCred({...loginCred,[name]:value,});
        
    };

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        
        
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "content-type":"application/json",
    },
      body:JSON.stringify({
        email: loginCred.username,
        password: loginCred.password,
      })
    })
      .then((r)=>r.json())
      .then((d)=>{
     if(d.error)
     {
       alert(d.error);
     }
     else
     {
     localStorage.setItem("token",d.token)
     alert("Login Successful");
     toggleAuth();
     }
    })
      
       
    }
  return (
     
    <div className="login"> 
        
    <form onSubmit={handleSubmit}>
    <div >Log In Form
        <input name="username" type="text" onChange={onchange} placeholder="Enter Username"></input>
        <input name="password" type="text" onChange={onchange} placeholder="Enter password"></input>
        <button>Log In</button>
        </div>
    </form>
    
    </div>
  )
}

export default Login