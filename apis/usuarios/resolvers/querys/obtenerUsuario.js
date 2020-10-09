const { verificarToken } = require("../../../../helpers/verificarToken")

module.exports.obtenerUsuario =  (_, {}, ctx) => {

  const { usuario } = ctx
  // const usuarioId = verificarToken(token, process.env.SEED_TOKEN)
  // return usuarioId;

  return usuario;
}