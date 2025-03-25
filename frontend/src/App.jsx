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
import UserProtectedWrapper from './pages/UserProtectedRoutes';
import UserLogout from './pages/UserLogout'
import Start from './pages/Start';


const App = () => {
  return (
    <div data-scroll-container>
      <CursorCircle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login/> } />
        <Route path="/home" element={
          <UserProtectedWrapper>
          <Start />
          </UserProtectedWrapper>
          } />
        <Route path='/templates' element={
          <UserProtectedWrapper>
            <Templates />
          </UserProtectedWrapper>
        } />
        <Route path='/our-work' element={
          <UserProtectedWrapper>
            <Ourwork/>
          </UserProtectedWrapper>
        }/>
        <Route path='/insight' element={
          <UserProtectedWrapper>
            <Insights/>
          </UserProtectedWrapper>
        }/>
        <Route path='/cyber-punk' element={
          <UserProtectedWrapper>
            <Render/>
          </UserProtectedWrapper>
        }/>
        <Route path='/studio' element={
          <UserProtectedWrapper>
            <Template/>
          </UserProtectedWrapper>
        } />
        <Route path='/Macbook' element={
          <UserProtectedWrapper>
            <Macbook/>
          </UserProtectedWrapper>
        } />
        <Route path='/Portfolio' element={
          <UserProtectedWrapper>
            <Portfolio/>
          </UserProtectedWrapper>
        } />
      <Route path='/user/logout' element={
        <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>
        }/>
        </Routes>
    </div>
  );
};

export default App;