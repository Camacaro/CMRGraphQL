

const jwt = require('jsonwebtoken');

module.exports.verificarToken = async (token, seed) => {

  const payload = await jwt.verify(token, seed);

  return payload;
}