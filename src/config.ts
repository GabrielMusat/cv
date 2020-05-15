export const config = {
    basicInfo: {
        name: "Gabriel Musat Mestre",
        residency: "Pozuelo de Alarcón, Madrid",
        birthdate: "04-12-1994",
        email: "gabimtme@gmail.com",
        github: "https://github.com/GabrielMusat/cv",
        linkedin: "https://www.linkedin.com/in/gabriel-musat"
    },
    job: 'Full stack and machine learning software engineer',
    languages: ["spanish", "english"],
    technology: {
        "Programming languages": ["python", "javascript", "typescript", "go", "java"],
        "Frontend": ["react", "redux", "android"],
        "Backend": ["gin", "express", "tornado", "aiohttp", "socketio"],
        "Databases": ["mysql", "mongo"],
        "Devops": ["docker", "kubernetes", "jenkins", "gcp", "firebase", "nginx"],
        "Machine learning": ["pytorch", "tensorflow", "keras"]
    },
    jobs: [
        {
            logo: require("./images/bat.png"),
            corporation: "Brain&Tech",
            occupation: "Software development team leader",
            timestamp: "08/2018 - Ongoing...",
            tasks: [
                "Software development team lead",
                "Architecture of distributed end-to-end AI solutions",
                "System requirement specifications based on clients needs",
                "Front-end, back-end, dev-ops and machine learning programming",
                "Research and selection of the most modern technologies for the projects"
            ],
            projects: [
                {
                    name: "Ciber Brother",
                    subtitle: "Distributed platform for social nets data extraction and AI (NLP) classification",
                    link: "",
                    technologies: [
                        {name: "python", purpose: "Used for making the API rest that the clients use as an interface to a MySql database (Aiohttp web server). Also used in containerized applications running on Kubernetes for parallel data extraction from the users social nets. And of course for AI, for development and serving of Tensorflow 2.0/Keras models"},
                        {name: "javascript", purpose: "JavaScript´s asynchronous execution works great for automating Kubernetes´s pods and jobs deployment, so in this project it is used as an orchestrating module that decides when to launch some job on Kubernetes. It´s performance is extremely good as it only has to take care of io tasks"},
                        {name: "typescript", purpose: "All the front-ends that the clients use for accessing the platform services are written in React and TypeScript. The typing is extremely helpful when combining React and Redux, Especially for the front-end that the final clients use, where there is very deeply nested data in the Redux´s store"},
                        {name: "react", purpose: "It´s the only framework used for front-end development in this project, combined with TypeScript and Redux makes and excellent programming experience. One of the front-ends from this project consists on a console to monitor logs and performance of the platform, and it is capable of transmitting Kubernetes state and see the logs from any pod in realtime through a websocket, a really useful feature when there is a ton of jobs and deployments running at the same time"},
                        {name: "redux", purpose: "Redux has been used alongside with React in every front-end of this project. It is strongly typed, so the code assistance is extremely good even for deep nested data in the Redux´s store. It´s also combined with a very helpful library, immutability-helper, that allows to modify an object, no matter how deeply nested it is, with a MongoDb-like language and without mutating it"},
                        {name: "aiohttp", purpose: "API rests are written in Aiohttp, the asyncio based web server, and it makes use of Python´s asyncio features and some other async libraries to make a fast and responsive API. For example, aiomysql is the async version of pymysql (standard mysql Python driver), and it is used to make SQL queries without blocking the asyncio´s event loop, which results on an API that can handle thousands of concurrent calls"},
                        {name: "socketio", purpose: "There are many microservices running on Kubernetes engine, and there is a central server which is the only one exposed to clients. Socketio is the framework used for realtime communication between this server and pods running on Kubernetes, for example, when a client requests through the API that he/she wants to register a user, the users backend searches for a free and available connected pod and orders it to make the register (in this project there are particular cases where registers are very expensive)"},
                        {name: "mysql", purpose: "MySql is where all the data is stored (all but files, which are stored on Google Cloud Storage). The data in this project has a very hierarchical structure, so, in oder to optimize it for a relational database, it is spread through multiple tables. For example, a WhatsApp message: every message has common data, like the timestamp and it´s sender. It also has content, which can be a text, media or both, the media can be a video or an image, the text have some AI generated labels, the image some other different labels, etc. There is up to 10 joins that need to be done in order the get all the info from a single message"},
                        {name: "docker", purpose: "It´s used for CI/CD alongside with Jenkins and also for running jobs on Kubernetes engine. The main workers of this platform are Docker containers running on Kubernetes, all of them written in Python. Most of them are designed as a one way process, they start up, they extract data, they compute some other data, and then they die. The other ones are only sidecar containers that need to be there in order to serve the firsts, they end up also dying"},
                        {name: "kubernetes", purpose: "The project´s angular stone. All the worker modules that extract and analyze data run on containerized applications on Kubernetes engine. It´s orchestration is automatically managed by a JavaScript module via Kubernetes´s API. It runs as a service with Linux´s systemd, and it is checking every time if a job or deployment needs to be launched and how. This project uses GKE infrastructure, and it is prepared to auto-scale the attached nodes if more resources are needed"},
                        {name: "jenkins", purpose: "The CI/CD pipeline for continuous delivery is implemented in Jenkins and Docker containers that simulates the platform and test it before every commit to master branch. The testing system is very simple, there are only acceptance tests, for that, a simulation of the hole platform with docker containers is done, there is even a Docker container only for a falsely pre-populated MySql database"},
                        {name: "gcp", purpose: "All the code is running here, in Google Cloud Platform. The services used are Google Cloud MySql, Google Compute Engine, Google Cloud Storage and some AI APIs like Google Cloud Vision and Google Cloud Translate"},
                        {name: "nginx", purpose: "Nginx acts as a reverse proxy for connecting all the microservices running on GCP. It also handles authentication and limit http calling rate. This project has multiple front-ends (monitoring, final client, internal AI tools, etc...), so Nginx serve them all in the same url, routing the single page apps through endpoints"},
                        {name: "firebase", purpose: "Mainly for managing clients authentication with it´s back-end SDK. Clients that login in the user´s console get a token generated by Firebase that is validated with this SDK in the backend"},
                        {name: "tensorflow", purpose: "Used for NLP model development and serving alongside with keras. The most advanced algorithm served is a seq-2-seq with attention neural network that is able to tell when a child is saying inappropriate things for his or her age, and the special thing about this algorithm is that it doesn´t uses the tokenized words in sequence as raw input, it gets the vector corresponding to each word from a 300-dimensional word-2-vec model, and uses it as input"},
                        {name: "keras", purpose: "Keras is used as high level API to develop neural network models. As Keras is now part of Tensorflow, it is difficult not to use it. The models are developed using the functional paradigm, which results on customizable models that can be exported in all formats"}
                    ]
                },
                {
                    name: "Atenea",
                    subtitle: "Fake news AI detection platform and public chatbot for news veracity validation",
                    link: "",
                    technologies: [
                        {name: "typescript", purpose: "For back-end development using Express framework and Socketio for real time communication with front-end. This backend, among other things, serves as an interface to the database, where data is structured in many different tables, so the typing helps knowing what fields have the models received in each query. It is also used on the worker modules, this ones are in charge of collecting data from social nets and answer users questions and queries with a chatbot. Currently WhatsApp and Telegram are implemented"},
                        {name: "go", purpose: "Some microservices in this project are very computational expensive, and other ones need real time updating of a huge amount with websockets. In both cases a powerful and fast language is needed, that´s why Golang is used. There is one microservice that handles real time data updating, and it has some kind of diffing engine (like React) that when some data is updated, it checks the difference between the last update to each front-end connected and the current data, if there is some difference only that difference is updated to each front-end"},
                        {name: "react", purpose: "React is used for the only front-end that the client directly uses. It is some kind of user console that handles incoming news and chatbot configuration. It is directly connected through a websocket to a Golang service that handles real time data updating, so each time some data is updated on the platform all the connected front-ends are immediately notified and updated"},
                        {name: "redux", purpose: "For managing the front-end memory instead of using React components state. In this particular case the Redux´s store is connected through a websocket to a Golang microservice that constantly checks for data changes and updates it accordingly, so the UI components can abstract all the data operations as they are automatically updated. This app also has a lot of different sections with shared elements, Redux helps centralizing the data storage so it´s not loaded two times in two sections"},
                        {name: "express", purpose: "The framework chosen for the main backend. It also takes full advantage of it´s asynchronous io for managing multiple connections efficiently. It´s combined with Socketio websockets framework for communicating with the data extraction modules and with the chatbot. For example, some times the backend needs the chatbot to notify something to it´s users, which basically works like a push notification, an event driven by the backend"},
                        {name: "socketio", purpose: "Almost all the modules use it. This platform depends on realtime data updating and also uses multiple programming languages, so a cross-language websocket framework like this is very useful. The server side of the websocket is implemented in Golang, and the front-end uses the JavaScript client version of the library"},
                        {name: "mysql", purpose: "For storing data extracted and analyzed by the worker modules. The curious thing in this project it´s that those modules does not store data directly on MySql. There is one microservice written in Golang that does it for them and also keeps track of the changes made in order to update data to connected front-ends in real time through websocket protocol, so each time some data is inserted or updated to the database, every one is immediately notified. "},
                        {name: "gcp", purpose: "For vm execution on Google Compute Engine, for Sql hosting on Google Cloud Sql and for AI Image and Video analysis with Google Cloud Vision"},
                        {name: "nginx", purpose: "This reverse proxy encapsulate all the microservices under the same domain, serves the web apps and establish headers needed for upgrading a long polling http connection to websocket if needed. It also serves the static files collected by the worker modules so the front-end can render them"}
                    ]
                },
                {
                    name: "Docfy",
                    subtitle: "AI documents auto-classification platform integrated with office 365",
                    link: "",
                    technologies: [
                        {name: "python", purpose: "This platform relies on a single back-end written in Python´s asyncio and Tornado framework. It is constantly reading and writing from external services like mail servers, office 365 products, etc..., so asynchronicity is needed. It could have been written in Nodejs, but the platform uses AI to classify documents, so Python is the most suitable tool for this purpose. All the libraries that do io tasks in this backend are asynchronous, for example: Motor, an asynchronous driver for MongoDb; Aiosmtplib, an asynchronous library for connecting to smtp mail servers; Aiofiles, an asynchronous library for disk reading and writing"},
                        {name: "typescript", purpose: "Front-end development is made entirely on Typescript, using the React tsx way of coding and with a strongly typed Redux´s store. The Redux´s store typing is very helpful with big apps like this one, the code assistance is very good in any IDE (Webstorm in this case)"},
                        {name: "react", purpose: "The UI that the clients use for accessing it´s enterprise mail repositories with the classified documents, it is combined with Redux and written in Typescript. This app works like an email browser client, but the content of every incoming email is classified by an AI, so the front-end renders the content of each mail like a normal mail client, but with the content already classified"},
                        {name: "redux", purpose: "For managing the memory in the web application. Instead of using the state of each React component, all the data is stored in de Redux´s store. For example, this app has many ways of visualizing an email based on some classification criteria, so data is only loaded once on the Redux´s store, an all those UI components inherit from it"},
                        {name: "tornado", purpose: "This framework is very useful for making non blocking Python code. This project needs to make a lot of requests to mail servers, cloud storage systems, databases, and office 365 products, so it´s non blocking io feature is essential. The only real computation it does is for AI classification, but the model used for that is very light weight. The tasks that take most time to process are based on external services, so, with just one fully asynchronous backend like this one the platform is able to handle thousands of connections at the same time"},
                        {name: "gcp", purpose: "Google Compute Engine is the only service this project uses from GCP. But unlike the other projects, this uses a MongoDb database running on a compute engine instance (a MongoDb Bitnami´s solution), so one of the instances is only a database with it´s own firewall and routing rules"},
                        {name: "mongo", purpose: "All the documents and info collected are stored on a MongoDb database that has a very hierarchical tree structure due to the nature of data collected. It could have used some SQL db, but it is more complicated to store such structured data in a relational database, so, for simplicity, MongoDb is most suitable. For example, a big company can have many clients (other companies), each company has several people sending mails to the big company, each person sends many mails, each mail has many content entities (attached documents, text, etc...)"},
                        {name: "tensorflow", purpose: "The deep learning models that classify documents by it´s content are based on NLP and recurrent neural networks. The models are trained on real documents, and basically consists on a recurrent neural network with an attention mechanism that reads each word of a document and predict what type of document it is (DNI, Driver license, etc...). The words are extracted by Google Cloud Vision, and compressed in an embedding layer at the entrance of the neural network"},
                    ]
                }
            ]
        },
        {
            logo: null,
            corporation: "Autonomous",
            occupation: "Mobile application developer",
            timestamp: "02/2019 - Ongoing...",
            tasks: [
                "Cross platform mobile applications development",
                "Administration of 3 currently running apps on Google Play (links available)",
                "AI integration with mobile apps",
                "Design, develop and maintain backend services"
            ],
            projects: [
                {
                    name: "Mushroom Identifier",
                    subtitle: "Android app for mushroom detection and classification using deep learning models",
                    link: "https://play.google.com/store/apps/details?id=com.gabotechindustries.mushroomIdentifier",
                    technologies: [
                        {name: "java", purpose: "This is a native Android app and it uses Java as it´s programming language. It is built with the Android SDK on Android Studio. This app needs an extreme performance as it uses real time object detection through the camera preview with resource intensive AI models (YoloV3 and Xception). It plays a lot with multi threading, as it has to take care or updating the frames coming from the camera, run AI models inference, and respond to UI user events at the same time."},
                        {name: "python", purpose: "All the AI models are developed on Python using Pytorch for model prototyping and training. The data extraction and preprocessing pipelines are also developed with this language using other common libraries like Pandas. Even though this an Android app, most of the code is Python, as there is a module for AI, another for image extraction from internet, another for image preprocessing, another for image cleaning (this ones also uses AI for detecting that a huge and yummy mushroom is present on an image)"},
                        {name: "android", purpose: "This is an Android app, so it uses Android SDK and it´s standard Java library with Android Studio. It uses TFLite for deploying deep learning models on the devices and Glide for image loading in a background thread."},
                        {name: "pytorch", purpose: "This app combines two of the most advanced deep learning technologies, one for object detection, using a custom variation of YOLOV3 model, trained to detect where is a mushroom on an image, and Xception, a classification model that once YOLO has cropped a mushroom from an image classifies it. All the images present in the app are also selected by Xception, who ensures the images have a good quality mushroom present"},
                        {name: "firebase", purpose: "The only use of Firebase for this app is for user analytics and integration with Google ads for monetizing"}
                    ]
                },
                {
                    name: "Fily",
                    subtitle: "wireless real time mobile to pc file uploader",
                    link: "https://play.google.com/store/apps/details?id=com.gabotechindustries.fily",
                    technologies: [
                        {name: "typescript", purpose: "This app has two front-ends, the web app that runs on the computer´s browser where the users want to send the files, and the mobile app that runs on the device where the files come from, both using React and React-Native respectively. Both front-ends are relatively small, but TypeScript comes really handy for scalability in case the app is successful and more features are requested by users"},
                        {name: "go", purpose: "The back-end that connects the two front-ends is built with Golang. It uses websockets for real time file updating, so, when one user sends a file, the back-end immediately notifies the web app and sends it. The file is in the computer in milliseconds. This backend is built with Gin, one of the most popular web servers for Go. It is known to be one of the fastest web servers available"},
                        {name: "react", purpose: "Plain React is used for the web app and React-Native is used for the mobile app, both written in TypeScript and with Redux integrated. Even though React is used in both cases, and both apps are very alike, they do not share any piece of code, as React-Native and React are slightly different, but they share the same design philosophy"},
                        {name: "gin", purpose: "The Golang back-end uses the Gin library as web server framework, it is very fast and scalable. It is integrated with Golang´s version of Socketio, the websockets framework. There is a little trick implemented in this app that makes the user feels like it is lightning fast: when a user updates a photo (or video) from his phone, there is a first \"prefly\" requests with the width and height of the image in pixels. The backend sends through websocket that info to the web app, and this last one renders an empty square with that size. After that the real image is sent and served to the web app, but the first appearance of the image placeholder is immediate, and that is what the user first sees"},
                        {name: "socketio", purpose: "For front-end real time updating. The server part of Socketio in this project is embedded in the Golang´s Gin web server. Golang´s Socketio library is very immature, and that caused some problems, but the basic functionality works great. The web app is event driven by the backend, and it responds immediately to any action the user does in the mobile app, so it looks amazingly fast"},
                        {name: "gcp", purpose: "Backend is hosted on Google Compute Engine and Google Cloud Storage is used as temporal distributed file storage. This is a trick that helps scalability as Google Cloud Storage is distributed and auto-scalable by nature. It is also very cheap, as files are only stored some minutes"},
                        {name: "nginx", purpose: "Nginx exposes only an https port to the outside world and redirects all the requests to the Gin´s server, establishing websocket upgrade headers when needed and rate limiting for security"}
                    ]
                },
                {
                    name: "Counttr",
                    subtitle: "real time cloud syncing app for group expenses management",
                    link: "https://play.google.com/store/apps/details?id=com.countmanager",
                    technologies: [
                        {name: "javascript", purpose: "This app is built with React-Native and JavaScript. That turned out on a really fast development, but bugs are common to appear with this language. The app syncs data automatically with the backend, so the asynchronous nature of JavaScript is very useful, as http requests doesn´t block the app execution"},
                        {name: "react", purpose: "React-Native was the framework chosen for this app. It also uses a lot of libraries designed for being implemented with React-Native, mainly for UI and animations. This app has a lot of navigation, so Redux comes really handy for sharing data between sections efficiently"},
                        {name: "redux", purpose: "This app uses Redux in a very special way. It features automatic synchronization with data stored on the backend, but this last one does not simply store data. It stores a list of Redux´s actions that, executed sequentially on an empty object, form the data that must be rendered on the app. Each action has an attached timestamp, so, in order to sync, the app only has to request actions with a timestamp greater than the last one stored and execute them in the current store"},
                        {name: "express", purpose: "Express is used with plain JavaScript as back-end. It has a very particular way of syncing with the app running on the user´s device. It stores in it´s file system the actions that must be executed on an empty object in order to form the resulting data, instead of storing the resulting data itself, that helps a lot on syncing all the devices that inherit data from the same session"},
                        {name: "gcp", purpose: "The back-end is running on Google Compute Engine on a linux machine with systemd and Nginx as reverse proxy"},
                        {name: "nginx", purpose: "Reverse proxy that communicates the vm instance where the back-end is running to the outside world. It also limits the rate at which users makes http calls for security reasons"}
                    ]
                },
            ]
        },
        {
            logo: require("./images/artenea.png"),
            corporation: "Artenea 3D",
            occupation: "Product owner and main software engineer",
            timestamp: "07/2016 - Ongoing...",
            tasks: [
                "Product development team leader",
                "Front-end and back-end main developer",
                "IoT platform design for CNC machines"
            ],
            projects: [
                {
                    name: "Ulab",
                    subtitle: "IoT platform for 3D printer machines real time control and monitor",
                    link: "",
                    technologies: [
                        {name: "python", purpose: "This platform has three modules: the front-end where users control their 3D printers, the back-end, and the code running inside the 3D printers (in IoT they will be called things). The 3D printer´s Python code runs inside a Raspberry Pi 3B with some kind of Debian OS and systemd installed. Asyncio handles real time data updating to the backend through websockets and serial USB communication with the 3D printer at the same time. Python also controls some hardware features like Wlan"},
                        {name: "typescript", purpose: "The back-end and the front-end are written in TypeScript. The back-end code is executed by Node in a Google Compute Engine vm instance, and the front-end is a React application integrated with Redux. The data that comes from the server has a very light typing (many records and few interfaces), it must be very flexible as this platform is prepared for any type of FDM 3D printer"},
                        {name: "react", purpose: "The front-end uses React, Redux and TypeScript, and it is focused on a highly interactive and responsive philosophy. The idea in this app is to control 3D printing machines in strict real time. For every action the user does in the UI there must be an immediate response, even if it is a spin icon that will only be there for 1 second. This results on a really fluid UI, that gives the users instant feedback to their actions"},
                        {name: "redux", purpose: "Integrated with React. It has a very particular way of updating the store: it receives through a websocket the actions that must be executed in order to update data, so it executes actions with a MongoDb like syntax that updates the store when the server wants (which in the end is when the 3D printer wants)"},
                        {name: "express", purpose: "Express is the web server framework used for the back-end. It´s strongly integrated with Socketio in order to update info from the 3D printers to the front-end in real time, and also for sending instructions to the 3D printers (as they are almost like clients at the server´s eyes)"},
                        {name: "socketio", purpose: "This platform is based on real time communications between a front-end and a 3D printer through a backend with both entities connected, all the data that goes from one end to the other is transferred through websocket protocol. The websocket works in both directions, data updating events are emitted from the 3D printer to the back-end and from the back-end to the front-end, and instructions are sent from the front-end to the back-end and from the back-end to the 3D printer"},
                        {name: "mongo", purpose: "All the users info, the products available to print, the records of how much a file has been printed, etc, are stored in this database. There are only two main collections: users, and files, and they have a lot of nested properties that make MongoDb a suitable database for this project"},
                        {name: "gcp", purpose: "For back-end deployment and for database hosting. The backend runs on a Debian machine, with systemd as daemon manager and Nginx as reverse proxy. The MongoDb database runs on another compute engine instance, also Linux"},
                        {name: "firebase" ,purpose: "For front-end hosting and for managing authentication. Registration is made on the main Ulab Wordpress page, which is also connected to Firebase, and login is made on the user console (React front-end) against the same Firebase authentication system"}
                    ]
                },
            ]
        },
        {
            logo: require("./images/expleo.png"),
            corporation: "Expleo",
            occupation: "Security and rams software engineer",
            timestamp: "02/2018 - 08/2018",
            tasks: [
                "High security level OS testing",
                "VBA application development for data management",
                "Software system requirements analysis",
                "Testing and validation of critic systems on railway sector"
            ],
            projects: [
                {
                    name: "DS3",
                    subtitle: "Maximum security level OS for critical systems (railway sector)",
                    link: "",
                    technologies: [
                        {
                            name: "python", purpose: "For testing critical systems and for auto-generating documentation related to the tests and to the system requirements specification. The testing framework was also integrated with an Access database and some internally developed software in order to automate all the testing pipeline"
                        }
                    ]
                }
            ]
        }
    ],
    education: [
        {
            university: "UC3M",
            title: "Master of Industrial Engineering",
            timestamp: "09/2016 – 07/2018"
        },
        {
            university: "UC3M",
            title: "Mechanical Engineering",
            timestamp: "09/2012 – 07/2016"
        }
    ]
}
