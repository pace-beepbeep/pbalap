const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('MongoDB Terhubung...');
  } catch (err) {
    console.error(err.message);
    // Keluar dari proses dengan kegagalan
    process.exit(1);
  }
};

module.exports = connectDB;