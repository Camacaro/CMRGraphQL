const { nuevoUsuario } = require("./resolvers/mutations/nuevoUsuario");
const { obtenerCurso } = require("./resolvers/querys/obtenerCurso");
const { autenticarUsuario } = require("./resolvers/mutations/autenticarUsuario");
const { obtenerUsuario } = require("./resolvers/querys/obtenerUsuario");
const { mejoresVendedores } = require("./resolvers/querys/mojoresVendedores");

const resolvers = {
  Query: {
    obtenerCurso,
    obtenerUsuario,
    mejoresVendedores
  },
  Mutation: {
    nuevoUsuario,
    autenticarUsuario
  }
};

module.exports = resolvers;
