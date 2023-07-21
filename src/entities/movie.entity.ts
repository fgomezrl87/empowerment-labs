export interface Movie {
    movieId: string;
    movieApiId: string;
    movieIMDBId: string;
    language: string;
    genres: string[];
    originalLanguage: string;
    title: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: Date;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}
