import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './components/App';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/app" component={App}>
        </Route>
    </Router>,
    document.getElementById('root')
);



