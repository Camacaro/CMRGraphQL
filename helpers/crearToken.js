
const jwt = require('jsonwebtoken');

module.exports.crearToken = (usuario, seed, expiresIn) => {

  const { id, email, nombre, apellido  } = usuario

  return jwt.sign( { id, email, nombre, apellido }, seed, { expiresIn } )
}

