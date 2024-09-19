const Participante = require("../models/Participantes");

const ParticipantesController = {
    create:async (req, res) => {
        try {
            const {nome, email, eventoId} = req.body;


            const partCriado = await Participante.create({nome, email, eventoId}) 

            return res.status(200).json({
                msg:"Usuario criado",
                partCriado
            })

        } catch (error) {
            return res.status(500).json({
                msg:"contate o Roger"
            })
        }
    },
    update:async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },

    getAll: async (req, res) =>{
        try {
            
        } catch (error) {
            
        }
    },

    getOne: async (req, res)=>{
        try {
            
        } catch (error) {
            
        }
    },

    delete:async (req, res) =>{
        try {
            
        } catch (error) {
            
        }
    }
}


module.exports = ParticipantesController;