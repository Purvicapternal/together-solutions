import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {masterReducer} from './reducer/index';


const composeEnhancers=  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;


const store=createStore(masterReducer,composeEnhancers(applyMiddleware(thunk)));


export default store; 