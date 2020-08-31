const Producto = require("../../producto.model")

module.exports.actualizarProducto = async (_, {id, input}) => {

  let producto = await Producto.findById(id);
    
  if(!producto) {
    throw new Error('Producto no encontrado')
  }

  producto = await Producto.findByIdAndUpdate( {_id: id }, input, { new: true } );

  return producto;
}