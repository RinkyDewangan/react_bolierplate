/* eslint-disable @typescript-eslint/no-explicit-any */
import { Movie } from "components/MovieApp/movieList";
import { Action } from "redux";
import { GetMoviesStateType } from "src/types/movieTypes";

export interface IMoviesFetch extends Action {
  type: 'MOVIES_LIST'
}

export interface IMoviesFetchSuccess extends Action {
  type: 'MOVIES_FETCH_SUCCESS',
  movies: Movie[]
}

export interface IMoviesFetchError extends Action {
  type: 'MOVIES_FETCH_ERROR',
  errorMessage: string
}

export interface IMoviesAdd extends Action {
  movie?: Movie;
  type: 'MOVIE_ADD'
}

export interface IMoviesAddSuccess extends Action {
  type: 'MOVIES_ADD_SUCCESS',
  movie?: Movie
}

export interface IMoviesAddError extends Action {
  type: 'MOVIE_ADD_ERROR',
  errorMessage: string
}

export interface IMoviesEditError extends Action {
  type: 'MOVIE_EDIT_ERROR',
  errorMessage: string
}

export interface IMoviesEdit extends Action {
  movie?: Movie;
  type: 'MOVIE_EDIT'
}

export interface IMoviesEditSuccess extends Action {
  type: 'MOVIES_EDIT_SUCCESS',
  movie?: Movie
}

export interface IMoviesDeleteError extends Action {
  type: 'MOVIE_DELETE_ERROR',
  errorMessage: string
}

export interface IMoviesDelete extends Action {
  movie?: Movie;
  type: 'MOVIE_DELETE'
}

export interface IMoviesDeleteSuccess extends Action {
  type: 'MOVIES_DELETE_SUCCESS',
  movie?: Movie
}

export const getMoviesAction = (movies: Movie[]): AppActions => {
  return {
    type: 'MOVIES_FETCH_SUCCESS',
    movies: movies
  };
};

export const addMoviesAction = (movies: Movie[]): AppActions => {
  return {
    type: 'MOVIES_ADD_SUCCESS'
  };
};

export const editMoviesAction = (movies: Movie[]): AppActions => {
  return {
    type: 'MOVIES_EDIT_SUCCESS'
  };
};

export const deleteMoviesAction = (movies: Movie[]): AppActions => {
  return {
    type: 'MOVIES_DELETE_SUCCESS'
  };
};

export type AppActions = IMoviesFetch | IMoviesFetchSuccess | IMoviesFetchError | IMoviesAdd | IMoviesAddSuccess | IMoviesAddError | IMoviesEdit | IMoviesEditSuccess | IMoviesEditError | IMoviesDelete | IMoviesDeleteSuccess | IMoviesDeleteError