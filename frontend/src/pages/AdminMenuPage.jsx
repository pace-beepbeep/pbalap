import React, { useState, useEffect } from 'react';
import { fetchMenus, createMenu, updateMenu, deleteMenu } from '../services/menuService';

const AdminMenuPage = () => {
  const [menus, setMenus] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null); // Untuk data menu yang akan diedit
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    stock: '',
  });

  // Efek untuk memuat data menu saat komponen pertama kali dirender
  useEffect(() => {
    loadMenus();
  }, []);

  // Fungsi untuk memuat ulang data menu dari server
  const loadMenus = async () => {
    try {
      const data = await fetchMenus();
      setMenus(data);
    } catch (error) {
      console.error("Gagal memuat menu:", error);
    }
  };

  // Handler untuk mengubah data pada form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler untuk membuka modal tambah menu
  const handleAdd = () => {
    setCurrentMenu(null);
    setFormData({ name: '', price: '', category: 'Makanan', image: '', stock: '' });
    setIsModalOpen(true);
  };

  // Handler untuk membuka modal edit menu
  const handleEdit = (menu) => {
    setCurrentMenu(menu);
    setFormData({
      name: menu.name,
      price: menu.price,
      category: menu.category,
      image: menu.image,
      stock: menu.stock,
    });
    setIsModalOpen(true);
  };

  // Handler untuk menghapus menu
  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus menu ini?")) {
      try {
        await deleteMenu(id);
        alert('Menu berhasil dihapus!');
        loadMenus(); // Muat ulang data setelah menghapus
      } catch (error) {
        alert('Gagal menghapus menu. Coba lagi.');
      }
    }
  };
  
  // Handler saat form disubmit (untuk tambah/edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentMenu) {
        // Jika ada currentMenu, berarti ini mode edit
        await updateMenu(currentMenu._id, formData);
        alert('Menu berhasil diperbarui!');
      } else {
        // Jika tidak, ini mode tambah
        await createMenu(formData);
        alert('Menu berhasil ditambahkan!');
      }
      loadMenus(); // Muat ulang data
      setIsModalOpen(false); // Tutup modal
    } catch (error) {
      alert('Terjadi kesalahan. Pastikan semua kolom terisi.');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Dasbor Kelola Menu</h1>
        <button onClick={handleAdd} className="btn-login px-6 py-2 border rounded-full transition-all duration-300">
          + Tambah Menu
        </button>
      </div>

      {/* Tabel Menu */}
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            {/* ... header tabel ... */}
          </thead>
          <tbody>
            {menus.map((menu) => (
              <tr key={menu._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12">
                      <img className="w-full h-full rounded-full object-cover" src={menu.image} alt={menu.name} />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap font-semibold">{menu.name}</p>
                      <p className="text-gray-600 whitespace-no-wrap">{menu.category}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(menu.price)}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">{menu.stock}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <button onClick={() => handleEdit(menu)} className="text-indigo-600 hover:text-indigo-900 mr-4 font-semibold">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(menu._id)} className="text-red-600 hover:text-red-900 font-semibold">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form Tambah/Edit Menu */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold text-primary mb-6">{currentMenu ? 'Edit Menu' : 'Tambah Menu Baru'}</h2>
            <form onSubmit={handleSubmit}>
              {/* Form Input Fields */}
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Nama Menu" required className="w-full mb-4 px-4 py-2 border rounded-lg"/>
              <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Harga" required className="w-full mb-4 px-4 py-2 border rounded-lg"/>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full mb-4 px-4 py-2 border rounded-lg bg-white">
                <option>Makanan</option>
                <option>Minuman</option>
                <option>Cemilan</option>
              </select>
              <input name="image" value={formData.image} onChange={handleChange} placeholder="URL Gambar" required className="w-full mb-4 px-4 py-2 border rounded-lg"/>
              <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stok" required className="w-full mb-4 px-4 py-2 border rounded-lg"/>
              
              <div className="flex justify-end mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2 mr-4 bg-gray-200 text-gray-800 rounded-full">
                  Batal
                </button>
                <button type="submit" className="btn-login px-6 py-2 border rounded-full transition-all duration-300">
                  {currentMenu ? 'Simpan Perubahan' : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenuPage;