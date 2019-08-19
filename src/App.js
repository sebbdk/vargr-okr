import React from 'react';
import { Provider } from 'react-redux'

import logo from './logo.svg';
import { store } from './store'
import './App.css';
import Okr from './components/okr';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Okr></Okr>
      </div>
    </Provider>
  );
}

export default App;
