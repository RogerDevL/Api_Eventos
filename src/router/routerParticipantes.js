const {Router} = require('express');
const ParticipantesController = require('../controller/ParticipantesController');


const router = Router();

router.post('', (req, res)=>{
    ParticipantesController.create(req,res)
});

router.get('', (req, res)=>{
    ParticipantesController.getAll(req,res)
});

router.get('/:id', (req, res)=>{
    ParticipantesController.getOne(req, res)
});
router.put('/:id', (req, res)=>{
    ParticipantesController.update(req, res)
});

router.delete('/:id', (req, res)=>{
    ParticipantesController.delete(req, res)
});


module.exports = router