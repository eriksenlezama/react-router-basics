import React from 'react';

import {Root} from "./Root";

export class User extends React.Component {
  render(){
    return(
      <div>
        <Root />
        <h3>The User Page</h3>
        <p>User ID: </p>
      </div>
    );
  }
}