export type IStage = 'welcome' | "cv"

export interface IDims {
    height: number
    width: number
}

export interface IDialog {
    project: string
    techName: string
    techPurpose: string
}

export type INotification = {
    message: string,
    variant: 'info' | 'warning' | 'success' | 'error'
}

export interface ITransition {
    duration?: number
    delay?: number
}
