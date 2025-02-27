const AsignacionProductoService = require('../services/asignacionProducto.service');

class AsignacionProductoController {
    async getAllAsignacionesActivas(req, res) {
        try {
            const asignaciones = await AsignacionProductoService.getAllAsignacionesActivas();
            res.json(asignaciones);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllAsignacionesProductosByPersona(req, res) {
        try {
            const { personaId } = req.params;
            const asignaciones = await AsignacionProductoService.getAllAsignacionesProductosByPersona(personaId);
            res.json(asignaciones);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createAsignacionProducto(req, res) {
        try {
            const { personaId, productoId } = req.body;

            if (!personaId || personaId === '' || personaId === null || personaId === undefined) {
                throw new Error('El ID de la persona es requerido');
            }

            if (!productoId || productoId === '' || productoId === null || productoId === undefined) {
                throw new Error('El ID del producto es requerido');
            }

            const asignacionCreada = await AsignacionProductoService.createAsignacionProducto(personaId, productoId);
            res.status(201).json(asignacionCreada);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async inactiveStatusAsignacionProducto(req, res) {
        try {
            const { id } = req.params;
            const asignacion = await AsignacionProductoService.inactiveStatusAsignacionProducto(id);
            res.json(asignacion);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAsignacionProductoById(req, res) {
        try {
            const { id } = req.params;
            const asignacion = await AsignacionProductoService.getAsignacionProductoById(id);
            res.json(asignacion);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new AsignacionProductoController();