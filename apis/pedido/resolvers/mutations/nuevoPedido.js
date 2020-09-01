
const Cliente = require("../../../cliente/cliente.model")
const Producto = require("../../../productos/producto.model")
const Pedido = require('../../pedido.model');

module.exports.nuevoPedido = async (_, {input}, ctx) => {

  const { cliente, pedido } = input

  // verificar si el cliente existe o no
  let clienteExiste = await Cliente.findById(cliente)

  if(!clienteExiste) {
    throw new Error('Ese cliente no existe')
  }

  // Verificar si el cliente es del vendedor
  if( clienteExiste.vendedor.toString() !== ctx.usuario.id ) {
    throw new Error('No tienes las credenciales')
  }

  // revisar que el stock este disponible
  for await (const articulo of pedido ) {
    const { id, cantidad } = articulo

    const producto = await Producto.findById(id);

    if( cantidad > producto.existencia ) {
      throw new Error(`El articulo ${producto.nombre} excede la cantidad disponible`)
    } else {
      // Restar la cantidad disponible
      producto.existencia = producto.existencia - cantidad

      await producto.save();
    }
  };

  // Crear un nuevo pedido
  const nuevoPedido = new Pedido(input);

  // asignale el vendedor
  nuevoPedido.vendedor = ctx.usuario.id

  // Guardar en la base de datos
  const resultado = await nuevoPedido.save();
  return resultado
}