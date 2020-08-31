const Cliente = require("../../cliente.model")

module.exports.obtenerClientes = async () => {
  try {
    
    const clientes = await Cliente.find({})

    return clientes;

  } catch (error) {
    console.log(error)
  }
}