/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { addMoviesAction, deleteMoviesAction, editMoviesAction, getMoviesAction } from '../actions/movieActions';
import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

export const getMoviesList = () => {
    return function (dispatch: Dispatch<any>) {
        const MOVIE_URL = 'http://localhost:4000/movies';
        axios(MOVIE_URL, {
            method: 'GET'
        })
            .then((response: AxiosResponse) => {
                dispatch(getMoviesAction(response.data.data));
                return response.data.data;
            })
            .catch(error => {
                dispatch(error);
                return error;
            })
    };
};

export const addMovieToList = (id: string) => {
    return function (dispatch: Dispatch<any>) {
        const MOVIE_URL = 'http://localhost:4000/movies';
        axios(MOVIE_URL, {
            method: 'POST',
            data: { movieId: id }
        })
            .then((response: AxiosResponse) => {
                dispatch(addMoviesAction(response.data.data));
                return response.data.data;
            })
            .catch(error => {
                dispatch(error);
                return error;
            })
    };
};

export const editMovieToList = (id: string) => {
    return function (dispatch: Dispatch<any>) {
        const MOVIE_URL = 'http://localhost:4000/movies';
        axios(MOVIE_URL, {
            method: 'PUT',
            data: { movieId: id }
        })
            .then((response: AxiosResponse) => {
                dispatch(editMoviesAction(response.data.data));
                return response.data.data;
            })
            .catch(error => {
                dispatch(error);
                return error;
            })
    };
};

export const deleteMovieFromList = (id: string) => {
    return function (dispatch: Dispatch<any>) {
        const MOVIE_URL = 'http://localhost:4000/movies';
        axios(MOVIE_URL, {
            method: 'DELETE'
        })
            .then((response: AxiosResponse) => {
                dispatch(deleteMoviesAction(response.data.data));
                return response.data.data;
            })
            .catch(error => {
                dispatch(error);
                return error;
            })
    };
};
