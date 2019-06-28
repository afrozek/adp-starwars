import { combineReducers } from 'redux';

let reducer = function (state, action) {
  
        return {
           version: '2.0',
           apiBaseUrl: "localhost"
        };
    
  
  }

const rootReducer = combineReducers({reducer});

export default rootReducer;