import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import Main from '../Main';
import "../About/about.css"; // Import your CSS file
import Image from "../About/aboutimg.jpg";

const About = () => {
  // State to manage the typed text
  const [typedText, setTypedText] = useState('');
  // The text to be displayed one by one
  const textToType = [
    "My name is Sravan Kumar Dabbi.",
    "I am a professional and enthusiastic programmer in my daily life.",
    "I am a quick learner with a self-learning attitude.",
    "I love to learn and explore new technologies and am passionate about problem-solving.",
    "I love almost all the stacks of web application development and love to make the web more open to the world.",
     "I am available for any kind of job opportunity that suits my skills and interests."
  ];

  useEffect(() => {
  
    const typeText = () => {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < textToType.length-1) {
          setTypedText(prevText => prevText + textToType[index] + ' ');
          index++;
          if(index==5){
            return clearInterval(intervalId);
          }
         
        } else {
          clearInterval(intervalId); // Clear the interval when all text is typed
        }
      }, 900); 
    };

    typeText();

    // Cleanup function
    return () => clearInterval();
  }, []);

  return (
    <div>
      <div>
        <Main />
      </div>
      <div className="about-container">
        <div className="image-container">
          <img src={Image} alt="Profile" className="aboutimage" />
        </div>
        <div className="text-container">
          <div className='text'>
            {typedText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
