import React from 'react';
import AnimationTitle from './animationTitle';
import Projects from './projects';
import Recommendation from './recommendation';
import Services from './services';
import MobileNav from './mobile-nav';
import content from '../assets/content/content';


function Home(props) {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMaxWidth776px = screenWidth <= 776;

  return (
    <>
      <div className='img profile-img'><img src={content.img1} alt='profile-img' className='img-fluid'></img></div>
      <AnimationTitle type="head" />

      <div id="home" className='container-fluid text-center'>
        <div className="info">
          <div className="title sm-none-display">FullStack Developer</div>
          <p className="summary">{content.descriptiveTitle}</p>

          <div className='call-to-action action-top home-action'>
            <div> <button className='main-button'  onClick={()=>{props.toggleForm(); window.scrollTo({top: 0, behavior: 'smooth' })} } >Work With me</button></div>
            <div className='more-info icons d-flex justify-content-between align-items-center'>
            <a href='https://github.com/ayaAbdelhakeem18'  title="https://github.com/ayaAbdelhakeem18" target="_blank"  className="github-link"><i className="fa fa-github"></i></a>
        <a href='https://www.linkedin.com/in/aya-abdelhakeem-36348b21b/' title="https://www.linkedin.com/in/aya-abdelhakeem-36348b21b/" target="_blank" className="linkedin-link"><i className="fa fa-linkedin"></i></a>
        <a href="mailto:aya.abdelhakeem18@gmail.com" title="aya.abdelhakeem18@gmail.com" className="mail-link" ><i className="fa-regular fa-at"></i>  </a>
            </div>
          </div>

          <MobileNav />

          <p className="sm-none-display description">
           {content.about}
          </p>
          <div className='sm-none-display'>
            <div className="more-info d-flex justify-content-between align-items-center ">
              <div className='d-flex justify-content-between address'>
                <svg fill="none" focusable="false" height="20" role="img" strokeWidth="1" viewBox="0 0 24 24" width="20"><path d="M11.3106 7.45302L11.5 6.5H12.5L12.6894 7.45302C12.9261 8.6434 13.8566 9.57394 15.047 9.81056L16 10V11L15.047 11.1894C13.8566 11.4261 12.9261 12.3566 12.6894 13.547L12.5 14.5H11.5L11.3106 13.547C11.0739 12.3566 10.1434 11.4261 8.95302 11.1894L8 11V10L8.95302 9.81056C10.1434 9.57394 11.0739 8.6434 11.3106 7.45302Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M22 10C22 18 12 24 12 24C12 24 2 18 2 10C2 4.47715 6.47715 0 12 0C17.5228 0 22 4.47715 22 10ZM20.5 10C20.5 13.3892 18.3569 16.5218 15.9393 18.9393C14.7571 20.1216 13.5694 21.0724 12.6755 21.7279C12.4236 21.9126 12.1962 22.0731 12 22.2079C11.8039 22.0731 11.5764 21.9126 11.3245 21.7279C10.4306 21.0724 9.2429 20.1216 8.06066 18.9393C5.64308 16.5218 3.5 13.3892 3.5 10C3.5 5.30558 7.30558 1.5 12 1.5C16.6944 1.5 20.5 5.30558 20.5 10Z" fill="currentColor"></path></svg>
                <span>NewCairo - EGYPT</span>
                <span>|</span>
              </div>
              <a href='https://github.com/ayaAbdelhakeem18'  title="https://github.com/ayaAbdelhakeem18" target="_blank"  className="github-link"><i className="fa fa-github"></i></a>
              <a href='https://www.linkedin.com/in/aya-abdelhakeem-36348b21b/' title="https://www.linkedin.com/in/aya-abdelhakeem-36348b21b/" target="_blank" className="linkedin-link"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:aya.abdelhakeem18@gmail.com" title="aya.abdelhakeem18@gmail.com" className="mail-link" ><i className="fa-regular fa-at"></i>  </a>
            </div>

          </div>
          <a href='#projects' className='sm-none-display' style={{ color: "white" }}>
            <div className='navigate '>
              <p>view work</p>
              <span>
                <svg fill="none" height="28" viewBox="0 0 36 29" width="36" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M0.682617 13.542L0.682617 15.233L31.9476 15.233C31.658 15.3319 31.3713 15.4405 31.0881 15.5588C29.4139 16.2585 27.8926 17.284 26.6112 18.5768C25.3298 19.8695 24.3133 21.4043 23.6198 23.0934C22.9263 24.7825 22.5693 26.5929 22.5693 28.4211L24.3078 28.4211C24.3078 26.8232 24.6198 25.2409 25.2259 23.7646C25.832 22.2883 26.7205 20.9469 27.8405 19.8169C28.9605 18.687 30.2901 17.7907 31.7534 17.1792C33.2168 16.5677 34.7852 16.2529 36.3691 16.2529L36.3691 14.4998L36.3691 14.4991L36.3691 12.746C34.7852 12.746 33.2168 12.4312 31.7534 11.8197C30.2901 11.2082 28.9605 10.3119 27.8405 9.18198C26.7205 8.05206 25.832 6.71064 25.2259 5.23433C24.6198 3.75802 24.3078 2.17572 24.3078 0.577767L22.5693 0.577767C22.5693 2.40604 22.9263 4.21641 23.6198 5.90551C24.3133 7.59461 25.3298 9.12937 26.6112 10.4222C27.8926 11.7149 29.4139 12.7404 31.0881 13.4401C31.1715 13.4749 31.2551 13.5089 31.3389 13.542L0.682617 13.542ZM36.2266 14.4991L36.2266 14.4998C36.2403 14.4997 36.254 14.4996 36.2677 14.4995C36.254 14.4994 36.2403 14.4992 36.2266 14.4991Z" fill="currentColor" fillRule="evenodd"></path></svg>
              </span>
            </div>
          </a>
        </div>
      </div>

      {window.innerWidth > 776 ?
        <>
         <div id='projects'> <Projects mobile={false} /></div>
         <div id='services_section'><Services mobile={false} /></div>
        <div id='recommendation_section'><Recommendation mobile={false} /></div>
          <AnimationTitle top="150px" type="" bottom="100px" footer={true} />
        </> : ""
      }
    </>
  )
}

export default Home;
