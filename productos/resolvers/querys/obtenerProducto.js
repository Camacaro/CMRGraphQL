const Producto = require("../../producto.model")

module.exports.obtenerProducto = async (_, {id}) => {
  try {
    const producto = await Producto.findById(id);
    
    if(!producto) {
      throw new Error('Producto no encontrado')
    }

    return producto
  } catch (error) {
    console.log(error)
  }
}