import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    const style = {
      marginTop: '20px',
    };
    return (
      <div
        style={style}
        className="panel panel-primary"
      >
        <div className="panel-heading">
          할일 목록
        </div>
        <div className="panel-body" style={{ minHeight: '200px' }}>
          <ul className="list-group" >
            {this.props.todos.map((todo, index) =>
              <Todo
                {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
