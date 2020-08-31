
const Cliente = require("../../cliente.model")

module.exports.obtenerCliente = async (_, { id }, ctx) => {

  const cliente = await Cliente.findById(id)

  if( !cliente ) {
    throw new Error('Cliente no encontrado')
  }

  if( cliente.vendedor.toString() !== ctx.usuario.id ) {
    throw new Error('No tienes las credenciales')
  }

  return cliente;

}