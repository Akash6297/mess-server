const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  type: { type: String, enum: ['expense', 'deposit'], required: true },
  amount: { type: Number, required: true },
  byWhom: { type: String, required: true },
  date: { type: Date, required: true },
  note: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Entry', entrySchema);
