const {Router} = require('express');
const EventosController = require('../controller/EventosController');
const { validateEvento, validateEventoId } = require('../middlewares/Validate');
const ParticipantesController = require('../controller/ParticipantesController');


const router = Router();

router.post('', validateEvento,(req, res)=>{
    EventosController.create(req, res)
});

router.get('/:id', validateEventoId, (req, res)=>{
    EventosController.getOne(req, res)
});

router.put('/:id', validateEvento, validateEventoId, (req, res)=>{
    EventosController.update(req, res)
});


router.delete('/:id', validateEventoId, (req, res)=>{
    EventosController.delete(req, res)
});

router.get('', (req, res)=>{
    EventosController.getAll(req, res)
});

router.get('/participante/porevento/:id', (req, res)=>{
    ParticipantesController.eventosParticipantes(req, res)
});






module.exports = router