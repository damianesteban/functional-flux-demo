import ActionTypes from './ActionTypes';
import CounterDispatcher from './Dispatcher';

// Actions
const Actions = {
  addNumber() {
    CounterDispatcher.dispatch({
      type: ActionTypes.INCREMENT_NUMBER
    })
  },
  decrementNumber() {
    CounterDispatcher.dispatch({
      type: ActionTypes.DECREMENT_NUMBER
    })
  },
  zeroNumber() {
    CounterDispatcher.dispatch({
      type: ActionTypes.ZERO_NUMBER
    })
  },
  randomNumber() {
    CounterDispatcher.dispatch({
      type: ActionTypes.RANDOM_NUMBER
    })
  }
}

export default Actions;