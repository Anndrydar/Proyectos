const mongoose = require('mongoose');

const equipoSchema = mongoose.Schema({

    nombre:{
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require: true
    },
    serie:{
        type: String,
        require: true
    }
 
    });
    
    module.exports = mongoose.model('equipo',equipoSchema);