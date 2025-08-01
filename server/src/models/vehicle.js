import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true, // e.g., "Honda Civic ZX 2021"
  },
  company: {
    type: String,
    required: true, // e.g., "Honda"
  },
  model: {
    type: String,
    required: true, // e.g., "Civic"
  },
  variant: {
    type: String,
    required: true, // e.g., "ZX CVT"
  },
  color: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    enum: ['Manual', 'Automatic'],
    required: true,
  },
  condition: {
    type: String,
    enum: ['New', 'Used'],
    default: 'Used',
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number, // in kilometers
    required: true,
  },
  fuelType: {
    type: String,
    enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'CNG', 'LPG'],
    required: true,
  },
  images: {
    type: [String], // array of image URLs or filenames
    default: [],
  },
  numberOfOwners: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isSold: {
    type: Boolean,
    default: false,
  },
  features: {
    type: [String], // e.g., ['Airbags', 'ABS', 'Sunroof']
    default: [],
  },
  offerId: {
    type: String,
    required: true,
    unique: true,
    length: 6, // 6-digit ID
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;