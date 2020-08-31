const Producto = require("../../producto.model")

module.exports.nuevoProducto = async (_, {input}) => {
  try {

    const producto = new Producto(input);

    const resultado = await producto.save();

    return resultado;

  } catch (error) {
    console.log(error)
  }
}