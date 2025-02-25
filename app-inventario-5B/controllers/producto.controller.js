const ProductoService = require('../services/producto.service');

class ProductoController {
    async getAllProductos(req, res) {
        try {
            const productos = await ProductoService.getAllProductos();
            res.json(productos);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    async getProductoById(req, res) {
        try {
            const producto = await ProductoService.getProductoById(req.params.id);
            if (!producto) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(producto);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    async getProductoByNumSerie(req, res) {
        try {
            const producto = await ProductoService.getProductoByNumSerie(req.params.numSerie);
            if (!producto) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(producto);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    async createProducto(req, res) {
        try {
            if (!req.body || Object.keys(req.body).length === 0) {
                return res.status(400).json({ message: 'Datos del producto no proporcionados' });
            }
            const producto = await ProductoService.createProducto(req.body);
            res.status(201).json(producto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateProducto(req, res) {
        try {
            const { id } = req.params;
            const datosActualizados = req.body;
            if (!datosActualizados || Object.keys(datosActualizados).length === 0) {
                return res.status(400).json({ message: 'Datos de actualización no proporcionados' });
            }
            const productoActualizado = await ProductoService.updateProducto(id, datosActualizados);
            if (!productoActualizado) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(productoActualizado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteProducto(req, res) {
        try {
            const { id } = req.params;
            const productoEliminado = await ProductoService.deleteProducto(id);
            if (!productoEliminado) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    async contarProductosByYear(req, res) {
        try {
            const { year } = req.params;
            if (!year || isNaN(year)) {
                return res.status(400).json({ message: 'Año no válido' });
            }
            const total = await ProductoService.contarProductosByYear(parseInt(year));
            res.json({ total });
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
    async updateProducto(req, res) {
        try {
           const producto = await ProductoService.updateProducto(req.params.id,req.body);
           res.json(producto)
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }


    
}

module.exports = new ProductoController();