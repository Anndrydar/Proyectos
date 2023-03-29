const express = require('express');
const router = express.Router();
const torneoSchema = require('../models/torneo')




//Crear torneos
router.post('/torneos',(req,res)=>{
    const torneo = torneoSchema(req.body);
    torneo.save()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
    })
    
    //Buscar torneos
    router.get('/torneos',(req,res)=>{
        torneoSchema.find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}));
        })
    

        //Eliminar torneo
  router.delete('/torneos/:id',(req,res)=>{
    const {id} = req.params;
    torneoSchema.remove({_id: id})
   .then((data)=> res.json(data))
   .catch((error) => res.json({message: error}));
           })


    
        module.exports = router;