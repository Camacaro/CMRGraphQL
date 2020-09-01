
const Pedido = require('../../pedido.model');

module.exports.obtenerPedidoEstado = async (_, {estado}, ctx) => {

  const pedidos = await Pedido.find({ vendedor: ctx.usuario.id, estado})

  return pedidos
}