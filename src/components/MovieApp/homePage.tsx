import React from "react";
import MainComponent from './mainComponet';
import DisplayComponent from './displayComponent';

export const HomePage = (): JSX.Element => ( 
    <React.Fragment>
      <MainComponent />
      <DisplayComponent/>
    </React.Fragment>
  )
export default HomePage;