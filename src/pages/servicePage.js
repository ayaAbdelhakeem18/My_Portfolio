import React, { useEffect } from 'react'
import InfoBox from '../components/infoBox'
import img from "../assets/images/syf86lcskg1dp1ynwdwf.webp";
import { useNavigate} from 'react-router-dom';


function ServicePage(props) {

  const changeLocation=useNavigate();

  useEffect(()=>window.scrollTo({top: 0, behavior: 'smooth' }),[])

  return (
    <div className='service-page'>
    <div className='container-fluid'>
    <a href='#services_section'>
       <div className='back' onClick={()=>changeLocation("/")}>
        <svg fill="none" height="1em" viewBox="0 0 36 29" width="1em" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M0.682617 13.542L0.682617 15.233L31.9476 15.233C31.658 15.3319 31.3713 15.4405 31.0881 15.5588C29.4139 16.2585 27.8926 17.284 26.6112 18.5768C25.3298 19.8695 24.3133 21.4043 23.6198 23.0934C22.9263 24.7825 22.5693 26.5929 22.5693 28.4211L24.3078 28.4211C24.3078 26.8232 24.6198 25.2409 25.2259 23.7646C25.832 22.2883 26.7205 20.9469 27.8405 19.8169C28.9605 18.687 30.2901 17.7907 31.7534 17.1792C33.2168 16.5677 34.7852 16.2529 36.3691 16.2529L36.3691 14.4998L36.3691 14.4991L36.3691 12.746C34.7852 12.746 33.2168 12.4312 31.7534 11.8197C30.2901 11.2082 28.9605 10.3119 27.8405 9.18198C26.7205 8.05206 25.832 6.71064 25.2259 5.23433C24.6198 3.75802 24.3078 2.17572 24.3078 0.577767L22.5693 0.577767C22.5693 2.40604 22.9263 4.21641 23.6198 5.90551C24.3133 7.59461 25.3298 9.12937 26.6112 10.4222C27.8926 11.7149 29.4139 12.7404 31.0881 13.4401C31.1715 13.4749 31.2551 13.5089 31.3389 13.542L0.682617 13.542ZM36.2266 14.4991L36.2266 14.4998C36.2403 14.4997 36.254 14.4996 36.2677 14.4995C36.254 14.4994 36.2403 14.4992 36.2266 14.4991Z" fill="currentColor" fillRule="evenodd"></path></svg>   
        <span>BACK TO SERVICES</span>
      </div>
    </a>
    <div className='row'>
      <div className='col'>

      <h2>Animation</h2>

      <div className='d-flex align-items-center '>
      <div className='img'><img src={img} alt='' className='img-fluid'></img></div>
      <p className='name'>Aya Abdelhakeem</p>
      </div>
      <div className='call-to-action action-top'> 
      <h3>Contact for pricing</h3>
     <div> <button className='main-button' onClick={()=>{props.toggleForm(); window.scrollTo({top: 0, behavior: 'smooth' })} }>Request To Book</button></div>
      </div>
     <div className='about-serv'>
      <p className='p-title'>ABOUT THIS SERVICE</p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,</p>
     </div>

<div className='list'>
  <p className='p-title'>WHAT'S INCLUDED</p>
  <ul>
    <li>title</li>
    <p>description</p>
    <li>title</li>
    <p>description</p>
  </ul>
</div>

<div className='examples'>
<p className='p-title'>EXAMPLE PROJECTS</p>
</div>

<InfoBox mobile={true}/>

<div className='call-to-action'> 
  <h3>Work With Me</h3>
  <button className='main-button'  onClick={()=>{props.toggleForm(); window.scrollTo({top: 0, behavior: 'smooth' })} }>Request To Book</button>
</div>
<div className='more'> 
<p className='p-title'>MORE SERVICES</p>
<div className='serv-prev'>
  React JS Application Management
</div>
<div className='serv-prev'>
  Frontend Development
</div>
</div>


      </div>
      <div className='col sec-col' style={{maxWidth:"fit-content",maxHeight:"auto"}}><InfoBox mobile={false} toggleForm={props.toggleForm}/></div>
</div>
    </div>
    </div>
  )
}

export default ServicePage;
