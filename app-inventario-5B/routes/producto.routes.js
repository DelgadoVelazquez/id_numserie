const express = require('express');
const ProductoController = require('../controllers/producto.controller');
const asignacionProductoController = require('../controllers/asignacionProducto.controller');

const router = express.Router();

// Obtener todos los productos
router.get('/', ProductoController.getAllProductos);

// Obtener un producto por ID
router.get('/id/:id', ProductoController.getProductoById);

// Obtener un producto por número de serie
router.get('/numSerie/:numSerie', ProductoController.getProductoByNumSerie);

// Crear un nuevo producto
router.post('/', ProductoController.createProducto);

// Actualizar un producto
router.put('/:id', ProductoController.updateProducto);

// Eliminar un producto por ID
router.delete('/:id', ProductoController.deleteProducto);

// Obtener asignaciones de productos por persona
router.get('/idPersona/:id', asignacionProductoController.getAllAsignacionesProductosByPersona);

module.exports = router;

// router.post('/')