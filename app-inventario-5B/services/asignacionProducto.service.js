const AsignacionProductoRepository = require('../repositories/asignacionProducto.repository');
const personaRepository = require('../repositories/persona.repository')
const ProductoRepository= require('../repositories/producto.repository')
class AsignacionProductoService {
    async getAllAsignacionesActivas() {
        return await AsignacionProductoRepository.getAllAsignacionesActivas();
    }

    async getAllAsignacionesProductosByPersona(personaId) {
        return await AsignacionProductoRepository.getAllAsignacionesProductosByPersona(personaId);
    }

    async createAsignacionProducto(personaId,) {
        if (!asignacion.persona || !asignacion.producto) {
            throw new Error('Persona y Producto son requeridos');
        }
    if(!producto){
        throw new('El producto no existe')
    }
    if(!persona){
        throw new Error('La persona no existe')
    }
        return await AsignacionProductoRepository.createAsignacionProducto(asignacion);
    }

    async inactiveStatusAsignacionProducto(id) {
        const asignacion = await AsignacionProductoRepository.getAsignacionProductoById(id);
        if (!asignacion) {
            throw new Error('Asignación no encontrada');
        }
        return await AsignacionProductoRepository.inactiveStatusAsignacionProducto(id);
    }

    async getAsignacionProductoById(id) {
        const asignacion = await AsignacionProductoRepository.getAsignacionProductoById(id);
        if (!asignacion) {
            throw new Error('Asignación no encontrada');
        }
        return asignacion;
    }
}

module.exports = new AsignacionProductoService();