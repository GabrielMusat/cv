import {r as rNav, is as isNav} from "./reducers/nav-reducer"
import {r as rDims, is as isDims} from "./reducers/dims-reducer"

import {combineReducers, createStore} from "redux";

const combinedReducers = combineReducers({
    nav: rNav,
    dims: rDims
})

export interface IStore {
    nav: typeof isNav
    dims: typeof isDims
}

export const store = createStore(combinedReducers)
