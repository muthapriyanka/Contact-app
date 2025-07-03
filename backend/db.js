const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./contacts.db');

db.serialize(() => {
  db.run("CREATE TABLE contacts (id INTEGER PRIMARY KEY, name TEXT, email TEXT, phone TEXT)");
});

module.exports = db;