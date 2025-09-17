import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';

const Navbar = () => {
  const { user, logoutAction } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutAction();
    navigate('/login');
    setIsMenuOpen(false);
  };

  const linkStyle = "block md:inline-block no-underline text-textColor font-medium py-2 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:text-primary hover:border-primary";
  const activeLinkStyle = "text-primary border-primary";

  // MODIFIKASI: Menambahkan kelas "btn-login"
  const loginButtonStyle = "btn-login px-6 py-2 border border-primary text-primary bg-transparent rounded-full cursor-pointer no-underline text-base font-semibold transition-all duration-300 ease-in-out";
  const mobileLoginButtonStyle = "btn-login w-full text-center px-4 py-2 border border-primary text-primary bg-transparent rounded-full cursor-pointer no-underline text-base font-semibold transition-all duration-300 ease-in-out";

  return (
    <nav className="bg-cardBg/80 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center px-8 md:px-12 py-4">
        <div className="navbar-brand">
          <NavLink to="/" className="text-3xl font-bold text-primary no-underline">
            Cafe Echo
          </NavLink>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-textColor focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex list-none gap-8 items-center">
          <li>
            <NavLink to="/" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
              Menu
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="font-semibold">Halo, {user.nama || 'Pengguna'}</span>
              <button
                onClick={handleLogout}
                className="btn-login px-6 py-2 border border-primary text-primary bg-transparent rounded-full cursor-pointer text-base font-semibold transition-all duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={loginButtonStyle}>
              Login
            </NavLink>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-8 pb-4 bg-cardBg/80 backdrop-blur-lg">
          <ul className="flex flex-col list-none gap-4">
            <li>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
                Menu
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col items-start gap-4 mt-4 pt-4 border-t border-gray-200">
            {user ? (
              <>
                <span className="font-semibold">Halo, {user.nama || 'Pengguna'}</span>
                <button
                  onClick={handleLogout}
                  className="btn-login w-full text-left px-4 py-2 border border-primary text-primary bg-transparent rounded-full cursor-pointer text-base font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className={mobileLoginButtonStyle}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;