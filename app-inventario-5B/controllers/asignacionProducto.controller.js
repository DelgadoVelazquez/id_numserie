const asignacionProductoRepository = require('../repositories/asignacionProducto.repository');
const personaRepository = require('../repositories/persona.repository');
const AsignacionProductoService = require('../services/asignacionProducto.service');
const PersonaService = require('../services/persona.service'); // Corrección en el nombre del archivo

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

            if (!personaId) throw new Error('El ID de la persona es requerido');
            if (!productoId) throw new Error('El ID del producto es requerido');

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

class PersonaController {
    async getAllPersona(req, res) {
        try {
            const personas = await PersonaService.getAllPersonas();
            res.status(200).json(personas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getPersonaById(req, res) { // Corregido el nombre del método
        try {
            const { id } = req.params;
            if (!id) throw new Error('El id es requerido');

            const persona = await PersonaService.getPersonaById(id);
            res.json(persona);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async createPersona(req, res) {
        try {
            const persona = await PersonaService.createPersona(req.body);
            res.status(201).json(persona);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updatePersona(req, res) {
        try {
            const { id } = req.params;
            if (!id) throw new Error('El id de la persona es requerido');

            const persona = await PersonaService.updatePersona(id, req.body);
            res.json(persona);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletePersona(req, res) {
        try {
            const { id } = req.params;
            if (!id) throw new Error('El id de la persona es requerido');

            await PersonaService.deletePersona(id);
            res.status(204).json({ message: 'Persona eliminada correctamente' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async createAsignacionProducto(){
        try{
        if (!personaId||productoRepository.length==0) throw new Error('El ID de la persona es requerido');
        if (!productoId||productoRepository.length==0) throw new Error('El ID del producto es requerido');
         
    }
    async createAsignacionProducto (personaId,productosId){
        const persona = await personaRepository.getPersonaById(personaId);
        if (!personaId||productoRepository.length==0) throw new Error('El ID de la persona es requerido');
        let asignaciones =[]

        for (let index =0; index<productoId.length; index++){
            const productoId = productoId[index]
            try{
                const asignacionCreada = await asignacionProductoRepository
            }

        }

    }


    }
}

module.exports = {
    AsignacionProductoController: new AsignacionProductoController(),
    PersonaController: new PersonaController()
};
