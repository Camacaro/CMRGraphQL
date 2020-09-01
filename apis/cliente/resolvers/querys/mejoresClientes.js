
const Pedido = require("../../../pedido/pedido.model")

module.exports.mejoresClientes = async () => {
  
  const clientes = await Pedido.aggregate([
    { $match: { estado: 'COMPLETADO' } },
    { $group: {
      _id: "$cliente",
      total: { $sum: '$total' }
    } },
    {
      $lookup: {
        from: 'clientes',
        localField: '_id',
        foreignField: '_id',
        as: 'cliente'
      }
    },
    {
      $sort: { total: -1 } // mayor primero
    }
  ]);

  return clientes;
}