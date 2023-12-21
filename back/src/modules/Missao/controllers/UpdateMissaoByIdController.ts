import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateMissaoByIdService } from "../services/UpdateMissaoByIdService";

export class UpdateMissaoByIdController {
    async handle(request: Request, response: Response) {
        const { id, feita } = request.body;
        const updatedMissaoUseCase = container.resolve(UpdateMissaoByIdService);
        await updatedMissaoUseCase.execute(id, feita)
        
        return response.json({ok: "missao alterada"});
    }
}