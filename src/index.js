import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // import your CSS file
import App from './App';
import Hexmap from './components/Hexmap';


ReactDOM.render(<Hexmap />, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
