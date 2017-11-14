import {Dispatcher} from 'flux';

// Dispatcher
class AppDispatcher extends Dispatcher<any> {
  dispatch(action = {}) {
    console.log('DISPATCHED', action);
    super.dispatch(action);
  }
}
export default new AppDispatcher();