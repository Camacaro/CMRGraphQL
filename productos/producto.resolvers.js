const { nuevoProducto } = require("./resolvers/mutations/nuevoProducto");
const { actualizarProducto } = require("./resolvers/mutations/actualizarProducto");
const { eliminarProducto } = require("./resolvers/mutations/eliminarProducto");

const { obtenerProductos } = require("./resolvers/querys/obtenerProductos");
const { obtenerProducto } = require("./resolvers/querys/obtenerProducto");

const resolvers = {
  Query: {
    obtenerProductos,
    obtenerProducto,
  },
  Mutation: {
    nuevoProducto,
    actualizarProducto,
    eliminarProducto
  }
};

module.exports = resolvers;
