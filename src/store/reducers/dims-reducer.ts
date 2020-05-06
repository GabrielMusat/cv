import update from "immutability-helper"
import {actionTypes} from "../actionTypes";
import {IDims} from "../../types";

export const is: IDims = {
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
