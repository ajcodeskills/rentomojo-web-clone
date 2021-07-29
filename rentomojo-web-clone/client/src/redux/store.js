import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { gitReducer } from "./github/reducer";
import { regReducer } from "./reg/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    reg: regReducer,
    git: gitReducer
})


const composeEnhancers = 
    (typeof window !== 'undefined' && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
        compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)


export const store = createStore(
    rootReducer,
    enhancer
    );

