import {combineReducers} from 'redux';
import {add} from './add';
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";


export const masterReducer= combineReducers({
    add:add,
    auth: authReducer,
    errors: errorReducer
    
   
});      