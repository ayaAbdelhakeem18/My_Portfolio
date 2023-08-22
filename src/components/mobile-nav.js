import React, { useState,useEffect } from 'react';
import Projects from './projects';
import Services from './services';
import Recommendation from './recommendation';


function MobileNav() {
  const [clickarr, setClick] = useState([false,false,false,false]);
  const [rotated, setrotate] = useState([false,false,false,false]);

  useEffect(() => {
    const openedSec = localStorage.getItem('openedSec');
    const arrows = localStorage.getItem('arrows');
  
    // Parse the values from local storage to arrays of booleans
    const openedSecArray = openedSec ? openedSec.split(",").map(item => item === 'true') : [false, false, false, false];
    const arrowsArray = arrows ? arrows.split(",").map(item => item === 'true') : [false, false, false, false];
  
    // Compare the arrays of booleans
    if (openedSec && !isEqual(openedSecArray, clickarr)) {
      setClick(openedSecArray);
    }
  
    if (arrows && !isEqual(arrowsArray, rotated)) {
      setrotate(arrowsArray);
    }
  }, []);

  function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
  
    return true;
  }
  
  const links = [
    {
      url: 'projects',
      label: 'Projects',
      component: <Projects display={clickarr[0]==true? 'd-block' : 'd-none'} mobile={true} />,
    },
    {
      url: 'services_section',
      label: 'Services',
      component: <Services display={clickarr[1]==true? 'd-block' : 'd-none'} mobile={true} />,
    },
    {
      label: 'About',
      component: <About display={clickarr[2]==true? 'd-block' : 'd-none'} />,
    },
    {
      url: 'recommendation_section',
      label: 'Recommendation',
      component: (
        <Recommendation display={clickarr[3]==true? 'd-block' : 'd-none'} mobile={true} />
      ),
    },
  ];
  return (
    <div className='mobile-nav' >
      {links.map((e, i) => {
        return (
          <div key={i}  >
            <h3
              
              className='d-flex justify-content-between mobile-item'
              onClick={(e) =>{
                let arr1=clickarr.map((e,index)=>index==i?!e:e)
                setClick(arr1);
                localStorage.setItem('openedSec', arr1);
                let arr2=rotated.map((e,index)=>index==i?!e:e)
                setrotate(arr2);
                localStorage.setItem('arrows', arr2);
                
              }}
            >
              <span>{e.label}</span>
              <svg fill="none" focusable="false" height="28" role="img" strokeWidth="1" viewBox="0 0 24 24" width="28" className={rotated[i]==true?"svg_rotation c-dlXnHC":"c-dlXnHC"}><path d="M17.4697 8.46973L12.0001 13.9394L6.53039 8.46973L5.46973 9.53039L12.0001 16.0607L18.5304 9.53039L17.4697 8.46973Z" fill="currentColor"></path></svg>
             </h3>
          {e.component}
          </div>
        );
      })}

    </div>
  );
}

export default MobileNav;


//ABOUT section in mobile component
 function About(props) {
  return (
    <div className={`${props.display} mobile-about`}>
    <div className="title">FRONTEND Developer</div>
    <p className="description">
    Experienced Frontend Engineer skilled in managing React JS applications and providing high-quality web development services, including eCommerce projects, portfolios, and landing pages. I can solve complex problems and deliver all client requirements efficiently.
    </p>
    <div className='d-flex  address'>
    <svg fill="none" focusable="false" height="24" role="img" strokeWidth="1" viewBox="0 0 24 24" width="24"><path d="M11.3106 7.45302L11.5 6.5H12.5L12.6894 7.45302C12.9261 8.6434 13.8566 9.57394 15.047 9.81056L16 10V11L15.047 11.1894C13.8566 11.4261 12.9261 12.3566 12.6894 13.547L12.5 14.5H11.5L11.3106 13.547C11.0739 12.3566 10.1434 11.4261 8.95302 11.1894L8 11V10L8.95302 9.81056C10.1434 9.57394 11.0739 8.6434 11.3106 7.45302Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M22 10C22 18 12 24 12 24C12 24 2 18 2 10C2 4.47715 6.47715 0 12 0C17.5228 0 22 4.47715 22 10ZM20.5 10C20.5 13.3892 18.3569 16.5218 15.9393 18.9393C14.7571 20.1216 13.5694 21.0724 12.6755 21.7279C12.4236 21.9126 12.1962 22.0731 12 22.2079C11.8039 22.0731 11.5764 21.9126 11.3245 21.7279C10.4306 21.0724 9.2429 20.1216 8.06066 18.9393C5.64308 16.5218 3.5 13.3892 3.5 10C3.5 5.30558 7.30558 1.5 12 1.5C16.6944 1.5 20.5 5.30558 20.5 10Z" fill="currentColor"></path></svg>
     <span>NewCairo - EGYPT</span>
    </div>
    </div>
  )
}
