const express = require('express');
const personaController = require('../controllers/persona.controler');
const router = express.Router();

// Obtener todas las personas
router.get('/', personaController.getAllPersona);
router.get('/id/:id', personaController.getPersoneById);
router.post('/', personaController.createPersona);
router.put('/:id', personaController.updatePersona); // Corregido

module.exports = router;
