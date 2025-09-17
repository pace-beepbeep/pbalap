import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';

const Navbar = () => {
  const { user, logoutAction } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAction();
    navigate('/login');
  };

  const linkStyle = "no-underline text-textColor font-medium py-2 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:text-primary hover:border-primary";
  const activeLinkStyle = "text-primary border-primary";

  return (
    <nav className="flex justify-between items-center px-12 py-4 bg-cardBg shadow-cardShadow">
      <div className="navbar-brand">
        <NavLink to="/" className="text-3xl font-bold text-primary no-underline">
          Cafe Echo
        </NavLink>
      </div>
      <ul className="flex list-none gap-8">
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
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="font-semibold">Halo, {user.nama || 'Pengguna'}</span>
            <button
              onClick={handleLogout}
              className="px-6 py-2 border border-primary text-primary bg-transparent rounded-full cursor-pointer text-base font-semibold transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="px-6 py-2 border border-primary bg-primary text-white rounded-full cursor-pointer no-underline text-base font-semibold transition-all duration-300 ease-in-out hover:bg-opacity-80"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;