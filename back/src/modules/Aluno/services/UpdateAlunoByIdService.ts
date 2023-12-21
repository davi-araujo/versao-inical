import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class UpdateAlunoByIdService {
  async execute(id: number, coin: number) {
    const aluno = await prismaClient.aluno.update({
      where: {
        id,
      },
      data: {
        coin,
      }
    });
  }
}