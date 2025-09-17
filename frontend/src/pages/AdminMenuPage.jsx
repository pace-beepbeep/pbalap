import React, { useState, useEffect } from 'react';
import { fetchMenus } from '../services/menuService'; // Kita akan perbarui service ini nanti

const AdminMenuPage = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    loadMenus();
  }, []);

  const loadMenus = async () => {
    try {
      const data = await fetchMenus();
      setMenus(data);
    } catch (error) {
      console.error("Gagal memuat menu:", error);
    }
  };

  const handleEdit = (menu) => {
    // Logika untuk menampilkan form edit (akan dikembangkan)
    alert(`Edit menu: ${menu.name}`);
  };

  const handleDelete = async (id) => {
    // Logika untuk menghapus menu (akan dikembangkan)
    if (window.confirm("Apakah Anda yakin ingin menghapus menu ini?")) {
      alert(`Hapus menu dengan ID: ${id}`);
      // Panggil API hapus di sini, lalu loadMenus() lagi
    }
  };
  
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Kelola Menu</h1>
        <button className="btn-login px-6 py-2 border rounded-full transition-all duration-300">
          Tambah Menu Baru
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Harga
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Stok
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu) => (
              <tr key={menu._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{menu.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(menu.price)}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                   <p className="text-gray-900 whitespace-no-wrap">{menu.stock}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <button onClick={() => handleEdit(menu)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(menu._id)} className="text-red-600 hover:text-red-900">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMenuPage;