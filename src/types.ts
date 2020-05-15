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

export interface IBasicInfo {
    name: string
    residency: string
    birthdate: string
    email: string
    github: string
    linkedin: string
}

export interface ITechnology {
    name: string
    purpose: string
}

export interface IProject {
    name: string
    subtitle: string
    link: string
    technologies: ITechnology[]
}

export interface IJob {
    logo: any
    corporation: string
    occupation: string
    timestamp: string
    tasks: string[]
    projects: IProject[]
}

export interface IEducation {
    university: string
    title: string
    timestamp: string
}

export interface IConfig {
    basicInfo: IBasicInfo,
    job: string
    languages: string[]
    technology: Record<string, string[]>
    jobs: IJob[]
    education: IEducation[]
}
