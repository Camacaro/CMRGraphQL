
const Cliente = require("../../cliente.model")

module.exports.eliminarCliente = async (_, {id}, ctx) => {
  let cliente = await Cliente.findById(id)

  if(!cliente) {
    throw new Error('Ese cliente no existe')
  }

  if( cliente.vendedor.toString() !== ctx.usuario.id ) {
    throw new Error('No tienes las credenciales')
  }

  await Cliente.findByIdAndDelete( {_id: id} );
  return "Cliente Eliminado"
}