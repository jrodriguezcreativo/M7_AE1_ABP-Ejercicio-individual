# M7_AE1_ABP-Ejercicio individual

## Explorador de Libros — Node.js + PostgreSQL

### Descripción
Proyecto individual que implementa una pequeña aplicación **en Node.js con Express** para consultar una base de datos de libros almacenada en **PostgreSQL**.  
El objetivo principal es practicar la conexión a una base de datos mediante el paquete **pg**, aplicando **pooling de conexiones**, variables de entorno y consultas simples.

### Objetivos
- Comprender la configuración de **Express** en Node.js.
- Conectarse a **PostgreSQL** utilizando el paquete `pg` y `dotenv`.
- Aplicar el uso de **Pool** para manejar múltiples conexiones de forma eficiente.
- Crear y consumir rutas que interactúan con la base de datos.
- Manejar errores de conexión y respuestas en formato JSON.

### Tecnologías
- Node.js  
- Express  
- PostgreSQL  
- dotenv (para variables de entorno)

### Estructura del proyecto
```M7_AE1_ABP-Ejercicio individual 
|-- db
  |-- pool.js 
|-- routes 
  |-- libros.js
|-- .env 
|-- server.js 
|-- package.json 
|-- readme.md
```
### Configuración de la Base de datos
```sql
-- Crear la base de datos
CREATE DATABASE biblioteca;

-- Conectarse a la base de datos
\c biblioteca;

-- Crear la tabla libros
CREATE TABLE libros (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  genero VARCHAR(50)
);

-- Insertar algunos registros de ejemplo
INSERT INTO libros (titulo, autor, year, genero) VALUES
('Cien años de soledad', 'Gabriel García Márquez', 1967, 'Realismo mágico'),
('1984', 'George Orwell', 1949, 'Distopía'),
('El Principito', 'Antoine de Saint-Exupéry', 1943, 'Fábula'),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 'Aventura');

```
***Crear un archivo .env en la raíz del proyecto con las credenciales de conexión a PostgreSQL:***
```
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
DB_NAME=biblioteca
```
### Instrucciones básicas
1. Instalar dependencias con `npm install`.  
2. Configurar la conexión a PostgreSQL en el archivo `.env`.  
3. Crear una base de datos y tabla `libros` con algunos registros.  
4. Ejecutar el servidor con `node server.js`.  
5. Consultar los libros desde el navegador o Postman.

### Autor
**Jorge Rodriguez**