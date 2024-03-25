import React from "react";
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
const Main = () =>{
    return (
        <Paper elevation={9} padding={50} paperelevation="100%">
          <div>
            <div className="nav">
              <div>
                <h2>Menu</h2>
              </div>
              <div className='link'>
                <ul>
                  <li><Link to="/home" className="active">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to ="/Work">Work</Link></li>
                  <li><Link to ="/Experience">Experience</Link></li>
                  <li><Link to ="/Contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </Paper>
      );
}

export default Main;