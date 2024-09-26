const Evento = require("../models/Evento");

const EventosController = {
    create: async(req, res)=>{
        try {
            const {nome, data, localidade} = req.body;

            const eventoCriado = await Evento.create({nome, data, localidade})

            return res.status(200).json({
                msg:"Evento criado",
                eventoCriado

            })
        } catch (error) {
            return res.status(500).json({
                msg:"Contato o Roger"
            })
        }
    },

    update: async(req, res)=>{
        try {
            const { id } = req.params;
            const {nome, data, localidade} = req.body;

            const eventoEdit = await Evento.findByPk(id);

            if(eventoEdit == null) {
                return res.status(404).json({
                    msg:"evento nao encontrado!"
                })
            }

            eventoEdit.nome = nome;
            eventoEdit.data = data;
            eventoEdit.localidade = localidade;

            eventoEdit.save();



        } catch (error) {
            return res.status(500).json({
                msg:"Contato o Roger"
            })
        }
    },
    getAll: async(req, res) =>{
        try {
            const listarEventos = await Evento.findAll();

            return res.status(200).json({
                msg:"Todos eventos:",
                listarEventos
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Contato o Roger"
            })
            
        }
    },

    getOne: async(req, res) =>{
        try {
            const {id} = req.params;
            const eventoOne = await Evento.findByPk(id);

            if(eventoOne == null){
                return res.status(404).json({
                    msg:"Evento nao encontrado!"
                })
            }

            return res.status(200).json({
                msg:"Evento:",
                eventoOne
            })

        } catch (error) {
            return res.status(500).json({
                msg:"Contato o Roger"
            })
        }
    },

    delete:async(req, res) =>{
        try {

            const {id} = req.params;

            const eventoDelet = await Evento.findByPk(id);


            if(eventoDelet === null){
                return res.status(404).json({
                    msg:"Evento nao encontrado!"
                })
            }

            eventoDelet.destroy();

            return res.status(200).json({
                msg:"Deletado com sucesso!",
                eventoDelet
            })


            
        } catch (error) {
            return res.status(500).json({
                msg:"Contato o Roger"
            })
            
        }
    }
    
};


module.exports=EventosController;