import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { routes } from './routes';
import { store } from './store';

ReactDom.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        { routes.map((route, idx) => <Route key={ idx } { ...route } />) }
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
