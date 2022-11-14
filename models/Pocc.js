/* eslint-disable func-names */
const mongoose = require('mongoose');

const poccSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  properties: {
    type: {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      image: {
        type: String,
      },
    },
  },
  dateRegistered: {
    type: Date,
  },
  course: {
    type: {
      name: {
        type: String,
      },
      school: {
        type: String,
      },
      date: {
        type: String,
      },
      courseId: {
        type: String,
      },
    },
  },
  quantityAvailable: {
    type: Number,
  },
  status: {
    type: String,
  },
  creator: {
    type: {
      pocc: {
        type: mongoose.Types.ObjectId,
        ref: 'teacher',
      },
    },
  },
}, { timestamps: true });

module.exports = mongoose.model('pocc', poccSchema);
