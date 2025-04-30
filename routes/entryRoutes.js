const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// Get all entries
router.get('/', async (req, res) => {
  const entries = await Entry.find().sort({ createdAt: -1 });
  res.json(entries);
});

// Add new entry
router.post('/', async (req, res) => {
  const entry = new Entry(req.body);
  const saved = await entry.save();
  res.json(saved);
});

// Delete entry
router.delete('/:id', async (req, res) => {
  await Entry.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Update entry
router.put('/:id', async (req, res) => {
  const updated = await Entry.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
