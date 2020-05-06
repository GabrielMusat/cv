import {r as rNav, is as isNav} from "./reducers/nav-reducer"

import {combineReducers, createStore} from "redux";

const combinedReducers = combineReducers({
    nav: rNav
})

export interface IStore {
    nav: typeof isNav
}

export const store = createStore(combinedReducers)
