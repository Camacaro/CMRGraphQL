

const bcryptjs = require('bcryptjs');
const Usuario = require("../../usuario.model");

module.exports.nuevoUsuario = async (_, { input }) =>  {

  const { email, password } = input;
  
  // Revisar si el usuario ya esta registrado
  const existeUsuario = await Usuario.findOne({email});

  if( existeUsuario ) {
    throw new Error('El usuario ya esta registrado.')
  }

  // Hashear su password
  const salt = bcryptjs.genSaltSync(10);
  input.password = bcryptjs.hashSync( password, salt )

  // Guardarlo en ka base de datos
  try {
    const usuario = new Usuario(input);
    await usuario.save()
    return usuario
  } catch (error) {
    console.log(error)
  }
}