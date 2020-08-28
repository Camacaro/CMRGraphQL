require('dotenv').config({ path: 'variables.env' })
const mongoose = require("mongoose");

const conectarDB = async () => {
  try {
    
    await mongoose.connect( process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    } )

    console.log('BD Conectada')

  } catch (error) {
    console.log('Hubo un error al conectar la base de datos')
    console.log(error)
    process.exit(1); 
  }
}

module.exports = conectarDB;