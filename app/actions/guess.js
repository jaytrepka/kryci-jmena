// @flow
import type { guessStateType } from '../reducers/guess';

type actionType = {
  type: string
};

export const INCREMENT_GUESS = 'INCREMENT_GUESS';
export const DECREMENT_GUESS = 'DECREMENT_GUESS';

export function increment() {
  return {
    type: INCREMENT_GUESS
  };
}

export function decrement() {
  return {
    type: DECREMENT_GUESS
  };
}

export function incrementIfOdd() {
  return (dispatch: (action: actionType) => void, getState: () => guessStateType) => {
    const { guess } = getState();

    if (guess % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
