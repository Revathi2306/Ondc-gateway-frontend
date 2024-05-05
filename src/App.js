import {Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Homepage from './pages/Homepage'
import HomeAdmin from './pages/HomeAdmin';
import Logout from './pages/Auth/Logout';


function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/> }/>
      <Route path='/logout' element={<Logout/> }/>
      <Route path='/signup' element={<Signup/>}/>
      {/* <Route path='/profile' element={<Profile/> }/> */}
      <Route path='/' element={<Homepage/> }/>
      <Route path='/Homeadmin' element={<HomeAdmin/> }/>
    </Routes>
    </>
  );
}

export default App;
