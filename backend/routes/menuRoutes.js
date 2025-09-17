const express = require('express');
const router = express.Router();
const { 
  getMenus, 
  createMenu, 
  updateMenu, 
  deleteMenu 
} = require('../controllers/menuController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Rute untuk /api/menu
router.route('/')
  .get(getMenus) // Bisa diakses publik
  .post(protect, isAdmin, createMenu); // Hanya admin

// Rute untuk /api/menu/:id
router.route('/:id')
  .put(protect, isAdmin, updateMenu) // Hanya admin
  .delete(protect, isAdmin, deleteMenu); // Hanya admin

module.exports = router;