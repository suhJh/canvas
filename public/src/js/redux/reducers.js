import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

const { SHOW_ALL } = VisibilityFilters;


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  // bits 12-15 of the time_hi_and_version field to 0010
  s[14] = '4';
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';

  const uuid = s.join('');
  return uuid;
}

function getindex(state = [], id) {
  let index = -1;
  for (let i = 0; i < state.length; i += 1) {
    if (state[i].id === id) {
      index = i;
      break;
    }
  }
  return index;
}

/* 이렇게 이상하게 하는 이유는 state를 직접 안건들기 위함... */
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: createUUID(),
        text: action.text,
        completed: false,
      }];
    case COMPLETE_TODO:
      const index = getindex(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          completed: !state[index].completed,
        }),
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
