import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import SideBar from '../SideBar/SideBar';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle logout
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('userName');
    window.location.href = '/login';
  };

  // Function to get the title based on the path
  const getTitle = () => {
    switch (location.pathname) {
      case '/introduction':
        return 'Introduction';
      case '/health-care':
        return 'Healthcare';
      case '/automotive':
        return 'Automotive';
      case '/e-commerce':
        return 'E-Commerce';
      case '/retail':
        return 'Retail';
      case '/travel':
        return 'Travel';
      case '/financial':
        return 'Financial';
      case '/real-estate':
        return 'Real Estate';
      case '/manufacturing':
        return 'Manufacturing';
      case '/others':
        return 'Others';
      default:
        return 'Introduction';
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="header fixed top-0 right-0 left-0 z-40 lg:ml-[280px] h-[64px] border-b border-[#DEE1E7] bg-white before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-[#DEE1E7] before:hidden lg:before:block">
      <div className="flex font-semibold justify-between items-center p-4 lg:p-6 text-[#20232C] h-full">
        {getTitle()}

        {/* For mobile */}
        <button className="flex items-center cursor-pointer lg:hidden" onClick={toggleMenu}>
          <i className="ri-menu-fill text-[#656E8B] w-[18px] h-4 flex items-center justify-center"></i>
        </button>

        {/* For Desktop */}
        <div className="hidden lg:flex space-x-2 h-[40px]">
          <div>
            <button
              onClick={handleLogout}
              className="bg-[#E02424] hover:bg-[#C81E1E] text-white font-semibold rounded-lg text-sm w-[96px] h-[40px] px-[12px] py-[10px] flex items-center justify-center"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <SideBar
            isOpen={true}
            closeSidebar={() => setIsMenuOpen(false)}
            userName={localStorage.getItem('userName') || 'User'}
          />
        </div>
      )}
    </div>
  );
};

export default Header;