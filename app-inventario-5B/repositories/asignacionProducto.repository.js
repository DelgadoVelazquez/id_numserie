const AsignacionProducto = require('../models/asignacionProducto.model');

class AsignacionProductoRepository {
    async getAllAsignacionesActivas() {
        return await AsignacionProducto.find({ estado: 'activo' }).populate('producto');
    }

    async getAllAsignacionesProductosByPersona(personaId) {
        return await AsignacionProducto.find({ persona: personaId }).populate('producto');
    }

    async createAsignacionProducto(asignacion) {
        const fechaAsignacion= new Date();
        fechaAsignacion.setHours(0,0,0,0)
        return await AsignacionProducto.create({
            persona:personaId,producto:productoId, fechaAsignacion:fechaAsignacion,estado:'activo'
        });
        return await AsignacionProducto.create(asignacion);
    }
    

    async inactiveStatusAsignacionProducto(id) {
        return await AsignacionProducto.findByIdAndUpdate(
            id,
            { estado: 'inactivo' },
            { new: true }
        );
    }

    async getAsignacionProductoById(id) {
        return await AsignacionProducto.findById(id).populate('persona producto');
    }
}

module.exports = new AsignacionProductoRepository();