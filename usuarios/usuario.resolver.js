const { nuevoUsuario } = require("./resolvers/mutations/nuevoUsuario");
const { obtenerCurso } = require("./resolvers/querys/obtenerCurso");
const { autenticarUsuario } = require("./resolvers/mutations/autenticarUsuario");

const resolvers = {
  Query: {
    obtenerCurso,
  },
  Mutation: {
    nuevoUsuario,
    autenticarUsuario
  }
};

module.exports = resolvers;
