const { nuevoCliente } = require("./resolvers/mutations/nuevoCliente");
const { obtenerClientes } = require("./resolvers/querys/obtenerClientes");
const { obtenerClientesVendedor } = require("./resolvers/querys/obtenerClientesVendedor");
const { obtenerCliente } = require("./resolvers/querys/obtenerCliente");
const { actualizarCliente } = require("./resolvers/mutations/actualizarCliente");
const { eliminarCliente } = require("./resolvers/mutations/eliminarCliente");

const resolvers = {
  Query: {
    obtenerClientes,
    obtenerClientesVendedor,
    obtenerCliente
  },
  Mutation: {
    nuevoCliente,
    actualizarCliente,
    eliminarCliente
  }
};

module.exports = resolvers;
