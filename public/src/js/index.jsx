import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Container, Tutorial } from './layouts';
import { Gallery } from './gallery';

class NoMatch extends React.PureComponent {
  render() {
    const noMatchTitle = this.props.noMatchTitle || '요청하신 페이지가 존재하지 않습니다.';
    return <div>{noMatchTitle}</div>;
  }
}
NoMatch.propTypes = {
  noMatchTitle: React.PropTypes.string,
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Tutorial} />
      <Route path="/tutorials" component={Tutorial} />
      <Route path="/testarea" component={Gallery} />
      <Route path="/gallery" component={Gallery} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>, document.getElementById('container')
);
