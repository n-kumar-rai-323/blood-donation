const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloodDonationSchema = new Schema({
  requesterId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Could be a patient or a hospital admin
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: [true, "Please specify the required blood group"],
  },
  quantityUnits: {
    type: Number,
    required: [true, "Please specify the number of units required"],
    min: 1,
  },
  reason: {
    type: String,
    required: [true, "Please provide the reason for the request"],
  },
  hospital: {
    type: String,
    required: [true, "Please specify the hospital name"],
  },
  location: { // Location of the requesting hospital or patient
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere',
    },
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'fulfilled', 'rejected', 'cancelled'],
    default: 'pending',
  },
  urgency: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium',
  },
  requestDate: {
    type: Date,
    default: Date.now,
  },
  fulfilledDate: {
    type: Date,
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const BloodRequest = mongoose.model('BloodDonation', bloodDonationSchema);

module.exports = BloodRequest;