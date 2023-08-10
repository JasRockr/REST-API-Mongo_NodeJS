import mongoose from "mongoose";
const { Schema } = mongoose;

const usuarioSchema = new Schema(
  {
    nombre: String, // String is shorthand for {type: String}
    email: {
      type: String,
      required: [true, "El correo es necesario"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: { type: Boolean, default: false },
    estado: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Usuario", usuarioSchema);
