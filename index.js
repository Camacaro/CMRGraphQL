const { ApolloServer } = require("apollo-server");
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const conectarDB = require("./config/db");

const usuarioTypeDefs = require('./usuarios/usuario.typeDefs')
const usuarioResolvers = require('./usuarios/usuario.resolvers')

const productoTypeDefs = require('./productos/producto.typeDefs')
const productoResolvers = require('./productos/producto.resolvers')

const clienteTypeDefs = require('./cliente/cliente.typeDefs')
const clienteResolvers = require('./cliente/cliente.resolvers');
const { verificarToken } = require("./helpers/verificarToken");

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