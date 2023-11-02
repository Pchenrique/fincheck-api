import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  getUserById(userId: string) {
    return { userId: userId };
  }
}
