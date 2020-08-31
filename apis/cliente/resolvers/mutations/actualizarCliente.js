
const Cliente = require("../../cliente.model")

module.exports.actualizarCliente = async (_, {id, input}, ctx) => {

  let cliente = await Cliente.findById(id)

  if(!cliente) {
    throw new Error('Ese cliente no existe')
  }

  if( cliente.vendedor.toString() !== ctx.usuario.id ) {
    throw new Error('No tienes las credenciales')
  }

  cliente = await Cliente.findOneAndUpdate({_id: id}, input, {new: true})
  return cliente;
}