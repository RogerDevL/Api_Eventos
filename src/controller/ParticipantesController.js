const Evento = require("../models/Evento");
const Participante = require("../models/Participantes");

const ParticipantesController = {
  create: async (req, res) => {
    try {
      const { nome, email, eventoId } = req.body;

      
      const partCriado = await Participante.create({ nome, email, eventoId });

      return res.status(200).json({
        msg: "Usuario criado",
        partCriado,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "contate o Roger",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, eventoId } = req.body;

      const participanteEdit = await Participante.findByPk(id);

      if (participanteEdit == null) {
        return res.status(404).json({
          msg: "Participante inexistente!",
        });
      }

      participanteEdit.nome = nome;
      participanteEdit.email = email;
      participanteEdit.eventoId = eventoId;

      participanteEdit.save();

      return res.status(200).json({
        msg: "Participante atualizado!",
        participanteEdit,
      });

      
    } catch (error) {
      return res.status(500).json({
        msg: "contate o Roger",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const listarPart = await Participante.findAll();

      return res.status(200).json({
        msg: "Todos participantes",
        listarPart,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "contate o Roger",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const listarUnico = await Participante.findByPk(id);


      if(!listarUnico){
        return res.status(404).json({
          msg:"Participante inexistente."
        })
      }

      return res.status(200).json({
        msg: "Participante encontrado",
        listarUnico,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "contate o Roger",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletePart = await Participante.findByPk(id);

      if(!deletePart){
        return res.status(404).json({
          msg:"Participante não existe."
        })
      }

      deletePart.destroy();

      return res.status(200).json({
        msg: "Participante deletado",
        deletePart,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "contate o Roger",
      });
    }
  },

  partipantesEventos: async (req, res) =>{
    try {

        const {id} = req.params;
        if(!id){
          return res.status(404).json({
            msg:"Faltando parametro"
          })
        }
          const parts = await Participante.findAll({
                where:{
                  eventoId: id
                }
           });

          return res.status(200).json({
            msg:"Participante encontrado.",
            parts
          })
        
    } catch (error) {
        return res.status(500).json({
          msg:"Contate o Roger"
        })
    }
  },

  eventosParticipantes: async(req, res) =>{
    try {
      const { id } = req.params;
      const participantes = await Participante.findAll({
        where: { eventoId: id },
      
      });

          return res.status(200).json({
            msg:"Participante encontrado.",
            participantes
          })  
    } catch (error) {
      return res.status(500).json({
        msg:"Contate o Roger"
      })
    }
  }
  
};




module.exports = ParticipantesController;
