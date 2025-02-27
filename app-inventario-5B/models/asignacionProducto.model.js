const mongoose = require('mongoose');

const AsignacionProductoSchema = new mongoose.Schema({
    persona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Persona',
        required: true
    },
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    fechaAsignacion: {
        type: Date,
        required: true,
        default: Date.now
    },
    estado: {
        type: String,
        required: true,
        enum: ['activo', 'inactivo'],
        default: 'activo'
    }
});

module.exports = mongoose.model('AsignacionProducto', AsignacionProductoSchema);