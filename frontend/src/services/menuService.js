import api from './api';

// GET: Mengambil semua menu (publik)
export const fetchMenus = async () => {
  try {
    const response = await api.get('/menu');
    return response.data;
  } catch (error) {
    console.error('Gagal mengambil data menu:', error);
    throw error;
  }
};

// POST: Membuat menu baru (memerlukan token admin)
export const createMenu = async (menuData) => {
  try {
    const response = await api.post('/menu', menuData);
    return response.data;
  } catch (error) {
    console.error('Gagal membuat menu:', error);
    throw error;
  }
};

// PUT: Memperbarui menu (memerlukan token admin)
export const updateMenu = async (id, menuData) => {
  try {
    const response = await api.put(`/menu/${id}`, menuData);
    return response.data;
  } catch (error) {
    console.error('Gagal memperbarui menu:', error);
    throw error;
  }
};

// DELETE: Menghapus menu (memerlukan token admin)
export const deleteMenu = async (id) => {
  try {
    const response = await api.delete(`/menu/${id}`);
    return response.data;
  } catch (error) {
    console.error('Gagal menghapus menu:', error);
    throw error;
  }
};