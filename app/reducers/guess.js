// @flow
import { INCREMENT_GUESS, DECREMENT_GUESS } from '../actions/guess';

export type guessStateType = {
  guess: number
};

type actionType = {
  type: string
};

export default function guess(state: number = 0, action: actionType) {
  switch (action.type) {
    case INCREMENT_GUESS:
      return state + 1;
    case DECREMENT_GUESS:
      return state - 1;
    default:
      return state;
  }
}
