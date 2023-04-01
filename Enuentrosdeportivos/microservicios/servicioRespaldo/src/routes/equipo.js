const express = require('express');
const router = express.Router();
const equipoSchema = require('../models/equipo')

//Crear equipos
router.post('/equipos',(req,res)=>{
const equipo = equipoSchema(req.body);
equipo.save()
.then((data)=> res.json(data))
.catch((error) => res.json({message: error}));
})

//Buscar equipos
router.get('/equipos',(req,res)=>{
    equipoSchema.find()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
    })


  //Eliminar equipo
  router.delete('/equipos/:id',(req,res)=>{
    const {id} = req.params;
    equipoSchema.remove({_id: id})
   .then((data)=> res.json(data))
   .catch((error) => res.json({message: error}));
           })






    module.exports = router;