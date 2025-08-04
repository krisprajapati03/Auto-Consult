import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true, // e.g., "Honda Civic ZX 2021"
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  driveType:{
    type: String,
    enum: ['AWD/4WD', 'FrontWheelDrive', 'RearWheelDrive'],
    required: true,
  },
  doors:{
    type:Number,
    enum:[5,4,3,2],
    required: true,
  },
  safetyFeatures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SafetyFeature',
    required: true,
  }],
  fuelType: {
    type: String,
    enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Petrol & CNG'],
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  features: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feature',
    required: true,
  }],
  cylinder:{
    type:Number,
    enum:[2,4,6,8],
    required: true,
  },
  transmission: {
    type: String,
    enum: ['Manual', 'Automatic', 'Semi-Automatic'],
    required: true,
  },
  color: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Color',
    required: true,
  },
  model: {
    type: String,
    required: true, // e.g., "Civic"
  },
  variant: {
    type: String,
    required: true, // e.g., "ZX CVT"
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
  images: [
    {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
  ],
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
  offerId: {
    type: String,
    unique: true,
    required: false,
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