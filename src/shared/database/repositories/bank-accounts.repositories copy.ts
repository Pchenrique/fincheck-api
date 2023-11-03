import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBankAccountDto: Prisma.BanckAccountCreateArgs) {
    return this.prismaService.banckAccount.create(createBankAccountDto);
  }
}
