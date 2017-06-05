// @flow
import React, { Component } from 'react';
import styles from './Guess.css';
import Board from './Board.js';

class Guess extends Component {
  render() {
    return (
      <div>
        <Board guess />
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
            background: white;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 25px;
            border: 1px solid black;
          }
          .guessed {
            border: 1px solid white;
          }
          .gray.guessed {
            background: gray;
            color: gray;
          }
          .red.guessed {
            background: red;
            color: red;
          }
          .blue.guessed {
            background: blue;
            color: blue;
          }
          .black.guessed {
            background: black;
            color: black;
          }

          @media (min-width: 900px) {
            .line {
              font-size: 36px;
            }
          }
          `
        }
      </style>
    </div>
    );
  }
}

export default Guess;
