import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app/app.jsx';
import NoFound from './app/not-found.jsx';
import Buttons from './app/buttons.jsx';
import Dialog from './app/dialog.jsx';
import DropdownMenu from './app/dropdown-menu.jsx';
import IconButton from './app/icon-button.jsx';
import Tab from './app/tab.jsx';
import Toast from './app/toast.jsx';

require ('./index.scss');

injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Buttons}/>
      <Route path="buttons" component={Buttons}/>
      <Route path="dialog" component={Dialog}/>
      <Route path="dropdown-menu" component={DropdownMenu}/>
      <Route path="icon-button" component={IconButton}/>
      <Route path="tab" component={Tab}/>
      <Route path="toast" component={Toast}/>
      <Route path="*" component={NoFound}/>
    </Route>
  </Router>,
  document.getElementById("main")
);
