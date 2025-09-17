import api from './api';

export const fetchMenus = async () => {
  try {
    const response = await api.get('/menu');
    return response.data;
  } catch (error) {
    console.error('Gagal mengambil data menu:', error);
    throw error;
  }
};