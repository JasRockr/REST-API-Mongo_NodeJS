import mongoose from "mongoose";
const { Schema } = mongoose;

const eleccionSchema = new Schema({
  titulo: String, // String is shorthand for {type: String}
  descripcion: String,
  fecha: { type: Date, default: Date.now },
  creada: { type: Date, default: Date.now },
  estado: { type: Boolean, default: true },
});

export default mongoose.model("Eleccion", eleccionSchema);
