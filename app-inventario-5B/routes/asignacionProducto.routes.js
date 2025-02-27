const express = require('express');
const AsignacionProductoController = require('../controllers/asignacionProducto.controller');

const router = express.Router();

// Obtener todas las asignaciones activas
router.get('/', AsignacionProductoController.getAllAsignacionesActivas);

// Obtener asignaciones de productos por persona
router.get('/persona/:personaId', AsignacionProductoController.getAllAsignacionesProductosByPersona);

// Crear una nueva asignación de producto
router.post('/', AsignacionProductoController.createAsignacionProducto);

// Inactivar una asignación de producto
router.put('/inactivar/:id', AsignacionProductoController.inactiveStatusAsignacionProducto);

// Obtener una asignación de producto por ID
router.get('/:id', AsignacionProductoController.getAsignacionProductoById);



module.exports = router;