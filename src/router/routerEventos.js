const {Router} = require('express');
const EventosController = require('../controller/EventosController');


const router = Router();

router.post('', (req, res)=>{
    EventosController.create(req, res)
});

router.get('/:id', (req, res)=>{
    EventosController.getOne(req, res)
});

router.put('/:id', (req, res)=>{
    EventosController.update(req, res)
});


router.delete('/:id', (req, res)=>{
    EventosController.delete(req, res)
});

router.get('', (req, res)=>{
    EventosController.getAll(req, res)
});





module.exports = router