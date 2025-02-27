const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personasRoutes = require('./routes/persona.routes');
const productoRoutes = require('./routes/producto.routes');
const asignacionProductoRoutes = require('./routes/asignacionProducto.routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/asignacionProducto', asignacionProductoRoutes);
app.use('/api/personas', personasRoutes);
app.use('/api/productos', productoRoutes);

// Conexión a la base de datos
mongoose.connect('mongodb+srv://20223tn121:L31rAV2kBG0xVtFk@delgado.ecgoe.mongodb.net/Trabajo_22?retryWrites=true&w=majority&appName=Delgado', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión exitosa a la base de datos de MongoDB');
        app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    })
    .catch((err) => console.log('Error al conectar a MongoDB', err));

// mongodb+srv://20223tn121:L31rAV2kBG0xVtFk@delgado.ecgoe.mongodb.net/admin?retryWrites=true&w=majority&appName=Delgado  ,{useNewUrlParser:true, useUnifiedTopology: true}