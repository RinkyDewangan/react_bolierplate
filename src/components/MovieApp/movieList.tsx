/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Row, Col} from 'reactstrap';
import './movies.css'

export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

class MovieList extends React.Component<{movies:Movie[]},ReturnType<any>>{
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Row className='container-fluid'>
			{this.props.movies.map((movie, index) => (
                <React.Fragment key={index}>
					<Col>
                        <Row>
                            <Col>
                                <img src={movie.Poster} alt='movie'></img>  
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
}
export default MovieList;