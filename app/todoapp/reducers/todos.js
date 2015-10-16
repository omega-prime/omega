import * as ActionTypes from '../constants/ActionTypes';

let initialState = [{
  text: 'Use Redux Man',
  completed: false,
  type: 'exception',
  date: '',
  priority: '',
  id: 0
},
{
  text: 'Cool Man',
  completed: false,
  type: 'confirmed',
  date: '',
  priority: '',
  id: 1
},{
  text: 'Sweet Bro',
  completed: false,
  type: '',
  date: '',
  priority: '',
  id: 2
},{
  text: 'Use Redux Man',
  completed: false,
  type: '',
  date: '',
  priority: '',
  id: 3
},{
  text: 'Use Redux Man',
  completed: false,
  type: '',
  date: '',
  priority: '',
  id: 4
},{
  text: 'Use Redux Man',
  completed: false,
  type: '',
  date: '',
  priority: '',
  id: 5
},{
  text: 'Use Redux Man',
  completed: false,
  type: '',
  date: '',
  priority: '',
  id: 6
}];

const actionsMap = {
  [ActionTypes.ADD_TODO]: (state, action) => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      text: action.text
    }, ...state];
  },
  [ActionTypes.DELETE_TODO]: (state, action) => {
    return state.filter(todo =>
      todo.id !== action.id
    );
  },
  [ActionTypes.EDIT_TODO]: (state, action) => {
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { text: action.text }) :
        todo
    );
  },
  [ActionTypes.COMPLETE_TODO]: (state, action) => {
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { completed: !todo.completed }) :
        todo
    );
  },
  [ActionTypes.COMPLETE_ALL]: (state, action) => {
    const areAllCompleted = state.every(todo => todo.completed);
    return state.map(todo => Object.assign({}, todo, {
      completed: !areAllCompleted
    }));
  },
  [ActionTypes.CLEAR_COMPLETED]: (state, action) => {
    return state.filter(todo => todo.completed === false);
  }
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
