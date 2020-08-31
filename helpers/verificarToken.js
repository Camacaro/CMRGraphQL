

const jwt = require('jsonwebtoken');

module.exports.verificarToken = (token, seed) => {

  const payload = jwt.verify(token, seed);

  return payload;
}