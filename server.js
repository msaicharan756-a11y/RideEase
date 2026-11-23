require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const rideRoutes = require('./routes/rides');

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'RideEase backend is running', status: 'ok' }));
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);
app.use((req, res) => res.status(404).json({ message: 'Endpoint not found.' }));
app.use((err, req, res, next) => {
  console.error(err);
  if (err.code === 11000) return res.status(409).json({ message: 'A record with this value already exists.' });
  res.status(500).json({ message: 'Server error. Please try again later.' });
});

const port = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(port, () => console.log(`RideEase API listening on port ${port}`));
}).catch((err) => {
  console.error('Database connection failed:', err.message);
  process.exit(1);
});
