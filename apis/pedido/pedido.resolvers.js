const { nuevoPedido } = require("./resolvers/mutations/nuevoPedido");

const resolvers = {
  Query: {

  },
  Mutation: {
    nuevoPedido
  }
};

module.exports = resolvers;
