import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom';
import Weapon from './weapon';
import Contact from './contact';
import Notfound from './notfound';

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/weapon">Оружие</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
          </li>
        </ul>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/weapon" component={Weapon} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
      </div>
    </Router>
  )

ReactDOM.render((
    routing
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

