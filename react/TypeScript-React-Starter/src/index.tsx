import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/Hello';

ReactDOM.render(
  // <App />,
  // document.getElementById('root') as HTMLElement
  <Hello name="Typescript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
