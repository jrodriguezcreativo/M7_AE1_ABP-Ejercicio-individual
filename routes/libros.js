const express = require('express')
const router = express.Router()
const pool = require('../db/pool')

// Ruta GET para obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM libros')
    res.json(result.rows)
  } catch (error) {
    console.error('Error al obtener los libros:', error.message)
    res.status(500).json({ error: 'Error al obtener los libros' })
  }
})

module.exports = router
