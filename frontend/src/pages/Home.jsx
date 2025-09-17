import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-backgroundLight overflow-x-hidden">
      {/* Hero Section */}
      <header 
        className="relative min-h-[80vh] flex items-center p-8 md:p-16 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2787&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-backgroundLight via-backgroundLight/80 to-transparent"></div>
        <div className="relative z-10 max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            Kopi Pilihan, Momen Sempurna
          </h1>
          <p className="mt-4 text-xl text-textColor leading-relaxed">
            Rasakan kehangatan di setiap cangkir. Cafe Echo menyajikan biji kopi terbaik yang diracik khusus untuk Anda.
          </p>
          <Link to="/menu" className="mt-8 inline-block bg-transparent text-primary border-2 border-primary font-bold text-lg px-10 py-3 rounded-md transition-all duration-300 hover:bg-primary hover:text-white no-underline">
            Lihat Menu
          </Link>
        </div>
      </header>

      {/* About Us Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 px-8 py-16 md:px-16 md:py-24 bg-cardBg">
        <div className="flex-1 max-w-lg animate-fade-in-up">
          <img 
            src="https://images.unsplash.com/photo-1511920183353-3c7c72b1d1d2?q=80&w=1887&auto=format&fit=crop" 
            alt="Interior Cafe Echo" 
            className="w-full rounded-lg shadow-cardShadow"
          />
        </div>
        <div className="flex-1 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl font-bold text-primary mb-4">Cerita Hangat dari Secangkir Kopi</h2>
          <p className="text-lg text-textColor leading-relaxed">
            Berdiri sejak <strong className="font-bold">2018</strong>, Cafe Echo lahir dari mimpi sederhana: menciptakan ruang di mana setiap orang bisa menikmati kopi berkualitas sambil berbagi cerita. Kami percaya bahwa secangkir kopi bukan hanya soal rasa, tapi juga tentang momen kebersamaan yang tak terlupakan.
          </p>
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="px-8 py-16 md:px-16 md:py-24 bg-backgroundLight">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center animate-fade-in-up">Menu Terlaris Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Best Seller Card 1 */}
          <div className="bg-cardBg rounded-lg shadow-cardShadow text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img src="https://i.pinimg.com/1200x/93/15/de/9315de1864ea9306231a794f33974d32.jpg" alt="Kopi Susu Gula Aren" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">Kopi Susu Gula Aren</h3>
              <p className="mt-2 text-textLight">Perpaduan klasik espresso dengan manisnya gula aren asli Indonesia.</p>
            </div>
          </div>
          {/* Best Seller Card 2 */}
          <div className="bg-cardBg rounded-lg shadow-cardShadow text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img src="https://i.pinimg.com/1200x/79/32/df/7932dfbef93d100f08f0b495b6b0f565.jpg" alt="Red Velvet Latte" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">Red Velvet Latte</h3>
              <p className="mt-2 text-textLight">Minuman non-kopi dengan rasa kue red velvet yang lembut dan mewah.</p>
            </div>
          </div>
          {/* Best Seller Card 3 */}
          <div className="bg-cardBg rounded-lg shadow-cardShadow text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <img src="https://i.pinimg.com/736x/b3/f9/8a/b3f98ae0b6710dcc419a8b3e476b4f3d.jpg" alt="Croissant Cokelat" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">Croissant Cokelat</h3>
              <p className="mt-2 text-textLight">Teman minum kopi yang sempurna, renyah di luar dengan isian cokelat lumer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-8 py-16 text-center bg-primary text-white">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl font-bold">Ikuti Perjalanan Kami</h2>
          <p className="mt-4 text-lg opacity-90">
            Dapatkan info terbaru, promo spesial, dan momen-momen seru di Cafe Echo. Ikuti kami di media sosial!
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <a href="#" className="bg-white text-primary font-semibold px-8 py-3 rounded-full no-underline transition-transform duration-300 hover:scale-105">Instagram</a>
            <a href="#" className="bg-white text-primary font-semibold px-8 py-3 rounded-full no-underline transition-transform duration-300 hover:scale-105">Facebook</a>
            <a href="#" className="bg-white text-primary font-semibold px-8 py-3 rounded-full no-underline transition-transform duration-300 hover:scale-105">TikTok</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;