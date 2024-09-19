const {Router} = require('express');
const ParticipantesController = require('../controller/ParticipantesController');
const EventosController = require('../controller/EventosController');
const routerParticipante = require('./routerParticipantes');
const routerEventos = require('./routerEventos');


const router = Router();


// router.post('/part/', (req, res)=>{
//     ParticipantesController.create(req,res);
// })

router.use('/part/', routerParticipante);

// router.post('/evento/', (req, res)=>{
//     EventosController.create(req, res);
// })


router.use('/evento/', routerEventos);

module.exports = router