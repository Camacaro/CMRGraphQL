
const Pedido = require('../../pedido.model');

module.exports.eliminarPedido = async (_, {id}, ctx) => {

  const pedido = await Pedido.findById(id);
  if(!pedido) {
    throw new Error('El pedido no existe')
  }

  // Verificar si el cliente es del vendedor
  if( pedido.vendedor.toString() !== ctx.usuario.id ) {
    throw new Error('No tienes las credenciales')
  }

  await Pedido.findByIdAndDelete({_id: id});
  return "Pedido eliminado"
}