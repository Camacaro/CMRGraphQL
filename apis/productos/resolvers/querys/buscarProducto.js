
const Producto = require("../../producto.model")

module.exports.buscarProducto = async (_, { texto }) => {
  const productos = await Producto.find( {$text: { $search: texto } } ).limit(10)

  return productos;
}