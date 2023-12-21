import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class UpdateAdversarioByIdService {
  async execute(id: number, boss: boolean) {
    const adversario = await prismaClient.adversario.update({
      where: {
        id,
      },
      data: {
        boss,
      }
    });
  }
}