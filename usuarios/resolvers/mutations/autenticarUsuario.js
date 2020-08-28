
const bcryptjs = require('bcryptjs');
const Usuario = require("../../usuario.model");
const { crearToken } = require('../../../helpers/crearToken');

module.exports.autenticarUsuario = async (_, { input }) => {

  const { email, password } = input;
  
  // Si el usuario existe
  const existeUsuario = await Usuario.findOne({email})
  if( !existeUsuario ) {
    throw new Error('El usuario no existe.')
  }

  // Revisar si el password es corres
  const validPassword = bcryptjs.compareSync(password, existeUsuario.password)
  if( !validPassword ) {
    throw new Error('El password es Incorrecto')
  }

  // Crear el token
  return {
    token: crearToken(existeUsuario, process.env.SEED_TOKEN, '24h' )
  }
}