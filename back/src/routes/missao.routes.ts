import { Router } from "express";
import { UpdateMissaoByIdController } from "../modules/Missao/controllers/UpdateMissaoByIdController";

const MissaoRoutes = Router();
const updateMissaoByIdController = new UpdateMissaoByIdController();

MissaoRoutes.post("/update", updateMissaoByIdController.handle);

export { MissaoRoutes };