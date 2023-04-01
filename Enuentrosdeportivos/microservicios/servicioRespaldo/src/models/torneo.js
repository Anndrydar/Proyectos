const mongoose = require('mongoose');


const torneoSchema = mongoose.Schema({
    descripcion:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('torneo',torneoSchema);
