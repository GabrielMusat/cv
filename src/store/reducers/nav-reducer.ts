import update from "immutability-helper"
import {actionTypes} from "../actionTypes";
import {IStage} from "../../types";

export const is = {
    stage: "welcome" as IStage
}

export function r(s: typeof is = is, a: actionTypes) {
    switch (a.type) {
        case "set-stage":
            return update(s, {stage: {$set: a.stage}})
        default:
            return s
    }
}
