import React,{useEffect,useState} from 'react';
import {Route,Routes,BrowserRouter,useNavigate} from "react-router-dom";
import Navbar from '../components/Nav';
import Home from '../components/home';
import Project from './project';
import Footer from '../components/Footer';
import ServicePage from './servicePage';
import _404 from './404.js';
import Loading from './loading';
import content from '../assets/content/content';

function HomePage(props) {
  const [isLoading, setLoading] = useState(false);
  

  // window.onload = function () {
  //   setLoading(false);
  //   console.log(isLoading)
  // };

  return (
    <BrowserRouter>    
    <Navbar toggleForm={props.toggleForm}/>
    {(isLoading)? 
     <Loading/>:
      <Routes>
      <Route path='/' exact   element={<Home toggleForm={props.toggleForm}/>}></Route>
      <Route path='/loading'  element={<Loading />}></Route>
      <Route path='*'      element={<_404/>}></Route>

      {content.projects.map((elle,i)=>
      <Route key={i} path={elle.rout} element={<Project toggleForm={props.toggleForm} title={elle.title} type={elle.type} liveLink={elle.liveLink} codeLink={elle.codeLink} description={elle.description} tools={elle.tools}/>}></Route>
      )} 
      {content.services.map((elle,i)=>
      <Route key={i} path={elle.route} element={<ServicePage toggleForm={props.toggleForm} title={elle.title} about={elle.about} included={elle.included} skills={elle.skills} tools={elle.tools} projects={elle.exampleProjects}/>}/>
      )}

      </Routes> 
    }

    <Footer toggleForm={props.toggleForm}/>
    <p className='copy-rights'>Developed by <span>✦︎︎Aya Abdelhakeem</span>  &copy;  2023 All Rights Reserved. </p>
    </BrowserRouter>
  )
}

export default HomePage
