 import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';

// 1. Membuat Context
const AuthContext = createContext();

// 2. Membuat Provider Komponen
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Ambil token dari localStorage saat pertama kali aplikasi dimuat
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // useEffect akan berjalan setiap kali nilai 'token' berubah
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded.user);
      // Atur header Authorization untuk setiap request API setelah login
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      // Hapus header jika tidak ada token (saat logout)
      delete api.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // Fungsi untuk menangani login
  const loginAction = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  // Fungsi untuk menangani logout
  const logoutAction = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logoutAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;