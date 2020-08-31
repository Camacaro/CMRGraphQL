const { nuevoUsuario } = require("./resolvers/mutations/nuevoUsuario");
const { obtenerCurso } = require("./resolvers/querys/obtenerCurso");
const { autenticarUsuario } = require("./resolvers/mutations/autenticarUsuario");
const { obtenerUsuario } = require("./resolvers/querys/obtenerUsuario");

const resolvers = {
  Query: {
    obtenerCurso,
    obtenerUsuario
  },
  Mutation: {
    nuevoUsuario,
    autenticarUsuario
  }
};

module.exports = resolvers;
