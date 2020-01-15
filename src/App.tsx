import React from 'react';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import HomePage from './containers/home-page';
import reducers from './reducers';
import './App.scss';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
