import React from 'react';

function Recommendation(props) {
  return (
    <div id='recommendation' className={props.mobile==true?`${props.display} reco container-fluid sm-none-display`:' reco container-fluid'}>
     {props.mobile==true?null:<h2>RECOMMENDATIONS</h2>} 
      <blockquote className="q">
      <p>Aya is a dedicated professional who is always ready to go the extra mile. She consistently delivers high-quality work and is always looking for ways to improve and innovate. Her contributions have had a significant impact on our brand, and I am confident that she will bring the same dedication and creativity to any project she undertakes.</p>
      <footer className="blockquote-footer">Moamen Medhat, Owner of <a href='https://vos-mos.com/' className='quote-link'>Vosmos Store</a></footer>
      </blockquote>
    </div>
  )
}

export default Recommendation;
