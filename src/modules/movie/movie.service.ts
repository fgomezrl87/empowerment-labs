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
    let i = 0
    for (const movie of movies) {
      i++;
      const movieData = {
        movieId: movie.id,
        language: movie.original_language,
        genres: movie.genre_ids,
        originalLanguage: movie.original_language,
        title: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: movie.poster_path,
        releaseDate: movie.release_date,
        video: movie.video,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count
      }

      await this.dbService.putItem('test_Movie', movieData);
    }
  }

  async getPopularMovies(): Promise<any> {
    const params = {
      TableName: 'test_Movie',
    };

    const data = await this.dbService.scan(params);
    const sortedItems = data.Items.sort((a, b) => b.popularity - a.popularity).slice(0, 3);

    return sortedItems;
  }

}
