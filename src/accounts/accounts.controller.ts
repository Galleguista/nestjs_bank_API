import { Controller, Post, Body, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('add/:userId')
  addBalance(@Param('userId') userId: string, @Body('amount') amount: number) {
    return this.accountsService.addBalance(userId, amount);
  }
}
