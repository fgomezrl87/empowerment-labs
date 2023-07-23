import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { DbModule } from './db/db.module';
import { MovieModule } from './modules/movie/movie.module';
import { UserModule } from './modules/user/user.module';
import { FavoritemovieModule } from './modules/favoritemovie/favoritemovie.module';
import { MovienoteModule } from './modules/movienote/movienote.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DbModule,
    ConfigModule.forRoot(),
    UserModule,
    MovieModule,
    FavoritemovieModule,
    MovienoteModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
