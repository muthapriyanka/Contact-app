const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contacts');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/contacts', contactRoutes);

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));