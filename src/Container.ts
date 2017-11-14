import Actions from './flux/Actions';
import CounterStore from './flux/Store';
import { Container } from 'flux/utils';
import AppView from './AppView';

function getStores() {
    return [CounterStore];
}

function getState()  {
    return {
      counter: CounterStore.getState(),
      onIncrementNumber: Actions.addNumber,
      onDecrementNumber: Actions.decrementNumber,
      onZeroNumber: Actions.zeroNumber,
      onRandomNumber: Actions.randomNumber
    };
  }

export default Container.createFunctional(AppView, getStores, getState);