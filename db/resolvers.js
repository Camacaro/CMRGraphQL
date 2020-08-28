
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require("../models/Usuario");

const crearToken = (usuario, seed, expiration) => {

  const { id, email, nombre, apelli  } = usuario

  // return jwt.sign(  )
  return 'xxxxx'
}

const resolvers = {
  Query: {
    obtenerCurso: () => "Algo"
  },
  Mutation: {
    nuevoUsuario: async (_, { input }) =>  {

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
    },

    autenticarUsuario: async (_, { input }) => {

      const { email, password } = input;
      
      // Si el usuario existe
      const existeUsuario = await Usuario.findOne({email})
      if( existeUsuario ) {
        throw new Error('El usuario ya esta registrado.')
      }

      // Revisar si el password es corres
      const validPassword = bcryptjs.compareSync(password, existeUsuario.password)
      if( !validPassword ) {
        throw new Error('El password es Incorrecto')
      }

      // Crear el token
      return {
        toke: crearToken(existeUsuario, process.env.SEED_TOKEN, '24h')
      }
    }
  }
};

module.exports = resolvers;
