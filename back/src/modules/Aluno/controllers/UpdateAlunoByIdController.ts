import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAlunoByIdService } from "../services/UpdateAlunoByIdService";

export class UpdateAlunoByIdController {
    async handle(request: Request, response: Response) {
        const { id, coin } = request.body;
        const updatedAlunoUseCase = container.resolve(UpdateAlunoByIdService);
        await updatedAlunoUseCase.execute(id, coin)
        
        return response.json({ok: "aluno alterado"});
    }
}