import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  render() {
    // connect() 호출을 통해 주입됨:
    // dispatch는 변화를 일으킨다.
    const { dispatch, visibleTodos, visibilityFilter, count } = this.props;
    return (
      <div className="container">
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          }
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            dispatch(completeTodo(id))
          }
        />
        <Footer
          count={count}
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }
        />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE',
  ]).isRequired,
  count: PropTypes.func.isRequired,
};

function countTodos(todos, filter) {
  let count = 0;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      count = todos.length;
      return count;
    case VisibilityFilters.SHOW_COMPLETED:
      todos.forEach((todo) => {
        if (todo.completed) count += 1;
      });
      return count;
    case VisibilityFilters.SHOW_ACTIVE:
      todos.forEach((todo) => {
        if (!todo.completed) count += 1;
      });
      return count;
    default:
      return count;
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return null;
  }
}

// 주어진 전역 상태에서 어떤 props를 주입하기를 원하나요?
// 노트: 더 나은 성능을 위해서는 https://github.com/faassen/reselect 를 사용하세요
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    count: filter => countTodos(state.todos, filter)
    ,
  };
}

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(select)(App);
