const express = require('express');
const router = express.Router();
const partidoSchema = require('../models/partido')

//Crear partido
router.post('/partidos',(req,res)=>{
const partido = partidoSchema(req.body);
partido.save()
.then((data)=> res.json(data))
.catch((error) => res.json({message: error}));
})

//Buscar partidos
router.get('/partidos',(req,res)=>{
    partidoSchema.find()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
    })

    //Buscar partido
router.get('/partidos/:id',(req,res)=>{
    const {id} = req.params;
    partidoSchema.findById(id)
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
    })


        //Actualizar partido
router.put('/partidos/:id',(req,res)=>{
    const {id} = req.params;
    const {idTorneo, idEquipo1, idEquipo2,
        golesEquipo1, golesEquipo2, 
        observacion} = req.body;
    partidoSchema.updateOne({_id: id},{$set:{idTorneo,
    idEquipo1,idEquipo2,golesEquipo1,golesEquipo2,observacion}})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
    })

    //Eliminar partido
     router.delete('/partidos/:id',(req,res)=>{
     const {id} = req.params;
     partidoSchema.remove({_id: id})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
            })




module.exports = router;