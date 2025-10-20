const express = require('express')
const app = express()
const librosRouter = require('./routes/libros')

// Puerto donde se ejecutará el servidor
const PORT = 3000

// Middleware para interpretar JSON
app.use(express.json())

// Rutas principales
app.use('/libros', librosRouter)

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente')
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})
