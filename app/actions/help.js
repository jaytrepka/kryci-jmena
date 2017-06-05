// @flow
import type { helpStateType } from '../reducers/help';

type actionType = {
  type: string
};

export const INCREMENT_HELP = 'INCREMENT_HELP';
export const DECREMENT_HELP = 'DECREMENT_HELP';

export function increment() {
  return {
    type: INCREMENT_HELP
  };
}

export function decrement() {
  return {
    type: DECREMENT_HELP
  };
}

export function incrementIfOdd() {
  return (dispatch: (action: actionType) => void, getState: () => helpStateType) => {
    const { help } = getState();

    if (help % 2 === 0) {
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
