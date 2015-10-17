import * as ActionTypes from '../constants/ActionTypes';

let initialState = [{
    shipmentId: "SH10111503",
    type: "exception",
    message: "Shipment lost in transit",
    age: "4 Days",
    completed: false    
    },
    {
    shipmentId: "SH10111503",
    type: "exception",
    message: "Shipment lost in transit",
    age: "36 Hours",
    completed: false    
    },
    {
    shipmentId: "SH10111503",
    type: "exception",
    message: "Shipment lost in transit",
    age: "7 Hours",
    completed: false   
    },
    {
    shipmentId: "SH10111503",
    type: "exception",
    message: "Shipment lost in transit",
    age: "7 Hours",
    completed: false   
    },
    {
    shipmentId: "SH10111503",
    type: "exception",
    message: "Shipment lost in transit",
    age: "7 Hours",
    completed: false   
    },
    {
    shipmentId: "SH10111503",
    type: "confirm",
    message: "Confirm Pickup",
    age: "36 Hours",
    completed: false    
    },
    {
    shipmentId: "SH10111503",
    type: "confirm",
    message: "Confirm Pickup",
    age: "4 Days",
    completed: false    
    },
    {
    shipmentId: "SH10111503",
    type: "confirm",
    message: "Confirm Delivery",
    age: "17 Hours",
    completed: false    
    },
    {
    shipmentId: "SH10111503",
    type: "confirm",
    message: "Confirm Delivery",
    age: "14 Hours",
    completed: false    
    },
    {
    shipmentId: "SH10111503",
    type: "confirm",
    message: "Confirm Pickup",
    age: "12 Hours",
    completed: false    
    },
    {
    shipmentId: "SH10111503",
    type: "dispatch",
    message: "Waiting for Dispatch",
    age: "18 Hours",
    completed: false    
    },
    {
    shipmentId: "SH10111503",
    type: "dispatch",
    message: "Waiting for Dispatch",
    age: "7 Hours",
    completed: false   
    },
    {
    shipmentId: "SH10111503",
    type: "dispatch",
    message: "Waiting for Dispatch",
    age: "7 Hours",
    completed: false   
    },

    ];

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
