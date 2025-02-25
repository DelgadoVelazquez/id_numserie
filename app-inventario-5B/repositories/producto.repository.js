const Producto = require('../models/producto.controller')

class ProductoRepository {
    async getAllProductos() {
        return await Producto.find();
    }

    async getProductoById(id) {
        return await Producto.findById(id);
    }

    async getProductoByNumSerie(numSerie) {
        return await Producto.findOne({ numSerie: numSerie });
    }

    async createProducto(producto) {
        return await Producto.create(producto);
    }

    async updateProducto(id, producto) {
        return await Producto.findByIdAndUpdate(id, producto, { new: true });
    }

    async deleteProducto(id) {
        return await Producto.findByIdAndDelete(id);
    }
    async contarProductosByYear(year) { // Corregido
        const fechaInicio = new Date(`${year}-01-01`);
        const fechaFin = new Date(`${year}-12-31`); // Agregado
        return await Producto.countDocuments({
            fechaAdquisicion: {
                $gte: fechaInicio,
                $lte: fechaFin
            }
        });
    }

    async getProductoByNumSerieAndNotId(id,numSerie){
        return await Producto.findOne({_id:{$ne:id},numSerie:numSerie})

    }
}

module.exports = new ProductoRepository();