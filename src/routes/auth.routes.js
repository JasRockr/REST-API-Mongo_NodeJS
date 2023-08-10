import Router from "express";
import { login, addUser } from "../controllers/auth.controller.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = Router();

router.post("/registrar", addUser);
router.post("/login", login);
router.get("/verifyToken", verifyToken);
router.get("/editar/:id", verifyUser, (req, res, next) => {
  res.json({ privileges: "Edit" });
});

export default router;
