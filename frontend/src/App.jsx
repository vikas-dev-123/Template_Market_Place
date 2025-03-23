import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Home from './pages/Home';
import SignUp from './pages/signup';
import Login from './pages/login';
import Templates from './pages/Templates';
import Render from './components/template1/Template_render';
import Template from './components/template2/Template';
import CursorCircle from './components/Circle';
import Ourwork from './pages/Ourwork';
import Insights from './pages/Insights';
import Macbook from './components/template3/Macbook';
import Portfolio from './components/template4/Portolio';
const App = () => {
  return (
    <div data-scroll-container>
      <CursorCircle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/templates' element={<Templates/>} />
        <Route path='/our-work' element={<Ourwork/>}/>
        <Route path='/insight' element={<Insights/>}/>
        <Route path='/cyber-punk' element={<Render/>}/>
        <Route path='/studio' element={<Template/>} />
        <Route path='/Macbook' element={<Macbook/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
      </Routes>
    </div>
  );
};

export default App;