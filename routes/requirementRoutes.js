const express = require('express');
const router = express.Router();
const Requirement = require('../models/Requirement');

// Get all requirements
router.get('/', async (req, res) => {
  const requirements = await Requirement.find().sort({ createdAt: -1 });
  res.json(requirements);
});

// Add a new requirement
router.post('/', async (req, res) => {
  const requirement = new Requirement(req.body);
  const saved = await requirement.save();
  res.json(saved);
});

// Mark requirement as completed
router.put('/:id', async (req, res) => {
  const updated = await Requirement.findByIdAndUpdate(req.params.id, { fulfilled: true }, { new: true });
  res.json(updated);
});

// Delete requirement
router.delete('/:id', async (req, res) => {
  await Requirement.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
