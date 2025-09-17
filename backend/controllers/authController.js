const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res) => {
  // --- DEBUGGING ---
  console.log('====================================');
  console.log('Menerima permintaan login pada:', new Date().toLocaleTimeString());
  console.log('Payload yang diterima:', req.body);
  // --- END DEBUGGING ---

  const { email, password } = req.body;

  try {
    // 1. Cek apakah email ada di database
    let user = await User.findOne({ email });
    if (!user) {
      // --- DEBUGGING ---
      console.log('Hasil: Gagal. Email tidak ditemukan di database.');
      console.log('====================================\n');
      // --- END DEBUGGING ---
      return res.status(400).json({ message: 'Email atau password salah' });
    }

    // --- DEBUGGING ---
    console.log('Info Pengguna Ditemukan:', { id: user.id, email: user.email, passwordHash: user.password });
    // --- END DEBUGGING ---

    // 2. Bandingkan password
    const isMatch = await bcrypt.compare(password, user.password);

    // --- DEBUGGING ---
    console.log('Hasil perbandingan password (bcrypt.compare):', isMatch);
    // --- END DEBUGGING ---

    if (!isMatch) {
      // --- DEBUGGING ---
      console.log('Hasil: Gagal. Password tidak cocok.');
      console.log('====================================\n');
      // --- END DEBUGGING ---
      return res.status(400).json({ message: 'Email atau password salah' });
    }
    
    // --- DEBUGGING ---
    console.log('Hasil: Sukses. Login berhasil, membuat token...');
    console.log('====================================\n');
    // --- END DEBUGGING ---

    // 3. Jika berhasil, buat JWT
    const payload = {
      user: {
        id: user.id,
        nama: user.nama,
        role: user.role
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};