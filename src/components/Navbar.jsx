import React,{useContext} from 'react'
import { Link, useNavigate,useLocation} from "react-router-dom";
import { Flex} from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const{isAuth,toggleAuth}=useContext(AuthContext);
  const navigate=useNavigate();
const{state}=useLocation();
  const navigateLogin=()=>
  {
    if(isAuth)
    {
      toggleAuth();
      if(state.from)
      navigate(state.from);
      else
      navigate("/")
    }
    else
    navigate("/login")
  }

  return (
    <div><Flex justify="flex-start" gap={30}>
      <Link to="/">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <button onClick={navigateLogin}>{isAuth? " Logout": "LogIn"}</button>
      </Flex>
    </div>
  )
}

export default Navbar