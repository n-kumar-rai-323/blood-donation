const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloodDonorSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
    unique: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  lastDonationDate: {
    type: Date,
    default: null,
  },
  canDonate: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update updatedAt on save
bloodDonorSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Basic check before saving to determine if the donor can donate
bloodDonorSchema.pre('save', function(next) {
  if (this.lastDonationDate) {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3); // Assuming 3 months interval
    if (this.lastDonationDate > threeMonthsAgo) {
      this.canDonate = false;
    } else {
      this.canDonate = true;
    }
  }
  next();
});

const BloodDonor = mongoose.model('BloodDonor', bloodDonorSchema);

module.exports = BloodDonor;