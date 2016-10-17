import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters, CountFilters } from './actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  render() {
    // connect() 호출을 통해 주입됨:
    const { dispatch, visibleTodos, visibilityFilter, countTodosFilter } = this.props;
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
          countTodos={countTodosFilter}
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
};

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

function countTodos(todos, filter) {
  let count = 0;
  switch (filter) {
    case CountFilters.COMPLETED:
      todos.forEach((todo) => {
        if (todo.completed) count += 1;
      });
      return count;
    case CountFilters.ACTIVE:
      todos.forEach((todo) => {
        if (!todo.completed) count += 1;
      });
      return count;
    default:
      return 0;
  }
}

// 주어진 전역 상태에서 어떤 props를 주입하기를 원하나요?
// 노트: 더 나은 성능을 위해서는 https://github.com/faassen/reselect 를 사용하세요
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    countTodos: countTodos(state.todos, state.countTodosFilter),
  };
}

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(select)(App);
