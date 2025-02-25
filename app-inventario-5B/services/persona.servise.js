const personaRepository = require('../repositories/persona.repository');
const utils = require('../utils/utils'); // Asegúrate de que la ruta sea correcta

class PersonaService {
  // Obtener todas las personas
  async getAllPersonas() {
    return await personaRepository.getAllPersonas();
  }

  // Obtener una persona por su ID
  async getPersonaById(id) {
    const persona = await personaRepository.getPersonaById(id);
    if (!persona) {
      throw new Error('Persona no encontrada');
    }
    return persona;
  }

  // Crear una nueva persona
  async createPersona(persona) {
    // Validar que todos los campos requeridos estén presentes
    if (!persona.nombre || !persona.apellido || !persona.fechaNacimiento || !persona.rfc || !persona.correo) {
      throw new Error('Todos los campos son requeridos');
    }

    // Validar el RFC y el correo
    utils.validarRFC(persona.rfc);
    utils.validarCorreo(persona.correo);

    // Validar que el RFC no exista en la base de datos
    const personaByRFC = await personaRepository.getPersonaByRFC(persona.rfc);
    if (personaByRFC) {
      throw new Error('El RFC ya existe');
    }

    // Validar que el correo no exista en la base de datos
    const personaByCorreo = await personaRepository.getPersonaByCorreo(persona.correo);
    if (personaByCorreo) {
      throw new Error('El correo ya existe');
    }

    // Validar que la persona sea mayor de edad
    if (utils.calcularEdad(persona.fechaNacimiento) < 18) {
      throw new Error('La persona debe ser mayor de edad');
    }

    // Crear la persona en la base de datos
    const nuevaPersona = await personaRepository.createPersona(persona);
    return nuevaPersona;
  }
}

module.exports = new PersonaService(); // Exportar una instancia del servicio