import api from './api';

/**
 * Mengirim permintaan login ke backend.
 * @param {object} userData - Objek berisi email dan password.
 * @returns {Promise<object>} Data respons dari server, termasuk token.
 */
export const login = async (userData) => {
  const response = await api.post('/auth/login', userData);
  return response.data;
};

/**
 * Mengirim permintaan registrasi ke backend.
 * @param {object} userData - Objek berisi nama, email, dan password.
 * @returns {Promise<object>} Data respons dari server, termasuk token.
 */
export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

/**
 * Fungsi placeholder untuk logout.
 * Logika utama logout (menghapus token) ditangani di AuthContext.
 */
export const logout = () => {
  console.log('Logout service called.');
};