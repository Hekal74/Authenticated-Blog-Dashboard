import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import SiderBar from './components/SideBar/SideBar';
import MainContent from './components/MainContent/MainContent';
import HealthCare from './components/HealthCare/HealthCare';
import AutoMotive from './components/AutoMotive/AutoMotive';
import Financial from './components/Financial/Financial';
import ECommerce from './components/ECommerce/ECommerce';
import Retail from './components/Retail/Retail';
import Travel from './components/Travel/Travel';
import RealEstate from './components/RealEstate/RealEstate';
import Manufacturing from './components/Manufacturing/Manufacturing';
import Login from './components/Login/Login';
import Others from './components/Others/Others';
import './App.css';

// Google OAuth Configuration
const GOOGLE_CLIENT_ID = '744258808336-t476plgvdb5j8iuh2qrhsi2biorejs00.apps.googleusercontent.com';

const App: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('userName'); // Check if user is logged in

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated && window.location.pathname !== '/login') {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {isAuthenticated ? (
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1">
            <SiderBar userName={localStorage.getItem('userName') || 'User'} />
            <div className="flex-1 p-4 pt-[64px] bg-[#FCFCFD] md:ml-[264px]">
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/introduction" element={<MainContent />} />
                <Route path="/health-care" element={<HealthCare />} />
                <Route path="/automotive" element={<AutoMotive />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/e-commerce" element={<ECommerce />} />
                <Route path="/retail" element={<Retail />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/real-estate" element={<RealEstate />} />
                <Route path="/manufacturing" element={<Manufacturing />} />
                <Route path="/others" element={<Others />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} /> {/* Redirect all routes to login if not authenticated */}
        </Routes>
      )}
    </GoogleOAuthProvider>
  );
};

export default App;