// @flow
import React, { Component } from 'react';
import styles from './Help.css';
import Board from './Board.js';

class Help extends Component {
  render() {
    return (
      <div>
        <Board help />
      <style jsx>
        {
          `
          .line {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            max-height: 100vh;
          }
          .gray, .red, .black, .blue {
            width: calc(20% - 25px);
            height: 15vh;
            margin: 10px;
          }
          .gray {
            background: gray;
          }
          .red {
            background: red;
          }
          .blue {
            background: blue;
          }
          .black {
            background: black;
          }
          `
        }
      </style>
    </div>
    );
  }
}

export default Help;
