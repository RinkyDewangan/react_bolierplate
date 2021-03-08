/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Row, Col, Button} from 'reactstrap';
import './movies.css'
import ListModal from './listModal'

export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface Props {
    isOpen?: boolean;
    onExit?: boolean;
    movies: Movie[];
    type?: string;
    sortProp?:string;
}
  
interface State {
    dropDownOpen : boolean;
}

class MovieList extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = { dropDownOpen: false};
    }
    private handleEdit= (e) =>{
        this.setState({ dropDownOpen: !this.state.dropDownOpen});
    }

    private sortedArray = (movieList,key) => {
        return movieList.sort((a, b) => {
            if(key === 'Year'){
                return parseInt(a[key]) - parseInt(b[key]);
            }
            return a[key] > b[key];
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Row className='container-fluid'>
			{this.sortedArray(this.props.movies,this.props.sortProp).map((movie, index) => (
                <React.Fragment key={index}>
					<Col>
                        <Row>
                            <Col>
                                <img src={movie.Poster} alt='movie'></img>  
                                <Button className='topright' onClick={this.handleEdit}>&#8942;</Button>
                                {this.state.dropDownOpen && <ListModal isOpen={this.state.dropDownOpen}/>}
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