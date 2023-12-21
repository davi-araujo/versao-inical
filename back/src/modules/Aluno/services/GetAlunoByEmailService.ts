import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

@injectable()
export class GetAlunoByEmailService {
  async execute(email: string) {
    const aluno = await prismaClient.aluno.findUnique({
      where: {
        email,
      },
      include: {
        adversarios: {
          include: {
            batalhas: true,
            missoes: true,
          }
        },
      }
    });
    if (!aluno) {
      throw new AppError("Aluno não encontrado");
    }
    return aluno;
  }
}