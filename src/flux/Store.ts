import { ReduceStore } from 'flux/utils';
import CounterDispatcher from './Dispatcher';

type Payload = any;


class CounterStore extends ReduceStore<number,Payload> {

  constructor() {
    super(CounterDispatcher)
  }

  getInitialState(): number {
    return 0;
  }

  reduce(state: number, action: any): number {
    switch (action.type) {
      case 'INCREMENT_NUMBER':
        const newIncState = state + 1;
        return newIncState;
      case 'DECREMENT_NUMBER':
      const newDecState = state - 1;
        return newDecState;
      case 'ZERO_NUMBER':
        const newZeroState = 0
        return newZeroState;
      case 'RANDOM_NUMBER':
        return ~~(Math.random() * 100000) + 1
      default:
        return state;
    }
  }
}

export default new CounterStore();