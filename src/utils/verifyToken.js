import jwt from "jsonwebtoken";

// Validate token
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ message: "El token no se autorizó." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "La autenticación del token ha fallado." });
    }
    req.user = user;
    next();
  });
};

// Validate user privileges
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.admin) {
      next();
    } else {
      return res
        .status(403)
        .json({ message: "No tienes permiso para acceder a este recurso." });
    }
  });
};
