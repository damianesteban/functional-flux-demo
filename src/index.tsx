import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './Container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
