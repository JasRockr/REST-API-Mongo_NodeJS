import Candidato from "../models/candidato.model.js";

export const getAll = async (req, res) => {
  try {
    const all = await Candidato.find();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const getCandidato = await Candidato.findById(req.params.id);
    res.status(getCandidato ? 200 : 400).json(
      getCandidato
        ? getCandidato
        : {
            id: req.params.id,
            msg: "No se encontró el registro con el id especificado",
          }
    );
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const addNew = async (req, res) => {
  const newCandidato = new Candidato(req.body);
  try {
    const saved = await newCandidato.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

// TODO: Validación que existe antes de intentar eliminarlo
export const deleteById = async (req, res) => {
  try {
    const rmCandidato = await Candidato.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Registro eliminado correctamente!",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const updateById = async (req, res) => {
  try {
    const upCandidato = await Candidato.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(upCandidato);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export default getAll;
