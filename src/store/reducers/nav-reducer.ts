import update from "immutability-helper"
import {actionTypes} from "../actionTypes";
import {IDialog, IStage} from "../../types";

export const is = {
    stage: "welcome" as IStage,
    dialog: null as null | IDialog
}

export function r(s: typeof is = is, a: actionTypes) {
    switch (a.type) {
        case "set-stage":
            return update(s, {stage: {$set: a.stage}})
        case "open-dialog":
            return update(s, {dialog: {$set: a.data}})
        case "close-dialog":
            return update(s, {dialog: {$set: null}})
        default:
            return s
    }
}
