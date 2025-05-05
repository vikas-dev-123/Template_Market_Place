const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  templateName: { type: String, required: true },
  templateCost: { type: Number, required: true },
  templateLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Purchase', purchaseSchema);
