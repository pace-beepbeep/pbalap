const express = require('express');
const router = express.Router();
const { getMenus, createMenu } = require('../controllers/menuController');
// Tambahkan middleware jika perlu proteksi
// const { protect } = require('../middlewares/authMiddleware');

router.route('/').get(getMenus).post(createMenu);
// contoh: router.route('/').get(getMenus).post(protect, createMenu);

module.exports = router;