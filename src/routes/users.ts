import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import { validateUser } from "../middlewares/validateUser";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/", validateUser, createUser);

export default router;
