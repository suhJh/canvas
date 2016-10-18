import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Container, Tutorial } from './layouts';
import { Gallery } from './gallery';
import { TestArea } from './testarea';
import TodoApp from './redux';
import Reddit from './reddit';


class NoMatch extends React.PureComponent {
  getDefaultProps() {
    return {
      noMatchTitle: '요청하신 페이지가 존재하지 않습니다.',
    };
  }

  render() {
    const noMatchTitle = this.props.noMatchTitle;
    return <div>{noMatchTitle}</div>;
  }
}

NoMatch.PropTypes = {
  noMatchTitle: React.PropTypes.string,
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Tutorial} />
      <Route path="/tutorials" component={Tutorial} />
      <Route path="/todos" component={TodoApp} />
      <Route path="/reddit" component={Reddit} />
      <Route path="/gallery" component={Gallery} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>, document.getElementById('container')
);
