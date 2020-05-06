import {IStage} from "../types";

interface IUpdateDims {
    type: 'update-dims'
    height: number
    width: number
}

interface ISetStage {
    type: 'set-stage'
    stage: IStage
}

export type actionTypes = IUpdateDims | ISetStage
