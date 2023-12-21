import { Router } from "express";
import { GetAlunoByEmailController } from "../modules/Aluno/controllers/GetAlunoByEmailController";
import { UpdateAlunoByIdController } from "../modules/Aluno/controllers/UpdateAlunoByIdController";

const GetAlunoRoutes = Router();
const getAlunoByEmailController = new GetAlunoByEmailController();

GetAlunoRoutes.get("/:email", getAlunoByEmailController.handle);

const UpdateAlunoRoutes = Router();
const updateAlunoByIdController = new UpdateAlunoByIdController();

UpdateAlunoRoutes.post("/update", updateAlunoByIdController.handle);

export { GetAlunoRoutes, UpdateAlunoRoutes };