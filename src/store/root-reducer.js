import {combineReducers, createStore} from "redux";
import {userReducer} from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: userReducer
})

