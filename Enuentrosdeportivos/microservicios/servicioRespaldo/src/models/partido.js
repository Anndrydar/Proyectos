const mongoose = require('mongoose');

const partidoSchema = mongoose.Schema({

idTorneo:{
    type: String,
    require: true
},
idEquipo1:{
    type: String,
    require: true
},
idEquipo2:{
    type: String,
    require: true
},
golesEquipo1:{
    type: Number,
    require: true
},
golesEquipo2:{
    type: Number,
    require: true
},
observacion:{
    type: String,
    require: true
}
});

module.exports = mongoose.model('partido',partidoSchema);