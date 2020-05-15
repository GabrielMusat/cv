import {IConfig} from "./types";

export const config: IConfig = {
    welcome: "Welcome to awesome resume maker",
    basicInfo: {
        name: "",
        residency: "",
        birthdate: "",
        email: "",
        github: "https://github.com/GabrielMusat/cv",
        linkedin: ""
    },
    job: '',
    mainPhoto: require("./images/photo.png"),
    languages: ["english"],
    technology: {
        "Programming languages": ["javascript", "typescript"],
        "Frontend": ["react", "redux"],
        "Backend": ["express"]
    },
    jobs: [
        {
            logo: require("./images/internet.png"),
            corporation: "My own",
            occupation: "resume maker",
            timestamp: "all my life",
            tasks: [
                "Making awesome resumes",
            ],
            projects: [
                {
                    name: "Awesome Resumes SA",
                    subtitle: "Awesome resume maker",
                    link: "https://github.com/GabrielMusat/cv",
                    technologies: [
                        {name: "typescript", purpose: "Language chosen for making awesome resumes"},
                        {name: "react", purpose: "Library for making awesome resumes"},
                    ]
                }
            ]
        },
    ],
    education: [
        {
            university: require("./images/internet.png"),
            title: "Master of resume making",
            timestamp: "all my life"
        }
    ]
}
