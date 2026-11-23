const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  pickup: { type: String, required: true, trim: true },
  destination: { type: String, required: true, trim: true },
  rideType: { type: String, enum: ['Go', 'Mini', 'Premium'], default: 'Go' },
  distanceKm: { type: Number, required: true, min: 0 },
  durationMinutes: { type: Number, required: true, min: 0 },
  fare: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ['Booked', 'Cancelled', 'Completed'], default: 'Booked' }
}, { timestamps: true });

module.exports = mongoose.model('Ride', rideSchema);
