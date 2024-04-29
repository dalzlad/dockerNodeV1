//console.log("Hello World");
const express = require('express');
const path = require('path');

const app = express();

// Establece el directorio donde se encuentran los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Define una ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Escucha en un puerto específico (por ejemplo, 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Node.js corriendo en el puerto ${PORT}`);
});