import update from "immutability-helper"
import {actionTypes} from "../actionTypes";

export const is = {
    height: window.innerHeight,
    width: window.innerWidth
}

export function r(s: typeof is = is, a: actionTypes) {
    switch (a.type) {
        case "update-dims":
            return update(s, {$set: {height: a.height, width: a.width}})
        default:
            return s
    }
}
