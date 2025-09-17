const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Define Routes
app.use('/api/menu', require('./routes/menuRoutes'));
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));
// ... routes lainnya

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));