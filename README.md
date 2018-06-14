# Would you Rather App Project
This is Would You Rather project, Udacity Second Project:

"Would You Rather?" is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”.

Users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├──actions # Action folder contain all actions            
    ├──components # Component folder contain all components               
    ├──css-circle # Helper folder contain files to draw some circles                        
    ├──img #Folder Contain Avatar imgages for the Users                               
    ├──midware #Reactjs Middileware Folder
    ├──reducers #Reducer Folder
    ├──utils #utilities Folder containt _DATA.js helper file to handel DB transactions 
└── bootstrap.min.css # CSS file for Bootstrap
└── index.js  # This is the root of your app. Contains static HTML right now.
└── srcnavcss.css  #Stype for the Nav Bar for the app
└── srcregisterServiceWorker.js #use less file

## Backend Server

The provided file [`_DATA.js`](utils/_DATA.js) contains the methods to perform necessary operations on the backend:
* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`
