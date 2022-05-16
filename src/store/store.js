import {compose, createStore, applyMiddleware} from 'redux'
import {logger} from "redux-logger/src";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import {rootReducer} from "./root-reducer";


const middlewares = [logger];

const composeEnhancers = compose(applyMiddleware(...middlewares));

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store)




