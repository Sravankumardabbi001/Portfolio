import React from 'react'
import Home from "./components/Home";
import About from "./components/About/About";
import {Route,Routes, BrowserRouter} from 'react-router-dom';
export const router = () => {
  return (
    <div>
        <BrowserRouter>
             <Routes>
             <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about'element={<About />} />
             </Routes>
        </BrowserRouter>
    </div>
  )
}
export default router;
