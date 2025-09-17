// backend/routes/menuRoutes.js - LENGKAP
const express = require('express');
const router = express.Router();
const { 
  getMenus, 
  createMenu, 
  updateMenu, 
  deleteMenu 
} = require('../controllers/menuController');

// Rute untuk mendapatkan semua menu dan membuat menu baru
router.route('/').get(getMenus).post(createMenu);

// Rute untuk update dan delete menu berdasarkan ID
router.route('/:id').put(updateMenu).delete(deleteMenu);

module.exports = router;