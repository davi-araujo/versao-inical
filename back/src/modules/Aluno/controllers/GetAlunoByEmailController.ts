import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAlunoByEmailService } from "../services/GetAlunoByEmailService";

export class GetAlunoByEmailController {
    async handle(request: Request, response: Response) {
        const { email } = request.params;
        const getAlunoUseCase = container.resolve(GetAlunoByEmailService);
        const aluno = await getAlunoUseCase.execute(email);
    
        return response.json(aluno);
    }
}