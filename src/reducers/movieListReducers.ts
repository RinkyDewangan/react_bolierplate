import MovieDetails from "components/MovieApp/movieDetails";
import { Movie } from "components/MovieApp/movieList";
import { AppActions } from "../actions/movieActions";

import {
    GetMoviesAddStateType,
    GetMoviesDeleteStateType,
    GetMoviesEditStateType,
    GetMoviesStateType,
} from '../types/movieTypes';

export interface MovieListState {
    state: string, 
    movies: Movie[],
    errorMessage?: string
}

export interface MovieAddState {
    state: string, 
    movie: Movie,
    errorMessage?: string
}

export interface MovieEditState {
    state: string,
    id?: string,
    errorMessage?: string
}

export interface MovieDeleteState {
    state: string, 
    id?: string,
    errorMessage?: string
}

const initialStateGetMovies: GetMoviesStateType = {
    state: 'INIT',
    type: '',
    movies: []
};

const initialStateAddMovie: GetMoviesAddStateType = {
    state: 'INIT',
    type: '',
    movie: {
        id: 1,
        title: '',
        tagline: '',
        vote_average: 2.3,
        vote_count: 1,
        release_date: '',
        poster_path: '',
        overview: '',
        budget: 1,
        revenue: 1,
        genres: [''],
        runtime: 1,
    }
};

const initialStateEditMovie: GetMoviesEditStateType = {
    state: 'INIT',
    type: '',
    id:'',
};

const initialStateDeleteMovie: GetMoviesDeleteStateType = {
    state: 'INIT',
    id:'',
};

export function moviesListReducer(state = initialStateGetMovies, action: AppActions): MovieListState {
    if (action.type === 'MOVIES_LIST') {
        return {
            ...state,
            state: 'LOADING',
            movies: [],
        };
    }
    if (action.type === 'MOVIES_FETCH_SUCCESS') {
        return {
            ...state,
            state: 'LOADED',
            movies: action.movies,
        };
    }
    if (action.type === 'MOVIES_FETCH_ERROR') {
        return {
            ...state,
            state: 'ERROR',
            movies: [],
            errorMessage: action.errorMessage
        };
    }
    return state;
}

export function movieAddReducer(state = initialStateAddMovie, action: AppActions): MovieAddState {
    if (action.type === 'MOVIE_ADD'  ) {
        return {
            ...state,
            state: 'LOADING',
            movie: action.movie,
        };
    }
    if (action.type === 'MOVIES_ADD_SUCCESS' ) {
        return {
            ...state,
            state: 'LOADED',
            movie: action.movie,
        };
    }
    if (action.type === 'MOVIE_ADD_ERROR' ) {
        return {
            ...state,
            state: 'ERROR',
            errorMessage: action.errorMessage
        };
    }
    return state;
}

export function movieEditReducer(state = initialStateEditMovie, action: AppActions): MovieEditState {
    if (action.type === 'MOVIE_EDIT' ) {
        return {
            ...state,
            state: 'LOADING',
            id:state.id,
        };
    }
    if (action.type === 'MOVIES_EDIT_SUCCESS') {
        return {
            ...state,
            state: 'LOADED',
            id:state.id,
        };
    }
    if (action.type === 'MOVIE_EDIT_ERROR') {
        return {
            ...state,
            state: 'ERROR',
            errorMessage: action.errorMessage
        };
    }
    return state;
}

export function movieDeleteReducer(state = initialStateDeleteMovie, action: AppActions): MovieDeleteState {
    if (action.type === 'MOVIE_DELETE' ) {
        return {
            ...state,
            state: 'LOADING',
            id:state.id,
        };
    }
    if (action.type === 'MOVIES_DELETE_SUCCESS') {
        return {
            ...state,
            state: 'LOADED',
            id:state.id,
        };
    }
    if (action.type === 'MOVIE_DELETE_ERROR') {
        return {
            ...state,
            state: 'ERROR',
            errorMessage: action.errorMessage
        };
    }
    return state;
}

