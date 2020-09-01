const { nuevoPedido } = require("./resolvers/mutations/nuevoPedido");
const { obtenerPedidos } = require("./resolvers/querys/obtenerPedidos");
const { obtenerPedidosVendedor } = require("./resolvers/querys/obtenerPedidosVendedor");
const { obtenerPedido } = require("./resolvers/querys/obtenerPedido");
const { actualizarPedido } = require("./resolvers/mutations/actualizarPedido");
const { eliminarPedido } = require("./resolvers/mutations/eliminarPedido");
const { obtenerPedidoEstado } = require("./resolvers/querys/obtenerPedidoEstado");

const resolvers = {
  Query: {
    obtenerPedidos,
    obtenerPedidosVendedor,
    obtenerPedido,
    obtenerPedidoEstado
  },
  Mutation: {
    nuevoPedido,
    actualizarPedido,
    eliminarPedido
  }
};

module.exports = resolvers;
