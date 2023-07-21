import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { DbModule } from '../../db/db.module';
import { ConfigModule } from '@nestjs/config'; 

@Module({
  imports: [DbModule, ConfigModule],
  providers: [MovieService],
  controllers: [MovieController]
})
export class MovieModule {}
