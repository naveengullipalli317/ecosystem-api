require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const enrollRoutes = require('./routes/enroll');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/enroll', enrollRoutes);
app.use('/admin', adminRoutes);
app.use('/dashboard', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});