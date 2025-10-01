const express = require('express');
const hexToRgb = require('./utils/hexToRgb');

const app = express();

app.get('/api/hex-to-rgb', (req, res) => {
  const { hex } = req.query;
  try {
    const result = hexToRgb(hex || '');
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app;
