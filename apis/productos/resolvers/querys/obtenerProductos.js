const Producto = require("../../producto.model")

module.exports.obtenerProductos = async () => {
  try {
    const productos = await Producto.find({});
    return productos
  } catch (error) {
    console.log(error)
  }
}