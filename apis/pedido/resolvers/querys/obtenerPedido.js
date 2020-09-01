
const Pedido = require('../../pedido.model');

module.exports.obtenerPedido = async (_, {id}, ctx) => {
  // si el pedidp existe
  const pedido  = await Pedido.findById(id)

  // solo quien lo creo puede verlo
  if ( pedido.vendedor.toString() !== ctx.usuario.id ) {
    throw new Error('No tienes las credenciales')
  }

  return pedido;
}