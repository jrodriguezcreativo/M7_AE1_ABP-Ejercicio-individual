// Cargar las variables de entorno
require('dotenv').config()

// Importar la clase Pool del paquete 'pg'
const { Pool } = require('pg')

// Crear una instancia del Pool de conexiones
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

// Confirmar conexión o mostrar errores
pool.on('connect', () => {
  console.log('Conectado a la base de datos PostgreSQL')
})

pool.on('error', (err) => {
  console.error('Error en la conexión con PostgreSQL:', err.message)
})

// Exportar el pool para usarlo en otros archivos
module.exports = pool

