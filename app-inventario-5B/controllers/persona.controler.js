const PersonaService = require('../services/persona.servise'); // Asegúrate de que la ruta sea correcta

class PersonaController {
  // Obtener todas las personas
  async getAllPersona(req, res) {
    try {
      const personas = await PersonaService.getAllPersonas();
      res.status(200).json(personas);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Obtener una persona por su ID
  async getPersoneById(req, res) {
    try {
      const personaId = req.params.id;
      if (!personaId || personaId === '' || personaId === null || personaId === undefined) {
        throw new Error('El id es requerido');
      }
      const persona = await PersonaService.getPersoneById(personaId);
      res.json(persona);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Crear una nueva persona
  async createPersona(req, res) {
    try {
      const persona = await PersonaService.createPersona(req.body);
      res.status(201).json(persona);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Actualizar una persona existente
  async updatePersona(req, res) {
    try {
      const personaId = req.params.id;
      if (!personaId || personaId === '' || personaId === null || personaId === undefined) {
        throw new Error('El id de la persona es requerido');
      }
      const persona = await PersonaService.updatePersona(personaId, req.body);
      res.json(persona);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Eliminar una persona
  async deletePersona(req, res) {
    try {
      const personaId = req.params.id;
      if (!personaId || personaId === '' || personaId === null || personaId === undefined) {
        throw new Error('El id de la persona es requerido');
      }
      await PersonaService.deletePersona(personaId);
      res.status(204).json({ message: 'Persona eliminada correctamente' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new PersonaController(); // Exportar una instancia del controlador