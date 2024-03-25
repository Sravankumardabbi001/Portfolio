import React from 'react';
import About from "./About/About";
import Content from "./Content";
import Main from "./Main";
const Home = () =>{
      return(
          <div>
             <div>
                 <Main/>
              </div>
             <div>
                <Content />
             </div>
          </div>
      )
  }

export default Home;
