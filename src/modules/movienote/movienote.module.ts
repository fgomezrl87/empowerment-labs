import { Module } from '@nestjs/common';
import { MovienoteController } from './movienote.controller';
import { MovienoteService } from './movienote.service';

@Module({
  controllers: [MovienoteController],
  providers: [MovienoteService]
})
export class MovienoteModule {}
