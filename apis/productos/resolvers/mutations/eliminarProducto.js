
const Producto = require("../../producto.model")

module.exports.eliminarProducto = async (_, {id}) => {

  let producto = await Producto.findById(id);
    
  if(!producto) {
    throw new Error('Producto no encontrado')
  }

  await Producto.findByIdAndDelete({_id: id});

  return "Producto Eliminado "
}