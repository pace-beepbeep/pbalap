// backend/controllers/menuController.js - LENGKAP
const Menu = require('../models/Menu');

// @desc    Dapatkan semua menu
// @route   GET /api/menu
exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Tambah menu baru
// @route   POST /api/menu
exports.createMenu = async (req, res) => {
  try {
    const { name, price, category, image, stock } = req.body;
    const newMenu = new Menu({ name, price, category, image, stock });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update menu
// @route   PUT /api/menu/:id
exports.updateMenu = async (req, res) => {
  try {
    const { name, price, category, image, stock } = req.body;
    let menu = await Menu.findById(req.params.id);

    if (!menu) {
      return res.status(404).json({ message: 'Menu tidak ditemukan' });
    }

    menu.name = name;
    menu.price = price;
    menu.category = category;
    menu.image = image;
    menu.stock = stock;

    await menu.save();
    res.json(menu);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Hapus menu
// @route   DELETE /api/menu/:id
exports.deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if (!menu) {
      return res.status(404).json({ message: 'Menu tidak ditemukan' });
    }

    await menu.deleteOne(); // Gunakan deleteOne() atau remove()
    res.json({ message: 'Menu berhasil dihapus' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};