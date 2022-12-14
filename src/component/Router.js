// eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Main from '../pages/Main';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Login from './Login';
import Signup from './Signup';

// eslint-disable-next-line
export default () => (
  <Router>
    <Header/>
    <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </Router>
)
