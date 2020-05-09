export const config = {
    name: "Gabriel Musat Mestre",
    residency: "Pozuelo de Alarcón, Madrid",
    birthdate: "Birth date: 04-12-1994",
    email: "gabimtme@gmail.com",
    github: "https://github.com/GabrielMusat",
    linkedin: "www.linkedin.com/in/gabriel-musat",
    about: "",
    technology: {
        "Programming languages": ["python", "javascript", "typescript", "go", "java"],
        "Frontend": ["react", "redux", "android"],
        "Backend": ["gin", "express", "tornado", "aiohttp", "socketio"],
        "Databases": ["mysql", "mongo"],
        "Devops": ["docker", "kubernetes", "jenkins", "gcp", "firebase", "nginx"],
        "Machine learning": ["pytorch", "tensorflow", "keras"]
    },
    jobs: {
        job1: {
            logo: require("./images/bat.png"),
            corporation: "Brain&Tech",
            occupation: "Software development team leader",
            timestamp: "08/2018 - Ongoing...",
            tasks: [
                "software development team lead",
                "React-Redux for front-end development",
                "Python asyncio, Nodejs and Golang for back-end development",
                "Pytorch and Tensorflow for NLP with Seq2Seq and attention models",
                "DevOps engineering with Docker and Kubernetes for application auto scalability and automatic deployment",
                "Google Compute Engine, Google Cloud Storage, Google Kubernetes Engine and Google Cloud SQL for application hosting",
                "Python on containerized applications for data extraction and analysis",
                "Jenkins and Docker for platform testing",
                "MySql and mongodb database integration with back-end services in nodejs and Python"
            ],
            projects: [
                {
                    name: "Ciber Brother",
                    subtitle: "social nets monitor for minors",
                    technologies: [
                        {name: "python", purpose: "Used for making the API rest that the clients use as an interface to a MySql database. Also used in containerized applications running on kubernetes, it´s main purpose is parallel data extraction from the users´s social nets"},
                        {name: "javascript", purpose: "JavaScript´s asynchronous execution works great for automating kubernetes´s pods and jobs deployment, so in this project it is used as an orchestrating module that decides when to launch some job on kubernetes"},
                        {name: "typescript", purpose: "All the front-ends that the clients use for accessing the platform services are written in React and TypeScript. This combination is useful for big and bug-less UIs"},
                        {name: "react", purpose: "It´s the only framework used for front-end development in this project, combined with TypeScript and Redux makes and excellent programming experience"},
                        {name: "redux", purpose: "In all of the front-ends I´ve developed, Redux is a key element for front-end memory management, and personally I think it is basic when using React"},
                        {name: "aiohttp", purpose: "API rests are written in Aiohttp, combined with asynchronous libraries for accessing databases or making http calls it is very useful for client requests concurrency"},
                        {name: "socketio", purpose: "There are many microservices running on Kubernetes engine, and there is a central server which is the only one exposed to clients. Socketio is the framework used for realtime communication between this server and pods running in kubernetes"},
                        {name: "mysql", purpose: "MySql is where all the data is stored (all but files, which are stored on Google Cloud Storage). This project uses Google Cloud Sql as it´s only database"},
                        {name: "docker", purpose: "It´s used for CI/CD alongside with Jenkins and also for running microservices on Kubernetes engine"},
                        {name: "kubernetes", purpose: "The project´s angular stone. All the worker modules that extract and analyze data runs on containerized applications on kubernetes engine. It´s orchestration is automatically managed by a js module via kubernetes´s API"},
                        {name: "jenkins", purpose: "The CI/CD pipeline for continuous delivery is implemented in Jenkins and Docker containers that simulates the platform and test it before every commit to master branch"},
                        {name: "gcp", purpose: "All the code is hosted here, in Google Cloud Platform. The services used are Google Cloud MySql, Google Compute Engine, Google Cloud Storage and some AI APIs like Google Cloud Vision and Google Cloud Translate"},
                        {name: "nginx", purpose: "Nginx acts as a reverse proxy for connecting all the microservices running on GCP. It also handles authentication and limit http calling rate"},
                        {name: "firebase", purpose: "For front-end hosting and for managing clients authentication with it´s back-end SDK"},
                        {name: "tensorflow", purpose: "Used for NLP model development and serving alongside with keras. The most advanced algorithm served is a seq-2-seq with attention neural network that is able to tell when a child is saying inappropriate things for he´s or her´s age"},
                        {name: "keras", purpose: "Keras is used as high level API to develop neural network models. As keras is now part of Tensorflow, it is difficult not to use it. It has a really nice API and with Tensorflow 2.0 it is much nicer and faster to develop models"}
                    ]
                },
                {
                    name: "Atenea",
                    subtitle: "fake news management platform",
                    technologies: [
                        {name: "typescript", purpose: "For back-end development using Express web server framework and Socketio for real time communication with front-end. The typing gives the extra security needed for a bug-less app, and also makes the code auto-documented, for a huge back-end like this it is essential"},
                        {name: "go", purpose: "Some microservices in this project are very computational expensive, and other ones need real time huge amount of data updating with websockets. In both cases a powerful and fast language is needed, that´s wy Golang is used"},
                        {name: "react", purpose: "React-Redux-TypeScript, the perfect combination for making huge and scalable front-ends. That´s what this project uses for giving the clients a responsive and real-time data updating UI"},
                        {name: "redux", purpose: "For managing the front-end memory efficiently. In this particular case the Redux´s store is connected through a websocket to a Golang microservice that checks for data changes and updates it accordingly, so the UI components can abstract all the data updating as they are automatically updated"},
                        {name: "express", purpose: "The main back-end uses it. It also takes full advantage of it´s asynchronous io for managing multiple connections efficiently. It´s combined with Socketio websockets framework for communicating with the data extraction modules"},
                        {name: "socketio", purpose: "Almost all the modules use it. This platform depends on realtime data updating and also uses multiple programming languages, so a cross-language websocket framework like this is very useful"},
                        {name: "mysql", purpose: "For storing data extracted and analyzed by the worker modules. The curious thing in this project it´s that those modules does not store data directly on MySql. There is one microservice written in Golang that does it for them and also keeps track of the changes made in order to update data to connected front-ends in real time through websocket protocol"},
                        {name: "gcp", purpose: "For vm execution on Google Compute Engine, for Sql hosting on Google Cloud Sql and for AI Image and Video analysis with Google Cloud Vision"},
                        {name: "nginx", purpose: "This reverse proxy encapsulate all the microservices under the same domain, serves de web apps and establish headers needed for upgrading a long polling http connection to websocket"}
                    ]
                },
                {
                    name: "Docfy",
                    subtitle: "documents auto-classification platform",
                    technologies: [
                        {name: "python", purpose: "This platform relies on a single back-end written in Python´s asyncio and the framework Tornado. It is constantly reading and writing from external services like mail servers, office 365 products, etc..., so asynchronicity is basic in this case. It could have been written in Nodejs, but the platform uses AI for classifying documents, so Python is the most suitable tool for this purpose"},
                        {name: "typescript", purpose: "Front-end development is made entirely on Typescript, using the React tsx way of coding and with a strongly typed Redux´s store"},
                        {name: "react", purpose: "The UI that the clients use for accessing it´s enterprise mail repositories with the classified documents, it is combined with Redux and with Typescript"},
                        {name: "redux", purpose: "For managing the memory in the web application. This particular project has a front-end with a lot of navigation, and too much shared elements, so it is very useful to centralize the app´s memory instead of just letting each component store it"},
                        {name: "tornado", purpose: "This framework is very useful for making non blocking Python code. This project needs to make a lot of requests to mail servers, cloud storage systems and office 365 products, so it´s non blocking io feature is essential"},
                        {name: "gcp", purpose: "Google Compute Engine is the only service this project uses from GCP. But unlike the other projects, this uses a MongoDb database running on a compute engine instance (a MongoDb Bitnami´s solution), so one of the instances is only a database with it´s own firewall and routing rules"},
                        {name: "mongo", purpose: "All the documents and info collected is stored in a MongoDb database, that has a very hierarchical tree structure due to the nature of data collected. It could have used a SQL database, but it is more complicated to store such structured data in a relational database, so, for simplicity, MongoDb is most suitable"},
                        {name: "tensorflow", purpose: "The deep learning models that classify documents by it´s content are based on NLP and recurrent neural networks. It also uses some Google tooling for OCR"},
                    ]
                }
            ]
        },
        job2: {
            logo: null,
            corporation: "Autonomous",
            occupation: "Mobile application developer",
            timestamp: "02/2019 - Ongoing...",
            tasks: [
                "React-Native for cross-platform mobile applications",
                "Administration of 3 currently running apps on Google Play (links available)",
                "Native Java for Android development",
                "Backend services with Nodejs and Golang",
                "AI integration for object detection and classification",
                "Google Cloud Platform and Firebase for back-end deployment"
            ],
            projects: [
                {
                    name: "Mushroom Identifier",
                    subtitle: "AI app for mushroom recognition",
                    technologies: [
                        {name: "java", purpose: "This is a native Android app, so it uses Java as it´s only programming language, it uses the Android SDK on Android Studio. Personally I prefer React-Native for mobile development, but this app needs an extreme performance as it uses real time object detection through the camera preview with resource intensive AI models"},
                        {name: "python", purpose: "As this app relies on neural network models, it´s development is made on Python using Pytorch library for model prototyping and training. The data extraction and processing pipelines are also developed on this language using other common libraries like Pandas"},
                        {name: "android", purpose: "This an only Android app, so it uses it´s SDK and it´s standard Java library with Android Studio for the app programming. It uses the TFLite library for deploying deep learning models on the devices."},
                        {name: "pytorch", purpose: "This app combines two of the most advanced deep learning technologies, one for object detection, using a custom variation of YOLOV3 model trained to detect where is a mushroom on an image and Xception, a classification model that once YOLO has cropped a mushroom from an image classifies it"},
                        {name: "firebase", purpose: "The main use of Firebase for this app are for user analytics and integrating with Google ads for monetizing"}
                    ]
                },
                {
                    name: "Fily",
                    subtitle: "wireless mobile to pc file uploader",
                    technologies: [
                        {name: "typescript", purpose: "This app has two front-ends, the web app that runs on the computer´s browser where the users want to send the files, and the mobile app that runs on the device where the files come from, both using React and React-Native respectively"},
                        {name: "go", purpose: "The back-end that connects the two front-ends is programmed in Golang. It uses websockets for real time file updating, so, when one user sends a file, the back-end immediately notifies the web app and sends it, and then the file is in the computer in milliseconds"},
                        {name: "react", purpose: "Plain React is used for the web app and React-Native is used for the mobile app, both written in TypeScript and with Redux memory management library integrated. Although the two apps are relatively simple, TypeScript has helped caching a lot of bugs before even compiling it to JavaScript"},
                        {name: "gin", purpose: "Golang back-end uses the Gin library as web server framework, it is very fast and scalable. It is integrated with Golang´s version of Socketio, the websockets framework"},
                        {name: "socketio", purpose: "For front-end real time updating. The server part of Socketio in this project is embedded in the Golang´s Gin web server. Golang´s Socketio library is very immature, and that caused some problems, but the basic functionality works great and it is really helpful"},
                        {name: "gcp", purpose: "Backend is hosted on Google Compute Engine and Google Cloud Storage is used as temporal distributed file storage. This is a trick that helps scalability and is very easy en cheap to use, as files are only stored some minutes"},
                        {name: "nginx", purpose: "Nginx exposes only an https port to the outside world and redirects all the requests to the Gin´s server, establishing websocket upgrade headers when needed"}
                    ]
                },
                {
                    name: "Counttr",
                    subtitle: "group money management app",
                    technologies: [
                        {name: "javascript", purpose: "This app is written in React-Native and JavaScript, that turned out on a really fast development, but bugs are more common to appear with this language. Personally, I would have written this app in TypesScript, but at the time I started with this project i didn´t knew that programming language very well"},
                        {name: "react", purpose: "React-Native was the framework chosen for this app. It was my first mobile app written on React-Native with Redux integrated, but it´s source code is pretty good for being the first time"},
                        {name: "redux", purpose: "This app uses Redux in very special way. It features automatic synchronization with cloud stored data, but it does not simply store data. It stores a list of Redux´s actions that, executed sequentially, form the data that must be rendered on the app. Each action has an attached timestamp, so, in order to sync, the app only has to requests actions with a timestamp greater than the last one stored"},
                        {name: "express", purpose: "Express with plain JavaScript as back-end. It has a very particular way of syncing with the app running on the users devices. it stores in it´s file system the actions that must be executed on an empty object in order to form the resulting data, instead of storing the resulting data itself, that helps a lot on synchronizing all the devices that inherits data from the same session"},
                        {name: "gcp", purpose: "The back-end is running on Google Compute Engine on a linux machine with systemd and Nginx as reverse proxy"},
                        {name: "nginx", purpose: "Reverse proxy that communicates the vm instance where the back-end is running to the outside world. It also limits the rate at which users makes http calls for security reasons"}
                    ]
                },
            ]
        },
        job3: {
            logo: require("./images/artenea.png"),
            corporation: "Artenea 3D",
            occupation: "product owner",
            timestamp: "07/2016 - Ongoing...",
            tasks: [
                "Product development team leader",
                "Frontend development in React-Redux",
                "Backend development on node's Express and socket.io framework",
                "Raspberry-Pi/Python for IoT engineering on 3D printing machines",
                "Google Compute Engine for back-end execution"
            ],
            projects: [
                {
                    name: "Ulab",
                    subtitle: "IoT platform for 3D printer machines real time control and monitor",
                    technologies: [
                        {name: "python", purpose: "This platform has three main parts, the front-end where users control their 3D printers, the back-end, and the code running inside the 3D printers (in IoT they will be called things). Python`s asyncio handles real time data updating through websockets and serial communication with the 3D printer in order to send it instructions, files, or info/status requests"},
                        {name: "typescript", purpose: "The back-end is written in Typescript, and it has a very smart system to send info from printer to front-ends. Printers are constantly updating info (temperatures, print completion, etc...). This back-end is smart and keeps track of the last info they sent to the front-end in order to, when new info is available, only updating the difference between new and old info, even if that info is in a deeply nested object. This is done with a MongoDb like syntax"},
                        {name: "react", purpose: "The front-end uses React, Redux and Typescript, and it is focused on a highly interactive and responsive philosophy. The idea in this app, as it controls 3D machines in real time, is that it must be very responsive. For every action the user does in the UI there must be an immediate response, even if it is a spin icon that will only be there for 1 second. This results on a really fluid and responsive UI"},
                        {name: "redux", purpose: "Integrated with React and strongly typed in TypeScript. It has a very particular way of updating the store, it receives through a websocket the actions that must be executed in the store in order to update data, so it executes actions with a MongoDb like syntax that updates the store when the server wants"},
                        {name: "express", purpose: "Express is web server framework for the back-end. It´s strongly integrated with Socketio websockets framework in order to update info from the 3D printers to the front-end in real time, and also for sending instruction to the printers (as they are almost like clients at the server´s eyes)"},
                        {name: "mongo", purpose: "All the user info, the products available to print, the records of how much is file has been printed, are stored in this database. There are only two main collections: users, and files, and they have a lot of nested properties that make MongoDb a suitable database for this project"},
                        {name: "gcp", purpose: "Only for back-end deployment. It is deployed on a Linux machine, with systemd as daemon manager and Nginx as reverse proxy"},
                        {name: "firebase" ,purpose: "For front-end hosting and for managing authentication. Registration is made on the main Ulab Wordpress page, which is also connected to Firebase, and login is made on the user console (React front-end) against the same Firebase project"}
                    ]
                },
            ]
        },
        job4: {
            logo: require("./images/expleo.png"),
            corporation: "expleo",
            occupation: "security and rams software engineer",
            timestamp: "02/2018 - 08/2018",
            tasks: [
                "High security level OS testing with Python",
                "VBA applications programming for data management",
                "Software system requirements analysis",
                "Testing and validation of critic systems on railway sector"
            ],
            projects: [
                {
                    name: "DS3",
                    subtitle: "maximum security level OS for critical systems",
                    technologies: [
                        {name: "python", purpose: "For testing critical systems and for auto-generating documentation related to the tests and to the system requirements specification. The testing framework was also integrated with an Access database and some internally developed software in order to automate all the testing pipeline"}
                    ]
                }
            ]
        }
    }
}
