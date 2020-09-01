
const Pedido = require('../../pedido.model');

module.exports.obtenerPedidosVendedor = async (_, {}, ctx) => {
  try {
    const pedidos = await Pedido.find({ vendedor: ctx.usuario.id })
    return pedidos
  } catch (error) {
    console.log(error)
  }
}