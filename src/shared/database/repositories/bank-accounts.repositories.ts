import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBankAccountDto: Prisma.BanckAccountCreateArgs) {
    return this.prismaService.banckAccount.create(createBankAccountDto);
  }

  findMany<T extends Prisma.BanckAccountFindManyArgs>(
    findManyBankAccountDto: Prisma.SelectSubset<
      T,
      Prisma.BanckAccountFindManyArgs
    >,
  ) {
    return this.prismaService.banckAccount.findMany(findManyBankAccountDto);
  }

  findFirst(findFirstBankAccountDto: Prisma.BanckAccountFindFirstArgs) {
    return this.prismaService.banckAccount.findFirst(findFirstBankAccountDto);
  }

  update(updateBankAccountDto: Prisma.BanckAccountUpdateArgs) {
    return this.prismaService.banckAccount.update(updateBankAccountDto);
  }

  delete(deleteBankAccountDto: Prisma.BanckAccountDeleteArgs) {
    return this.prismaService.banckAccount.delete(deleteBankAccountDto);
  }
}
