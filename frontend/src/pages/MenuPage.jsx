import React, { useState, useEffect } from 'react';
import MenuCard from '../components/MenuCard';
import { fetchMenus } from '../services/menuService';

const MenuPage = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMenus = async () => {
      try {
        const data = await fetchMenus();
        setMenus(data);
      } catch (error) {
        console.error("Gagal mengambil data menu:", error);
      } finally {
        setLoading(false);
      }
    };
    getMenus();
  }, []);

  if (loading) {
    return <div className="text-center p-10">Loading menu...</div>;
  }

  return (
    <div className="p-8 md:p-12">
      <h1 className="text-center text-4xl font-bold text-primary mb-8">DAFTAR MENU</h1>
      {/* Grid container:
        - grid: Mengaktifkan layout grid.
        - grid-cols-1: 1 kolom di layar paling kecil (mobile).
        - sm:grid-cols-2: 2 kolom di layar ukuran 'small' ke atas.
        - lg:grid-cols-3: 3 kolom di layar 'large' ke atas.
        - xl:grid-cols-4: 4 kolom di layar 'extra large' (maksimal 4).
        - gap-8: Jarak antar kartu.
        - place-items-center: Memastikan kartu berada di tengah sel grid.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
        {menus.length > 0 ? (
          menus.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))
        ) : (
          <p className="col-span-full">Tidak ada menu yang tersedia saat ini.</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;