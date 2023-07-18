import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './db/db.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dbService: DbService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getHelloDB')
  async getHelloDB(): Promise<string> {
    return this.dbService.getHelloDB(1);
  }
}
