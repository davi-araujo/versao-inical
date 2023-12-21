import { Router } from "express";

import { cors } from "../middlewares/cors";
import { GetAlunoRoutes, UpdateAlunoRoutes } from "./aluno.routes";
import { AdversarioRoutes } from "./adversario.routes";
import { MissaoRoutes } from "./missao.routes";


const router = Router();
router.use(cors);
router.use("/getaluno", GetAlunoRoutes);
router.use("/updatealuno", UpdateAlunoRoutes);
router.use("/adversario", AdversarioRoutes);
router.use("/missao", MissaoRoutes);

export { router };
