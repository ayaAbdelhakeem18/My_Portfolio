import React from 'react';

function Recommendation(props) {
  return (
    <div id='recommendation' className={props.mobile==true?`${props.display} reco container-fluid sm-none-display`:' reco container-fluid'}>
     {props.mobile==true?null:<h2>RECOMMENDATIONS</h2>} 
      <blockquote className="q">
      <p>Recommendations you receive after completing a paid project will appear here...</p>
      <footer className="blockquote-footer">From WWF's website</footer>
      </blockquote>
    </div>
  )
}

export default Recommendation;
