import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import thunk from "redux-thunk";
import {reducer as foodReducer} from "./foodReducer/reducer"
import {reducer as cartReducer} from "./cartReducer/reducer"
import {reducer as AuthReducer} from "../redux/authReducer/reducer"


const rootReducer = combineReducers({
    foodReducer,
    AuthReducer,
    cartReducer,
  });
  
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

