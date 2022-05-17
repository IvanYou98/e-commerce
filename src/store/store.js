import {compose, createStore, applyMiddleware} from 'redux'
import {logger} from "redux-logger/src";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import {rootReducer} from "./root-reducer";


const middlewares = [logger, thunk];

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store)




