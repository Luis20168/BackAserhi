import { Router } from "express";
import {  getUsuarios, registerUsuarios, deleteUsuarios, updateUsuarios} from "../controllers/user.controllers.js";
const router= Router()

router.get("/",getUsuarios )
router.post("/register", registerUsuarios)
router.delete("/:id", deleteUsuarios)
router.put("/:id",updateUsuarios)





export default router;