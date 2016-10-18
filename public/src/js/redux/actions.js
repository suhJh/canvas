/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO_MULTI = 'DELETE_TODO_MULTI';
export const COMPLETE_TODO_MULTI = 'COMPLETE_TODO_MULTI';


/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};


/*
 * action creators
 */
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}

export function deleteTodoMulti(ids) {
  return { type: DELETE_TODO_MULTI, ids };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
