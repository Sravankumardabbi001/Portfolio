import React from "react";
import Home from "./Home";
import "../App.css";
import mainImage from "../img/main.jpeg";

const Contact = () =>{
  return(
    <div class="main">
        <img src={mainImage} alt="men" className="men"/>
        <div class="main-detil">
            <p>Hello i'm</p>
            <h1>Sravan Kumar Dabbi</h1>
            <h4>Software Developer</h4>

            <div class="btn">
                <a href="https://drive.google.com/file/d/1ef2uVt8YzpXXof4WocQA2npPbD1ba7Qo/view?usp=drive_link"><button type="submit" className="btn-1">Download CV</button></a>
                <a href="mailto:sravankumardabbi001@gmail.com"><button type="submit" className="btn-2">Hire Me</button></a>
            </div>

            <div class="social">
                <a href="https://github.com/Sravankumardabbi001"><i class='bx bxl-github'></i></a>
                <a href="https://www.instagram.com/sravan__smart/"><i class='bx bxl-instagram'></i></a>
                <i class='bx bxl-Linkedin'></i>
            </div>
        </div>
        <div class="sub-btn">
            <a href="https://github.com/Sravankumardabbi001">Project's</a>
    </div> 
    </div>
   

  )
}

export default Contact;