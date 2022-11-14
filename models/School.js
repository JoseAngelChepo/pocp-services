/* eslint-disable func-names */
const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  },
  details: {
    type: Object,
  },
  email: {
    type: String,
    required: true,
  },
  teachersRegistered: {
    type: [
      {
        pocc: {
          type: mongoose.Types.ObjectId,
          ref: 'teacher',
        },
      },
    ],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('school', schoolSchema);
