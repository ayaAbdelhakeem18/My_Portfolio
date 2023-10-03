import React from 'react'

function InfoBox(props) {
  return (
    <>
      {props.mobile?
      <div className='mobile-info-box'>
       <div> 
         <h5>Skills</h5>
         {props.skills.map((e,i)=><span className='skill-box' key={i}>{e}</span>)}
       </div>
       <div>
         <h5>Tools</h5>
         {props.tools.map((e,i)=><span className='skill-box' key={i}>{e}</span>)}
       </div>
     </div>  
      :
      <div className='info-box  d-inline-flex flex-shrink-0 flex-column justify-content-between '>

      <div>
       <h3>Contact for pricing</h3>
      <button className='main-button'  onClick={()=>{props.toggleForm(); window.scrollTo({top: 0, behavior: 'smooth' })} }>Request To Book</button></div>
      <div> 
         <h5>Skills</h5>
         {props.skills.map((e,i)=><span className='skill-box' key={i}>{e}</span>)}
       </div>
      <div>
         <h5>Tools</h5>
         {props.tools.map((e,i)=><span className='skill-box' key={i}>{e}</span>)}
       </div>
      <div>
        <h5>Links</h5>
        <a href='https://github.com/ayaAbdelhakeem18'  title="https://github.com/ayaAbdelhakeem18" target="_blank"  className="github-link"><i className="fa fa-github"></i></a>
        <a href='https://www.linkedin.com/in/aya-abdelhakeem-36348b21b/' title="https://www.linkedin.com/in/aya-abdelhakeem-36348b21b/" target="_blank" className="linkedin-link"><i className="fa fa-linkedin"></i></a>
        <a href="mailto:aya.abdelhakeem18@gmail.com" title="aya.abdelhakeem18@gmail.com" className="mail-link" ><i className="fa-regular fa-at"></i>  </a>
      </div>
      </div>
      }
</>  
  )
}

export default InfoBox;
