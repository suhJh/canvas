import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Container, Tutorial, NoMatch } from './layouts';
import { Gallery } from './gallery';
//  import { TestArea } from './testarea';
import TodoApp from './redux';
import Reddit from './reddit';
import PlayRedux from './playRedux';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Tutorial} />
      <Route path="/tutorials" component={Tutorial} />
      <Route path="/todos" component={TodoApp} />
      <Route path="/reddit" component={Reddit} />
      <Route path="/playRedux" component={PlayRedux} />
      <Route path="/gallery" component={Gallery} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>, document.getElementById('container')
);
