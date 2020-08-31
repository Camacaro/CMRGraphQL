
const jwt = require('jsonwebtoken');

module.exports.crearToken = (usuario, seed, expiresIn) => {

  const { id, email, nombre, apellio  } = usuario

  return jwt.sign( { id, email, nombre, apellio }, seed, { expiresIn } )
}

