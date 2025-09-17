import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext.jsx";
import { login } from '../services/authService.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginAction } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { token } = await login({ email, password });
      loginAction(token);
      navigate('/menu');
    } catch (err) {
      setError('Login gagal. Periksa kembali email dan password Anda.');
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-5 flex-grow bg-gradient-to-br from-backgroundDark to-white">
      <form
        className="bg-cardBg p-10 rounded-xl shadow-2xl w-full max-w-md text-center"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-8 text-primary text-3xl font-bold">Login Kasir</h2>
        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}
        <div className="mb-6 text-left">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 ease-in-out focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="mb-6 text-left">
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-all duration-300 ease-in-out focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 border-none rounded-lg bg-primary text-white text-base font-bold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#5a3e35]"
        >
          Masuk
        </button>
      </form>
    </div>
  );
};

export default LoginPage;