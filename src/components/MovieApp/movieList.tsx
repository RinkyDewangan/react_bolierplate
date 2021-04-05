/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useEffect, useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './movies.css'
import ListModal from './listModal'
import MovieDetails from './movieDetails'
import { movieList } from 'src/data/movieList';
import axios, { AxiosResponse } from 'axios';

// export interface Movie {
//     Title: string;
//     Year: string;
//     imdbID: string;
//     Type: string;
//     Poster: string;
//     Description: string;
//     Rating: number;
// }

export interface Movie {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

interface Props {
    isOpen?: boolean;
    onExit?: boolean;
    movies: Movie[];
    type?: string;
    sortProp?: string;
    showDetails?: any;
    children?: ReactNode;
    onClickHandler?: any;
}

interface State {
    dropDownOpen: boolean;
    showDetails: boolean;
}

const MovieList = (props: Props): JSX.Element => {

    // eslint-disable-next-line prefer-const
    let [dropDownOpen, showDetails] = [false, false];

    const handleEdit = () => {
        return dropDownOpen = !dropDownOpen;
    };

    const sortedArray = (movieList, key) => {
        return movieList.sort((a, b) => {
            if (key === 'release_date') {
                return parseInt(a[key]) - parseInt(b[key]);
            }
            return a[key] > b[key];
        });
    }

    useEffect(() => {
        if (props.sortProp !== "Year") {
            sortedArray(props.movies, props.sortProp)
        }
    }, [props]);
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return (
        <Row className='container-fluid'>
            {props.children}
            {props.movies.map((movie, index) => (
                <React.Fragment key={index}>
                    <Col>
                        <Row>
                            <Col>
                                <img src={movie.poster_path} alt='movie' onClick={() => props.showDetails(!showDetails, movie)}>
                                </img>
                                <Button className='topright' onClick={() => handleEdit()}>&#8942;</Button>
                                {dropDownOpen && <ListModal isOpen={dropDownOpen} />}
                            </Col>
                            <Col>
                                <span className='movie-text-style'>{movie.title}</span>
                            </Col>
                            <Col>
                                <span className='movie-text-style'>{movie.release_date}</span>
                            </Col>
                        </Row>
                    </Col>
                </React.Fragment>
            ))}
        </Row>
    );

}
export default MovieList;