import {CounterAction} from '../actions/CounterActionsProvider';
export const counterReducer = (state: number = 0, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
