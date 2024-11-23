const express = require('express');
const bodyParser = require('body-parser');
const patientsRoutes = require('./routes/patients');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/patients', patientsRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Hospital Management System</h1><p>Use /patients to manage patient data.</p>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
