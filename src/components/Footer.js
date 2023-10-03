import React from 'react'
import { useNavigate ,Link,useLocation} from 'react-router-dom';


function Footer(props) {
  const changeLocation=useNavigate();
  const location = useLocation();
  const isServicePage =location.pathname.includes('/_service');
  const isErrorPage = location.pathname !== '/' && !location.pathname.startsWith('/_');
  
  const links = [
    { url: '#projects', label: 'Projects' },
    { url: '#services_section', label: 'Services' },
    { url: '#recommendation_section', label: 'Recommendation' },
    { url: "#WorkwithMe" , label:"Work With me"}
  ];
  return (
    <div className='sm-none-display'>
    <footer className='footer d-flex justify-content-between align-items-center flex-column'>
      {isServicePage || isErrorPage?"":
              <div >
              <button className='main-button bottombtn' onClick={()=>{props.toggleForm(); window.scrollTo({top: 0, behavior: 'smooth' })} }> Work with me</button> 
              </div>
      }

         <div>
         <ul className="d-flex justify-content-between align-items-center ftlist ">
         {links.map((link, index)=>{
            return(
              link.label==="Work With me"?
            (
              <li className="nav-item" key={index} onClick={()=>{props.toggleForm(); window.scrollTo({top: 0, behavior: 'smooth' })} }>
              <a className="nav-link list" href={link.url}>
                {link.label}
              </a>
            </li>
            )  
:
          (<li className="nav-item" key={index} onClick={()=>changeLocation("/")}>
            <a className="nav-link list" href={link.url}>
              {link.label}
            </a>
          </li>));
        
})}
          </ul>
         </div>
    <div className='more-info icons d-flex justify-content-between align-items-center'>  
    <a href='https://github.com/ayaAbdelhakeem18'  title="https://github.com/ayaAbdelhakeem18" target="_blank"  className="github-link"><i className="fa fa-github"></i></a>
    <a href='https://www.linkedin.com/in/aya-abdelhakeem-36348b21b/' title="https://www.linkedin.com/in/aya-abdelhakeem-36348b21b/" target="_blank" className="linkedin-link"><i className="fa fa-linkedin"></i></a>
    <a href="mailto:aya.abdelhakeem18@gmail.com" title="aya.abdelhakeem18@gmail.com" className="mail-link" ><i className="fa-regular fa-at"></i>  </a>
    </div>
    </footer>
    </div>
  )
}

export default Footer;
