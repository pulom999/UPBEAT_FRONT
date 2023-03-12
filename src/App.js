import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Hexmap from './components/Hexmap';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route path="/hexmap" component={Hexmap} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
