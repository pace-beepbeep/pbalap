const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware untuk melindungi rute
exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Ambil token dari header
      token = req.headers.authorization.split(' ')[1];

      // Verifikasi token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Ambil data user dari token (tanpa password) dan simpan di req.user
      req.user = await User.findById(decoded.user.id).select('-password');
      
      next(); // Lanjutkan ke controller
    } catch (error) {
      console.error('Token gagal diverifikasi:', error);
      res.status(401).json({ message: 'Tidak terotorisasi, token gagal' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Tidak terotorisasi, tidak ada token' });
  }
};

// Middleware untuk mengecek peran admin
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // Jika user adalah admin, lanjutkan
  } else {
    res.status(403).json({ message: 'Akses ditolak, hanya untuk admin' });
  }
};