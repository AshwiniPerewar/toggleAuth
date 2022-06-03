import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Feeds from './Pages/Feeds';
import RequireAuth from './context/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/feeds' element={<RequireAuth><Feeds/></RequireAuth>}/>
        
      </Routes>
    </div>
  );
}

export default App;
