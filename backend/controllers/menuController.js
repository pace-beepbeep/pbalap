// backend/controllers/menuController.js - PERBAIKAN
const Menu = require('../models/Menu');

// @desc    Dapatkan semua menu
// @route   GET /api/menu
exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Tambah menu baru
// @route   POST /api/menu
exports.createMenu = async (req, res) => {
  try {
    // Gunakan nama field yang sesuai dengan skema (name, price, category, image, stock)
    const { name, price, category, image, stock } = req.body;
    const newMenu = new Menu({ name, price, category, image, stock });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};