import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
import { createUUID, getindex } from './utils';

const { SHOW_ALL } = VisibilityFilters;


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}


/* 이렇게 이상하게 하는 이유는 state를 직접 안건들기 위함... */
function todos(state = [], action) {
  let index = null;
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: createUUID(),
        text: action.text,
        completed: false,
      }];
    case COMPLETE_TODO:
      index = getindex(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          completed: !state[index].completed,
        }),
        ...state.slice(index + 1),
      ];
    case DELETE_TODO:
      index = getindex(state, action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
}


const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
