const { verificarToken } = require("../../../../helpers/verificarToken")

module.exports.obtenerUsuario =  (_, { token }) => {

  const usuarioId = verificarToken(token, process.env.SEED_TOKEN)

  return usuarioId;
}