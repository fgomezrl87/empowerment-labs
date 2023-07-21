export interface Movie {
    movieId: number;
    language: string;
    genres: number[];
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
