const validateEvento = (req, res, next) => {
    const {nome, data, localidade} = req.body;

    if(!nome, !data, !localidade){
        return res.status(404).json({
            msg:"Campos invalidos, revise caro amigo."
        })
    }
    return next();
};


const validateEventoId = (req, res, next) => {
    const {id} = req.params;

    if(!id){
        return res.status(404).json({
            msg:"Parametro inválido."
        });
    }

    return next();
};


const validaParticipante = (req, res, next) =>{
    const {nome, email, eventoId} = req.body;


    if(!nome, !email, !eventoId){
        return res.status(200).json({
            msg:"campos inválidos, revise caro amigo."
        })
    }

    return next();
};


const validaParticipanteId = (req, res, next) =>{
    const {id} = req.params;

    if(!id){
        return res.status(404).json({
            msg:"Parametro inválido."
        })
    }

    return next();
};


module.exports = {
    validateEvento, 
    validateEventoId, 
    validaParticipante, 
    validaParticipanteId
};