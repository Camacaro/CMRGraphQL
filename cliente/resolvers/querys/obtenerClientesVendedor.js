
const Cliente = require("../../cliente.model")


module.exports.obtenerClientesVendedor = async (_, {}, ctx) => {

  const clientes = await Cliente.find({vendedor: ctx.usuario.id})

  return clientes;
}