const { verificarToken } = require("../../../helpers/verificarToken")

module.exports.obtenerUsuario = async (_, { token }) => {

  const usuarioId = await verificarToken(token, process.env.SEED_TOKEN)

  return usuarioId;
}