const { ApolloServer } = require("apollo-server");
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const conectarDB = require("./config/db");

const usuarioTypeDefs = require('./usuarios/usuario.typeDefs')
const usuarioResolvers = require('./usuarios/usuario.resolvers')

const productoTypeDefs = require('./productos/producto.typeDefs')
const productoResolvers = require('./productos/producto.resolvers')


const typeDefs = mergeTypeDefs([usuarioTypeDefs, productoTypeDefs], { all: true });
const resolvers = mergeResolvers([ usuarioResolvers, productoResolvers ]);

conectarDB()

// Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// arrancar el servidro
server.listen().then( ({url}) => {
  console.log( `Servidor listo en la URL ${url}` )
} )