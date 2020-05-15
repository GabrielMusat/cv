<h1 align="center">Resume template for software jobs</h1>

This is a template for making amazing resumes. It has animations, awesome popup dialogs, 4k logos, and explosions.
Feel free to use it as you want.

## Installation

```bash
# clone
git clone https://github.com/GabrielMusat/cv.git

# go to the project´s folder
cd cv

# install dependencies
npm install

# start the development server
npm start

```

## Usage

All the info that is going to be rendered can be edited in ```src/config.ts```.
That file contains a typed object that works as a template for the resume.

Technologies logos that are not in the ```src/icons/``` folder can be manually placed there in png format,
and they will automatically be imported if they have the same name in the icons folder and in ```src/config.ts```
 

Other images, like companies logos, can be manually placed in ```src/images``` and required from ```src/config.ts``` like this:
```JavaScript
{
    ...
    jobs: [
        ...
        {
            name: "google",
            logo: require("./images/google.png"),
            ...
        }
    ]
} 
```
