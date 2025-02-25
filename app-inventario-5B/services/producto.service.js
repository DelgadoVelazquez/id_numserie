const ProductoRepository = require('../repositories/producto.repository');
const validaciones = require('../utils/validation');

class ProductoService {
    async getAllProductos() {
        return await ProductoRepository.getAllProductos();
    }

    async getProductoById(id) {
        const producto = await ProductoRepository.getProductoById(id);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        return producto;
    }

    async getProductoByNumSerie(numSerie) {
        const producto = await ProductoRepository.getProductoByNumSerie(numSerie);
        if (!producto) {
            throw new Error('Producto con ese número de serie no encontrado');
        }
        return producto;
    }

    async createProducto(producto) {
        if (!producto.nombre || !producto.precio || !producto.fechaAdquisicion || !producto.numSerie) {
            throw new Error('Todos los campos son requeridos');
        }

        if (producto.precio < 1) {
            throw new Error('El precio debe ser mayor a 0');
        }

        return await ProductoRepository.createProducto(producto);
    }

    async updateProducto(id, producto) {
        const productoExistente = await ProductoRepository.getProductoById(id);
        if (!productoExistente) {
            throw new Error('Producto no encontrado');
        }

        if (!producto.nombre || !producto.precio || !producto.fechaAdquisicion || !producto.numSerie ) {
            throw new Error('Todos los campos son requeridos');
        }

        if (producto.precio < 1) {
            throw new Error('El precio debe ser mayor a 0');
        }

        if (!validaciones.esFechaValida(producto.fechaAdquisicion)) {
            throw new Error('La fecha de adquisición no tiene el formato correcto');
        }

        const productoConMismoNumSerie = await ProductoRepository.getProductoByNumSerieAndNotId(id, producto.numSerie);
        if (productoConMismoNumSerie) {
            throw new Error('El número de serie ya existe');
        }

        return await ProductoRepository.updateProducto(id, producto);
    }

    async deleteProducto(id) {
        const producto = await ProductoRepository.getProductoById(id);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        return await ProductoRepository.deleteProducto(id);
    }

    async contarProductosByYear(year) {
        return await ProductoRepository.contarProductosByYear(year);
    }
}

module.exports = new ProductoService();