import mongoose from "mongoose";
const { Schema } = mongoose;

const candidatoSchema = new Schema({
  nombres: String, // String is shorthand for {type: String}
  apellidos: String,
  direccion: String,
  ciudad: String,
  telefono: String,
  email: String,
  edad: Number,
  slogan: String,
  creada: { type: Date, default: Date.now },
  estado: { type: Boolean, default: true },
});

export default mongoose.model("Candidato", candidatoSchema);
