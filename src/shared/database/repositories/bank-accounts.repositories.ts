import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBankAccountDto: Prisma.BanckAccountCreateArgs) {
    return this.prismaService.banckAccount.create(createBankAccountDto);
  }

  findMany(findManyBackAccout: Prisma.BanckAccountFindManyArgs) {
    return this.prismaService.banckAccount.findMany(findManyBackAccout);
  }

  findFirst(findFirstBackAccout: Prisma.BanckAccountFindFirstArgs) {
    return this.prismaService.banckAccount.findFirst(findFirstBackAccout);
  }

  update(updateBankAccountDto: Prisma.BanckAccountUpdateArgs) {
    return this.prismaService.banckAccount.update(updateBankAccountDto);
  }

  delete(deleteBankAccountDto: Prisma.BanckAccountDeleteArgs) {
    return this.prismaService.banckAccount.delete(deleteBankAccountDto);
  }
}
