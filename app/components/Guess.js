// @flow
import React, { Component } from 'react';
import Board from './Board';

class Guess extends Component {
  render() {
    return (
      <div>
        <Board guess />
      </div>
    );
  }
}

export default Guess;
