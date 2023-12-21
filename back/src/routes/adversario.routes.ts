import { Router } from "express";
import { UpdateAdversarioByIdController } from "../modules/Adversario/controllers/UpdateAdversarioByIdController";

const AdversarioRoutes = Router();
const updateAdversarioByIdController = new UpdateAdversarioByIdController();

AdversarioRoutes.post("/update", updateAdversarioByIdController.handle);

export { AdversarioRoutes };