import React from 'react';
import "./about.css";

export default function About() {
  return (
    <div className='aboutContainer'>
      <h1 className='aboutContainer h1'>About Us</h1>
      <div className='aboutContainer img'><img src="assets\reactjav about.png" alt="logo" /></div>
      <div>
      <h1>What Makes Us Different</h1>
      <p className='aboutContainer p'>ReactJav is a blog site designed to assis individuals have an <br /> 
      a good knowlede of HTML, CSS, JavaScript, React etc. <br />
      You will find articles on key concepts</p>
      </div>


    </div>
  )
}
