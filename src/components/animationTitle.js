import React from 'react';
import "./animation.css";

function AnimationTitle(props) {
  return (
    <div className={props.footer==true?"scrolling-text-container d-flex footer-title ":"scrolling-text-container d-flex"}  >
      {props.type==="head"?
      <>
          <h1 className="scrolling-text main-heading" >
          <span>✦︎︎</span>Aya<span>✦︎︎</span> Abdelhakeem
           </h1>
          <h1 className="scrolling-text main-heading ">
          <span>✦︎︎</span>Aya<span>✦︎︎</span> Abdelhakeem
           </h1>
      </> :
 < >
 <h2 className="scrolling-text anim-footer " >
 <span>✦︎︎</span>Let's Work Together
  </h2>
 <h2 className="scrolling-text anim-footer ">
 <span>✦︎︎</span>Let's Work Together
  </h2>
  </>
}

  </div>
  )
}

export default AnimationTitle
