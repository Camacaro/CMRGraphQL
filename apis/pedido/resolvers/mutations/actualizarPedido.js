
const Cliente = require("../../../cliente/cliente.model")
const Producto = require("../../../productos/producto.model")
const Pedido = require('../../pedido.model');

module.exports.actualizarPedido = async (_, {id, input}, ctx) => {

  const { cliente, pedido } = input;

  // si el pedido existe
  const existePedido = await Pedido.findById(id)
  if(!existePedido) {
    throw new Error('El pedido no existe')
  }
  
  // si el cliente existe
  const existeCliente = await Cliente.findById(cliente)
  if(!existeCliente) {
    throw new Error('El cliente no existe')
  }

  // Verificar si el cliente es del vendedor
  if( existeCliente.vendedor.toString() !== ctx.usuario.id ) {
    throw new Error('No tienes las credenciales')
  }

  if( pedido ) {
    // revisar que el stock este disponible
    for await (const articulo of pedido ) {
      const { id, cantidad } = articulo
  
      const producto = await Producto.findById(id);
  
      if( cantidad > producto.existencia ) {
        throw new Error(`El articulo ${producto.nombre} excede la cantidad disponible`)
      } else {
        // Restar la cantidad disponible
        producto.existencia = producto.existencia - cantidad
  
        await producto.save();
      }
    };
  }

  // guardar el pedido
  const resp = await Pedido.findByIdAndUpdate({_id: id}, input, {new: true})
  return resp
}