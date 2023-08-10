import Usuario from "../models/usuario.model.js";
import bcrypt from "bcryptjs";

export const getAll = async (req, res) => {
  try {
    const all = await Usuario.find();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const getUsuario = await Usuario.findById(req.params.id);
    res.status(getUsuario ? 200 : 400).json(
      getUsuario
        ? getUsuario
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
  try {
    // Use bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(req.body.password, salt);

    const newUsuario = new Usuario({
      nombre: req.body.nombre,
      email: req.body.email,
      admin: req.body.admin,
      password: hashedPass,
    });
    const saved = await newUsuario.save();
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
    const rmUsuario = await Usuario.findByIdAndDelete(req.params.id);
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
    const upUsuario = await Usuario.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(upUsuario);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export default getAll;
