const {Router} = require('express');
const ParticipantesController = require('../controller/ParticipantesController');


const router = Router();

router.post('', (req, res)=>{
    ParticipantesController.create(req,res);
})



module.exports = router