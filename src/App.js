import {Routes,Route} from 'react-router-dom';
import React, { useState } from 'react'
import './App.css';
import AddPost from './Components/AddPost';
import AdminLogin from './Components/AdminLogin';
import ContactUs from './Components/ContactUs';
import CurrentAffairs from './Components/CurrentAffairs';
import Eatries from './Components/Eatries';
import Error from './Components/Error';
import HomePage from './Components/HomePage';
import Navigation from './Components/Navigation/Navigation';
import CarsNews from './Components/NewsPages/CarsNews';
import GoldNews from './Components/NewsPages/GoldNews';
import FloodsNews from './Components/NewsPages/FloodsNews';
import KarachiFood from './Components/NewsPages/KarachiFood';
import GCNews from './Components/NewsPages/GCNews';
import MobileNews from './Components/NewsPages/MobileNews';
import GACNews from './Components/NewsPages/GACNews';
import SFoodNews from './Components/NewsPages/SFoodNews';
import PFoodNews from './Components/NewsPages/PFoodNews';
import Technology from './Components/Technology';
import Categories from './Components/Categories';
import { Button, TextField } from '@mui/material';
function App() {


  const [userlog,setUserlog] =useState(false);

  const [userlogged,setUserlogged] =useState('User is Not Logged In');

  const [user,setUser] = useState({username:'',password:''})
  const changeUsername=(e)=>{
      setUser({...user,username:e.target.value})
  }
  const changePassword=(e)=>{
      setUser({...user,password:e.target.value})
  }
  const checkUserPass = (e)=>{
      if(user.username != "admin" && user.password != "admin"){
        return (alert('Wrong Input, Enter Again'))
      }
      else{
        return (e.preventDefault(),setUserlog(true),setUserlogged('User is Logged In'),alert('You are Logged in'))
        }
      }

  return (
    <div className="App">
        
        <Navigation/>
        <form onSubmit={checkUserPass}>
          <strong>Login Here &emsp;&emsp; </strong>
        <TextField label="UserName" variant="standard" type='text' placeholder='admin' value={user.username} onChange={changeUsername}/>
        <TextField label="Password" variant="standard" type='password' placeholder='admin' value={user.password} onChange={changePassword}/>
        <Button variant="contained" type='submit'>Submit</Button> <Button variant="contained" onClick={()=>setUserlog(false)}>Log Out</Button> &emsp;UserName is admin and Password is admin 
        &emsp; &emsp; <strong>{userlogged}</strong>
        </form>

       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Blog-Project' element={<HomePage/>}/>
          <Route path='CurrentAffairs' element={userlog?<CurrentAffairs/>:<AdminLogin/>}/>
          <Route path='Technology' element={userlog?<Technology/>:<AdminLogin/>}/>
          <Route path='Eatries' element={userlog?<Eatries/>:<AdminLogin/>}/>
          <Route path='ContactUs' element={userlog?<ContactUs/>:<AdminLogin/>}/>
          <Route path='CarsNews' element={userlog?<CarsNews/>:<AdminLogin/>}/>
          <Route path='GoldNews' element={userlog?<GoldNews/>:<AdminLogin/>}/>
          <Route path='FloodsNews' element={userlog?<FloodsNews/>:<AdminLogin/>}/>
          <Route path='KarachiFood' element={userlog?<KarachiFood/>:<AdminLogin/>}/>
          <Route path='GCNews' element={userlog?<GCNews/>:<AdminLogin/>}/>
          <Route path='MobileNews' element={userlog?<MobileNews/>:<AdminLogin/>}/>
          <Route path='GACNews' element={userlog?<GACNews/>:<AdminLogin/>}/>
          <Route path='SFoodNews' element={userlog?<SFoodNews/>:<AdminLogin/>}/>
          <Route path='PFoodNews' element={userlog?<PFoodNews/>:<AdminLogin/>}/>
          <Route path='addPost' element={userlog?<AddPost/>:<AdminLogin/>}/>
          <Route path='adminLogin' element={<AdminLogin/>}/>
          <Route path='categories' element={userlog?<Categories/>:<AdminLogin/>}/>
          <Route path='*' element={<Error/>}/>

        </Routes>

    </div>
  );
}

export default App;
