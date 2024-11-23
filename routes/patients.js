const express = require('express');
const router = express.Router();

// Dummy data array
let patients = [
    { id: 1, name: 'John Doe', age: 30, condition: 'Flu' },
    { id: 2, name: 'Jane Smith', age: 40, condition: 'Diabetes' },
];

// Get all patients
router.get('/', (req, res) => {
    res.json(patients);
});

// Get a single patient by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const patient = patients.find(p => p.id === id);
    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
});

// Add a new patient
router.post('/', (req, res) => {
    const { name, age, condition } = req.body;
    const newPatient = {
        id: patients.length + 1,
        name,
        age,
        condition,
    };
    patients.push(newPatient);
    res.status(201).json(newPatient);
});

// Update an existing patient by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, condition } = req.body;
    const patient = patients.find(p => p.id === id);
    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }
    patient.name = name || patient.name;
    patient.age = age || patient.age;
    patient.condition = condition || patient.condition;
    res.json(patient);
});

// Delete a patient by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = patients.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Patient not found' });
    }
    patients.splice(index, 1);
    res.json({ message: 'Patient deleted successfully' });
});

module.exports = router;
