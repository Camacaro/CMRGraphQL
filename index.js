const { ApolloServer, gql } = require("apollo-server");
const { readFileSync } = require('fs');
const { join } = require('path');

const conectarDB = require("./config/db");
const resolvers = require("./db/resolvers");
const typeDefs = readFileSync( join(__dirname, 'db', 'schema.graphql'), 'utf-8' );

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