import React, { PropTypes, Component } from 'react';

export default class NoMatch extends Component {
  getDefaultProps() {
    return {
      text: '요청하신 페이지가 존재하지 않습니다.',
    };
  }

  render() {
    return (<div className="row">{this.props.text}</div>);
  }
}

NoMatch.PropTypes = {
  text: PropTypes.string.isRequired,
};
