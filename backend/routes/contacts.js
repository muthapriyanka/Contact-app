const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
  db.all("SELECT * FROM contacts", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { name, email, phone } = req.body;
  db.run("INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)", [name, email, phone], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

router.put('/:id', (req, res) => {
  const { name, email, phone } = req.body;
  db.run("UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ?", [name, email, phone, req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updated: this.changes });
  });
});

router.delete('/:id', (req, res) => {
  db.run("DELETE FROM contacts WHERE id = ?", [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;