import { Module } from '@nestjs/common';
import { FavoritemovieController } from './favoritemovie.controller';
import { FavoritemovieService } from './favoritemovie.service';

@Module({
  controllers: [FavoritemovieController],
  providers: [FavoritemovieService]
})
export class FavoritemovieModule {}
