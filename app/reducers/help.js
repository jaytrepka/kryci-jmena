// @flow
import { INCREMENT_HELP, DECREMENT_HELP } from '../actions/help';

export type helpStateType = {
  help: number
};

type actionType = {
  type: string
};

export default function help(state: number = 0, action: actionType) {
  switch (action.type) {
    case INCREMENT_HELP:
      return state + 1;
    case DECREMENT_HELP:
      return state - 1;
    default:
      return state;
  }
}
