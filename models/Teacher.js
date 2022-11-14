/* eslint-disable func-names */
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    unique: true,
  },
  school: {
    type: String,
  },
  address: {
    type: String,
  },
  poccRegistered: {
    type: [
      {
        pocc: {
          type: mongoose.Types.ObjectId,
          ref: 'pocc',
        },
        nftPoccAddress: {
          type: String,
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

module.exports = mongoose.model('teacher', teacherSchema);
