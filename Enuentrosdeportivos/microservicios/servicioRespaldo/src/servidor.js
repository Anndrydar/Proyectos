
const  express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();
const ruta1 = require('./routes/partido');
const ruta2 = require('./routes/equipo');
const ruta3 = require('./routes/torneo');

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(cors());
app.use('/micro', ruta1);
app.use('/micro', ruta2);
app.use('/micro', ruta3);



//Conexion a la BD de mongoatlas
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a mongoDB'))
  .catch((error) => console.error(error));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));




























