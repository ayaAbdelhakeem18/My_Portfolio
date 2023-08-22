import React,{useEffect,useState} from 'react';
import {Route,Routes,BrowserRouter,useNavigate} from "react-router-dom";
import Navbar from '../components/Nav';
import Home from '../components/home';
import Project from '../components/project';
import Footer from '../components/Footer';
import ServicePage from './servicePage';
import _404 from './404.js';
import Loading from './loading';

function HomePage(props) {
  const [isLoading, setLoading] = useState(true);
  

  window.onload = function () {
    setLoading(false);
    console.log(isLoading)
  };

  return (
    <BrowserRouter>    
    <Navbar toggleForm={props.toggleForm}/>
    {(isLoading)? 
     <Loading/>:
      <Routes>
      <Route path='/' exact   element={<Home toggleForm={props.toggleForm}/>}></Route>
      <Route path='/_project'  element={<Project toggleForm={props.toggleForm}/>}></Route>
      <Route path='/_service'  element={<ServicePage toggleForm={props.toggleForm}/>}></Route>
      <Route path='/loading'  element={<Loading />}></Route>
      <Route path='*'      element={<_404/>}></Route>
      </Routes> 
    }

    <Footer toggleForm={props.toggleForm}/>
    <p className='copy-rights'>Developed by <span>✦︎︎Aya Abdelhakeem</span>  &copy;  2023 All Rights Reserved. </p>
    </BrowserRouter>
  )
}

export default HomePage
