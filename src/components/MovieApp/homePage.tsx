/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useCallback, useState } from "react";
import MainComponent from './mainComponet';
import DisplayComponent from './displayComponent';
import ErrorBoundary from "./errorBoundary";

interface Props {
  children?: ReactNode;
  showDetails?: boolean;
}

export const HomePage = (props: Props): JSX.Element => {
  const [showDetails, toggle] = useState(false);
  const [movie, movieHandler] = useState();
  
  const showDetailsHandler = useCallback((x,movie) => {
    toggle(x);
    movieHandler(movie)
  }, []);

  return (
    <React.Fragment>
      <ErrorBoundary>
        <MainComponent showMovieDetails={showDetails} movieDetail={movie} />
        <DisplayComponent showMovieDetails={showDetailsHandler} />
      </ErrorBoundary>
    </React.Fragment>
  )
}
export default HomePage;