import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li
        className="list-group-item"
      >
        <span
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
          }}
          onClick={this.props.onClick}
        >
          {this.props.text}
        </span>
        <a className="btn btn-sm btn-danger text-right pull-right" onClick={this.props.onDeleteClick}>
          삭제
        </a>
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
