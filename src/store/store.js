import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import headerReducer from "./reducers/headerReducer";
import productsReducer from "./reducers/productsReducer";

const rootReducer = combineReducers({
    user: loginReducer,
    header: headerReducer,
    products: productsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
