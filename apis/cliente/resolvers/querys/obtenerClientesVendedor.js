
const Cliente = require("../../cliente.model")


module.exports.obtenerClientesVendedor = async (_, {}, ctx) => {

  if( !ctx.usuario ) throw new Error('you must be logged in to perform this action')

  const clientes = await Cliente.find({vendedor: ctx.usuario.id})

  return clientes;
}