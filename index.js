const { ApolloServer } = require("apollo-server");
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const { verificarToken } = require("./helpers/verificarToken");
const conectarDB = require("./config/db");

const usuarioTypeDefs = require('./apis/usuarios/usuario.typeDefs')
const usuarioResolvers = require('./apis/usuarios/usuario.resolvers')

const productoTypeDefs = require('./apis/productos/producto.typeDefs')
const productoResolvers = require('./apis/productos/producto.resolvers')

const clienteTypeDefs = require('./apis/cliente/cliente.typeDefs')
const clienteResolvers = require('./apis/cliente/cliente.resolvers');

const typeDefs = mergeTypeDefs([
  usuarioTypeDefs,
  productoTypeDefs,
  clienteTypeDefs
], { all: true });

const resolvers = mergeResolvers([
  usuarioResolvers,
  productoResolvers,
  clienteResolvers
]);

conectarDB()

// Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
    
    const token = req.headers['authorization'] || ''

    if(token) {

      try {
        const usuario = verificarToken(token, process.env.SEED_TOKEN);
        
        return {
          usuario
        };

      } catch (error) {
        console.log(error)
        console.log('context Error')
      }
    }
  }
});

// arrancar el servidro
server.listen().then( ({url}) => {
  console.log( `Servidor listo en la URL ${url}` )
} )