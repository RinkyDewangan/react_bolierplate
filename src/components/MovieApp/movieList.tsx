/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useEffect, useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './movies.css'
import ListModal from './listModal'
import MovieDetails from './movieDetails'
import { movieList } from 'src/data/movieList';

export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Description: string;
    Rating: number;
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
    let [dropDownOpen,showDetails] = [false,false];
  
    const handleEdit = () => {
        return dropDownOpen = !dropDownOpen;
    };

    const sortedArray = (movieList, key) => {
        return movieList.sort((a, b) => {
            if (key === 'Year') {
                return parseInt(a[key]) - parseInt(b[key]);
            }
            return a[key] > b[key];
        });
    }

    useEffect(() => {
        if(props.sortProp !== "Year"){
            sortedArray(props.movies,props.sortProp)
        }
      }, [props]);
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return (
        <Row className='container-fluid'>
            {props.children}
            {movieList.map((movie, index) => (
                <React.Fragment key={index}>
                    <Col>
                        <Row>
                            <Col>
                                <img src={movie.Poster} alt='movie' onClick={()=>props.showDetails(!showDetails,movie)}>
                                </img>
                                <Button className='topright' onClick={()=>handleEdit()}>&#8942;</Button>
                                {dropDownOpen && <ListModal isOpen={dropDownOpen} />}
                            </Col>
                            <Col>
                                <span className='movie-text-style'>{movie.Title}</span>
                            </Col>
                            <Col>
                                <span className='movie-text-style'>{movie.Year}</span>
                            </Col>
                        </Row>
                    </Col>
                </React.Fragment>
            ))}
        </Row>
    );

}
export default MovieList;