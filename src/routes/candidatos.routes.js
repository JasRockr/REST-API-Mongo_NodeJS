import Router from "express";
import {
  getAll,
  getById,
  addNew,
  deleteById,
  updateById,
} from "../controllers/candidatos.controller.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = Router();
const path = "/";
const idParam = "id";

// Get all
router.get(`${path}`, getAll);
// Get
router.get(`${path}:${idParam}`, getById);
// Post
router.post(`${path}`, verifyUser, addNew);
// Delete
router.delete(`${path}:${idParam}`, verifyUser, deleteById);
// Put
router.put(`${path}:${idParam}`, verifyUser, updateById);

export default router;
