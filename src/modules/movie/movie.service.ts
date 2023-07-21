import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { DbService } from '../../db/db.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MovieService {
  constructor(
    private dbService: DbService,
    private configService: ConfigService,
  ) {}

  async populateDatabase(): Promise<void> {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this.configService.get<string>('TMDB_API_KEY');
    const response = await axios.get(url);

    const movies = response.data.results;
    for (const movie of movies) {
      // Prepare the movie data for DynamoDB
      const movieData = {
        movieId: movie.id,
        movieApiId: movie.api_id,
        movieIMDBId: movie.imdb_id,
        language: movie.language,
        genres: movie.genres,
        originalLanguage: movie.original_language,
        title: movie.title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: movie.poster_path,
        releaseDate: movie.release_date,
        video: movie.video,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
      };

      // Put the item into the DynamoDB table
      await this.dbService.putItem('test_movie', movieData);
    }
  }
}
