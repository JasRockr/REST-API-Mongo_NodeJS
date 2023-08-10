import Usuario from "../models/usuario.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const addUser = async (req, res, next) => {
  const newUsuario = new Usuario(req.body);
  try {
    const saved = await newUsuario.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await Usuario.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(400).json({
        msg: "Usuario no encontrado",
      });
    }
    const passIsMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passIsMatch) {
      return res.status(400).json({
        msg: "La contraseña es incorrecta",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        admin: user.admin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "12h",
      }
    );

    const { password, createdAt, updatedAt, ...other } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        ...other,
        token,
      });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
