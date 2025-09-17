import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // <-- Ganti import ini
import MenuPage from './pages/MenuPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar.jsx'; // <-- IMPORT Navbar asli

// Untuk sementara, kita buat komponen placeholder agar tidak error
// Anda akan mengisi ini nanti
const PlaceholderNavbar = () => <nav>Navbar Cafe Echo</nav>;
const PlaceholderHome = () => <h1>Selamat Datang</h1>;

function App() {
  return (
    <Router>
      {/* Ganti PlaceholderNavbar dengan komponen Navbar asli jika sudah dibuat */}
      <Navbar />
      <main>
        <Routes>
          {/* Ganti PlaceholderHome dengan komponen Home asli jika sudah dibuat */}
          <Route path="/" element={<Home />} /> {/* <-- Ganti element ini */}
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Tambahkan route lainnya di sini */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;