import app from "./app.js";

import authRoutes from "./routes/auth.routes.js";
import eleccionesRoutes from "./routes/elecciones.routes.js";
import candidatosRoutes from "./routes/candidatos.routes.js";

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
  res.send("Server online!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/elecciones", eleccionesRoutes);
app.use("/api/v1/candidatos", candidatosRoutes);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Server Not Available";

  return res.status(errStatus).json({
    message: errMessage,
    success: false,
    status: errStatus,
  });
});
