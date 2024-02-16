
import { Router } from "express";
import {  getRoles, registerRoles, deleteRoles} from "../controllers/roles.controllers.js";


const router= Router();

router.get("/", getRoles)
router.post("/", registerRoles)
router.delete("/:id", deleteRoles)

export default router;