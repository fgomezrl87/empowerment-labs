import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DbService } from '../../db/db.service';

@Injectable()
export class MovienoteService {
  constructor(private readonly dbService: DbService) {}

  async createNote(userId: string, movieId: number, noteTitle: string, noteDescription: string): Promise<void> {
    try {
      const tableName = 'test_MovieNotes';
      const item = {
        userId,
        movieId,
        noteTitle,
        noteDescription
      };
      await this.dbService.putItem(tableName, item);
    } catch (error) {
      throw new HttpException('Error al guardar la nota en la base de datos de Dynamo', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
