
const { ApolloServer, gql } = require("apollo-server");

const cursos = [
  {
      titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
      tecnologia: 'JavaScript ES6',
  },
  {
      titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
      tecnologia: 'React',
  },
  {
      titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
      tecnologia: 'Node.js'
  }, 
  {
      titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
      tecnologia: 'React'
  }
];

// Schema
const typeDefs = gql`

  type Curso {
    titulo: String
    tecnologia: String
  }

  type Tecnologia {
    tecnologia: String
  }

  type Query {
    obtenerCurso: Curso
    obtenerCursos: [Curso]
    obtenerTegnologias: [Tecnologia]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    obtenerCurso: () => cursos[0],
    obtenerCursos: () => cursos,
    obtenerTegnologias: () => cursos
  }
}


// Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// arrancar el servidro
server.listen().then( ({url}) => {
  console.log( `Servidor listo en la URL ${url}` )
} )