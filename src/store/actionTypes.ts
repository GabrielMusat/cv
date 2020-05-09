import {IDialog, INotification, IStage} from "../types";

interface IUpdateDims {
    type: 'update-dims'
    height: number
    width: number
}

interface ISetStage {
    type: 'set-stage'
    stage: IStage
}

interface ISetDialog {
    type: 'open-dialog'
    data: IDialog
}

interface ICloseDialog {
    type: 'close-dialog'
}

interface ISelectNotification {
    type: 'notify'
    notification: null | INotification
}

export type actionTypes = IUpdateDims | ISetStage | ISetDialog | ICloseDialog | ISelectNotification
