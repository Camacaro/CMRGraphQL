const Cliente = require("../../cliente.model")

module.exports.nuevoCliente = async (_, { input }, ctx) => {

  const { email } = input;

  let cliente = await Cliente.findOne({ email })
  
  if (cliente) {
    throw new Error('Ese Cliente ya esta registrado')
  }

  try {
    
    cliente  = new Cliente(input);
    cliente.vendedor = ctx.usuario.id
  
    const resp = await cliente.save();
  
    return resp
  } catch (error) {
    console.log(error)
  }
}