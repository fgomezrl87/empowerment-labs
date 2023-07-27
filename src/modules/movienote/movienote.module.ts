import { Module } from '@nestjs/common';
import { MovienoteController } from './movienote.controller';
import { MovienoteService } from './movienote.service';
import { ConfigModule } from '@nestjs/config'; 
import { DbModule } from '../../db/db.module';

@Module({
  imports: [DbModule, ConfigModule],
  controllers: [MovienoteController],
  providers: [MovienoteService]
})
export class MovienoteModule {}
