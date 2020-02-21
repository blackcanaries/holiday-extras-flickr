import { applyMiddleware, compose, createStore } from "redux";
import reduxImmutableStateVariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateVariant()))
  );
}
