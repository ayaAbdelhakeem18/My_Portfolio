import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';

function Navbar(props) {

  const changeLocation=useNavigate();

  const links = [
    { url: '#projects', label: 'Projects' },
    { url: '#services_section', label: 'Services' },
    { url: '#recommendation_section', label: 'Recommendation' },
    { url: "#WorkwithMe" , label:"Work With me"}
  ];
  return (
    <nav className=" bg-transparent">
      <div className="container-fluid d-flex justify-content-between align-items-center">

       <div> <Link className="navbar-brand" to="/" style={{fontSize:"59px"}}>✦︎︎</Link></div>

          <ul className="d-flex justify-content-between align-items-center">
            {links.map((link, index)=>{
              return(
              link.label==="Work With me"?
              <li className="nav-item" key={index} >
                <a className="nav-link main-button" href={link.url} onClick={()=>props.toggleForm()}>
                  {link.label}
                </a>
              </li>
              :
                 <li className="nav-item" key={index} onClick={()=>changeLocation("/")}>
                 <a className="nav-link list" href={link.url}>
                   {link.label}
                 </a>
               </li>
              
)})}
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;