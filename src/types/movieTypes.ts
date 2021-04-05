/* eslint-disable @typescript-eslint/no-explicit-any */
import { Movie } from '../components/MovieApp/movieList';

export interface GetMoviesStateType {
    state: string, 
    movies: Movie[],
    type?: string,
    errorMessage?: string
}

export interface GetMoviesAddStateType {
    state: string, 
    movie: Movie,
    type?: string,
    errorMessage?: string
}

export interface GetMoviesEditStateType {
    id: any;
    state: string, 
    movie?: Movie,
    type?: string,
    errorMessage?: string
}

export interface GetMoviesDeleteStateType {
    state: string, 
    id: string,
    errorMessage?: string
}

