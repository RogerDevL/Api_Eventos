const {Router} = require('express');
const ParticipantesController = require('../controller/ParticipantesController');
const { validaParticipante, validaParticipanteId } = require('../middlewares/Validate');


const router = Router();

router.post('', validaParticipante, (req, res)=>{
    ParticipantesController.create(req,res)
});

router.get('', (req, res)=>{
    ParticipantesController.getAll(req,res)
});

router.get('/:id/participante', validaParticipanteId, (req, res)=>{
    ParticipantesController.getOne(req, res)
});
router.put('/:id', validaParticipante, validaParticipanteId, (req, res)=>{
    ParticipantesController.update(req, res)
});

router.delete('/:id', validaParticipanteId, (req, res)=>{
    ParticipantesController.delete(req, res)
});


//  Listar todos os participantes de um evento específico.
router.get('/:id/eventos', (req, res)=>{
    ParticipantesController.partipantesEventos(req, res)
});

//  Listar todos os participantes de um evento específico usando o eventoId.
router.get('/participante/porevento/:id', (req, res)=>{
    ParticipantesController.eventosParticipantes(req, res)
});


module.exports = router