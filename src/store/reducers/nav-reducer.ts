import update from "immutability-helper"
import {actionTypes} from "../actionTypes";
import {IDialog, INotification, IStage} from "../../types";

export const is = {
    stage: "welcome" as IStage,
    dialog: null as null | IDialog,
    notification: null as null | INotification,
}

export function r(s: typeof is = is, a: actionTypes) {
    switch (a.type) {
        case "set-stage":
            return update(s, {stage: {$set: a.stage}})
        case "open-dialog":
            return update(s, {dialog: {$set: a.data}})
        case "close-dialog":
            return update(s, {dialog: {$set: null}})
        case 'notify':
            return update(s, {notification: {$set: a.notification}});
        default:
            return s
    }
}
