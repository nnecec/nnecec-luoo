import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'

import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import stores from './stores'
import Root from './pages'

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const ProviderStores = {
  routing: routingStore,
  ...stores
}

const history = syncHistoryWithStore(browserHistory, routingStore);

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Provider {...ProviderStores}>
        <Router>
          <Root></Root>
        </Router>
      </Provider>
    );
  }
}

export default App;