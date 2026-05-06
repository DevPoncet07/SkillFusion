import express from "express";
import coursActiveController from "../controllers/cour-active.controller";
import { verifyToken } from '../middlewares/auth.middleware';
import { checkRoles, requireSelfOrAdmin, ROLES } from '../middlewares/rbac.middleware';

const router = express.Router();

router.get("/cours-active", verifyToken, checkRoles( [ROLES.ADMIN]), coursActiveController.getAll)

router.get("/cours-active/user/:id", verifyToken, requireSelfOrAdmin, coursActiveController.getByUser)

// router.get("/cours-active/user/:id/ended", verifyToken, requireSelfOrAdmin, coursActiveController.getEndedCoursByUser)
router.get("/cours-active/user/:id/ended", verifyToken, checkRoles( [ROLES.STUDENT, ROLES.ADMIN]),coursActiveController.getEndedCoursByUser)

router.get("/cours-active/:id", verifyToken, coursActiveController.getOneCoursActive)

router.post("/cours-active", verifyToken, coursActiveController.createCoursActive)

router.patch("/cours-active/:id", verifyToken, coursActiveController.updatingCoursActive)

router.delete("/cours-active/:id", verifyToken, coursActiveController.deleteCoursActive)

export default router;