import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class UpdateMissaoByIdService {
  async execute(id: number, feita: boolean) {
    const missao = await prismaClient.missao.update({
      where: {
        id,
      },
      data: {
        feita,
      }
    });
  }
}