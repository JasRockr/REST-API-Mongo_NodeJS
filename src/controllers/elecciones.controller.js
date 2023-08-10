import Eleccion from "../models/eleccion.model.js";

export const getAll = async (req, res) => {
  try {
    const all = await Eleccion.find();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const getEleccion = await Eleccion.findById(req.params.id);
    res.status(getEleccion ? 200 : 400).json(
      getEleccion
        ? getEleccion
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
  const newEleccion = new Eleccion(req.body);
  try {
    const saved = await newEleccion.save();
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
    const rmEleccion = await Eleccion.findByIdAndDelete(req.params.id);
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
    const upEleccion = await Eleccion.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(upEleccion);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export default getAll;
