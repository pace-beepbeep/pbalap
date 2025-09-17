import React from 'react';

const MenuCard = ({ menu }) => {
  // Fungsi untuk memformat harga ke dalam Rupiah
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(menu.price);

  return (
    // Container kartu menggunakan warna dan bayangan dari palet
    <div className="bg-cardBg rounded-2xl shadow-cardShadow overflow-hidden w-72 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      
      {/* Gambar Menu */}
      <img src={menu.image} alt={menu.name} className="w-full h-52 object-cover" />
      
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Nama Menu menggunakan text-color */}
        <h3 className="text-xl font-semibold text-textColor mb-2">{menu.name}</h3>
        
        {/* Harga Menu menggunakan primary-color */}
        <p className="text-lg font-bold text-primary mb-6">{formattedPrice}</p>
        
        {/* Tombol menggunakan primary-color sebagai latar belakang */}
        <button 
          className="w-full mt-auto px-4 py-3 border-none rounded-lg bg-primary text-textColor text-base font-bold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-opacity-90"
        >
          Tambah ke Pesanan
        </button>
      </div>
    </div>
  );
};

export default MenuCard;