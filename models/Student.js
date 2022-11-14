/* eslint-disable func-names */
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
  address: {
    type: String,
    default: false,
  },
  school: {
    type: String,
  },
  poccMinted: {
    type: [
      {
        pocc: {
          type: mongoose.Types.ObjectId,
          ref: 'pocc',
        },
        addressContract: {
          type: String,
        },
        tronscanReference: {
          type: String,
        }
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

module.exports = mongoose.model('student', studentSchema);

