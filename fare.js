const RATES = {
  Go: { base: 40, perKm: 12, perMinute: 1 },
  Mini: { base: 55, perKm: 15, perMinute: 1.2 },
  Premium: { base: 90, perKm: 22, perMinute: 1.5 }
};

function calculateFare(distanceKm, durationMinutes, rideType = 'Go') {
  const rate = RATES[rideType];
  if (!rate) throw new Error('Invalid ride type');
  const total = rate.base + (distanceKm * rate.perKm) + (durationMinutes * rate.perMinute);
  return Math.round(total);
}
module.exports = { calculateFare, RATES };
