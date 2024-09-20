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
      const { id } = req.body;
      const { nome, email, eventoId } = req.body;

      const participanteEdit = await Participante.findByPk(id);

      if (participanteEdit == null) {
        return res.status(404).json({
          msg: "Participante inexistente!",
        });
      }

      return res.status(200).json({
        msg: "Participante encontrado:",
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
      const { id } = req.body;
      const listarUnico = await Participante.findByPk(id);

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

      if (deletePart === null) {
        return res.status().json({
          msg: "Participante inexistente",
        });
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
        const eventEspe = await Participante.findAll({
            
        })
        
    } catch (error) {
        
    }
  }
};




module.exports = ParticipantesController;
