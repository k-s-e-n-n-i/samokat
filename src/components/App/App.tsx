import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Page404 from '../../pages/404/404';
import PageLogin from '../../pages/PageLogin/PageLogin';
import PageMain from '../../pages/PageMain/PageMain';
import Layout from '../Layout/Layout';

import './App.scss';
import './App-media.scss';
import Alert from '../Alert/Alert';
import PageProfile from '../../pages/PageProfile/PageProfile';
import PageNews from '../../pages/PageNews/PageNews';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Alert />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Layout page={<PageMain />} />} />
              <Route path="/profile/:id" element={<Layout page={<PageProfile />} />} />
              <Route path="/news" element={<Layout page={<PageNews />} />} />

              <Route path="/login" element={<PageLogin />} />
              <Route path="*" element={<Layout page={<Page404 />} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
