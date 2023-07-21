import { Controller, Get, Query, Res, HttpException, HttpStatus } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Response } from 'express';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('populate')
  async populateDatabase(@Res() response: Response): Promise<Response> {
    try {
      await this.movieService.populateDatabase();
      return response.status(200).json({ message: 'Database populated successfully.' });
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'There was a problem populating the database',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('popular')
  async getPopularMovies() {
    return await this.movieService.getPopularMovies();
  }
  
  @Get('search')
  async searchMovieByTitle(@Query('query') title: string) {
    return await this.movieService.searchMovieByTitle(title);
  }

}