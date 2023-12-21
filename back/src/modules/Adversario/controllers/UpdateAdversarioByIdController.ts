import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAdversarioByIdService } from "../services/UpdateAdversarioByIdService";

export class UpdateAdversarioByIdController {
    async handle(request: Request, response: Response) {
        const { id, boss } = request.body;
        const updatedAdversarioUseCase = container.resolve(UpdateAdversarioByIdService);
        await updatedAdversarioUseCase.execute(id, boss)
        
        return response.json({ok: "adversario alterado"});
    }
}