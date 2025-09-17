// backend/models/Menu.js - SUDAH BENAR
const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }, // <-- Ini untuk menyimpan URL
  stock: { type: Number, required: true }
});

module.exports = mongoose.model('Menu', MenuSchema);