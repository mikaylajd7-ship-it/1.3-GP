# First Node and Express Project

**Student:** Mikayla Dickerson  
**Course activity:** Guided Practice: First Node and Express Project

## Overview

This project is a Node.js and Express web application that uses EJS to render a personalized list of five favorite places and ratings from 1 to 10. The student's name is displayed on the home page. The server uses port **3003**, as required by the guided practice modification.

## Favorite places

| Place | Rating |
|---|---:|
| Walt Disney World, Florida | 10/10 |
| Virginia Beach, Virginia | 9/10 |
| New York City, New York | 8/10 |
| San Diego, California | 9/10 |
| Tokyo, Japan | 10/10 |

## Technologies

- Node.js
- Express 4
- EJS
- HTML and CSS

## Project structure

```text
FirstNodeExpressProject/
├── app.js
├── bin/
│   └── www
├── routes/
│   └── index.js
├── views/
│   ├── error.ejs
│   └── index.ejs
├── public/
│   └── stylesheets/
│       └── style.css
├── evidence/
│   └── SCREENSHOT_REQUIRED.txt
├── package.json
└── README.md
```

## Run the application

Open this folder in Visual Studio Code. In **Terminal > New Terminal**, run:

```bash
npm install
npm start
```

Open a browser to:

```text
http://localhost:3003
```

To stop the server, return to the terminal and press **Ctrl+C**.

## GitHub submission

The assignment requires a GitHub repository link, committed source files, and a screenshot of the running application. The project files are ready to commit. Do not commit `node_modules`.

If a GitHub repository has not already been created, create one named `FirstNodeExpressProject`, then use:

```bash
git init
git add .
git commit -m "Complete First Node and Express Project"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the URL of the repository you create.

## Screenshot requirement

Capture the application in a browser after it is running at `http://localhost:3003`. The screenshot must show the student's name and the favorite places list. Save it in this project folder before submitting. A design preview is not a substitute for this required live screenshot.
