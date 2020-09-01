
const Pedido = require('../../pedido.model');

module.exports.obtenerPedidos = async () => {
  try {
    const pedidos = await Pedido.find({})
    return pedidos
  } catch (error) {
    console.log(error)
  }
}