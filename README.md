# Tetris

A Tetris game created by Softwire's February 2022 cohort of work experience students.

## Contents

1. [Work Experience Schedule](#work-experience-schedule)
2. [Useful Links](#useful-links)
3. [Technical Overview](#technical-overview)
4. [Running Locally](#running-locally)
5. [How to Contribute Code](#how-to-contribute-code)
6. [Running Tetris After the Work Experience Week](#running-tetris-after-the-work-experience-week)

## Work Experience Schedule

The schedule for the week is as follows (rough times only, these will be adaptable!):

|Day/Time| Activity                                                                |
|--------|-------------------------------------------------------------------------|
| **Monday**                                                                       |
| 10:00  | Introductions and setup                                                 |
| 11:00  | Feature specification and Trello setup                                  |
| 11:30  | Presentation: Git and GitHub                                            |
| 12:00  | Guest Presentation: APIs (Usman Iqbal)                                  |
| 12:30  | Lunch break                                                             |
| 13:30  | Code development                                                        |
| 16:00  | End of day                                                              |
| **Tuesday**                                                                      |
| 10:00  | Standup meeting                                                         |
| 10:30  | Presentation: HTML/CSS/JS                                               |
| 11:15  | Code development                                                        |
| 12:30  | Lunch break                                                             |
| 13:30  | Guest Presentation: A/B Testing (Charlie Cumber)                        |
| 14:00  | Code development                                                        |
| 16:00  | End of day                                                              |
| **Wednesday**                                                                    |
| 10:00  | Standup meeting                                                         |
| 10:30  | Presentation: Making HTTP requests and backend development              |
| 11:00  | Code development                                                        |
| 12:00  | Guest Presentation: Softwire's Apprentices (Various Presenters)         |
| 12:30  | Lunch break                                                             |
| 13:30  | Code development                                                        |
| 16:00  | End of day                                                              |
| **Thursday**                                                                     |
| 10:00  | Standup meeting                                                         |
| 10:30  | Presentation: DevOps: How is our Tetris site hosted on Heroku?          |
| 10:45  | Code development                                                        |
| 12:30  | Guest Presentation: CV and Job Application Workshop (Frances Portaluri) |
| 13:00  | Lunch break _(note - this is 30 minutes later than other days)_         |
| 14:00  | Code development                                                        |
| 16:00  | End of day                                                              |
| **Friday**                                                                       |
| 10:00  | Standup meeting                                                         |
| 10:30  | Code development                                                        |
| 12:00  | "Guest" Presentation: Mobile App Development (Cameron McCormack)        |
| 12:30  | Lunch break                                                             |
| 13:30  | Code development                                                        |
| 14:30  | Presentation preparation                                                |
| 15:00  | Presentation                                                            |
| 15:20  | Retro and close-out                                                     |
| 16:00  | End of day                                                              |

## Useful Links

### Project Resources

| What                    | Why                                                                         | Where                                                                 |
|-------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Trello Board            | To keep track of tasks and their statuses                                   | [here](https://trello.com/b/A96er0uq/work-experience-2022-tetris)     |
| GitHub repo             | Central location for all of our code                                        | [here](https://github.com/cameronmccormack/Tetris-WorkExperience2022) |
| Live site               | Where our current `main` branch code is running                             | http://tetris-feb2022.herokuapp.com                                   |
| Cameron's email address | Any issues that can't be addressed in Teams (e.g. can't join Teams meeting) | cameron.mccormack@softwire.com                                        |

### Useful HTML/CSS/JavaScript Guides

| What                    | Where                                                                                                 |
|-------------------------|-------------------------------------------------------------------------------------------------------|
| HTML Basics             | [here](https://www.w3schools.com/html/html_basic.asp)                                                 |
| CSS Basics              | [here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)        |
| CSS Flexbox Guide       | [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)                                       |
| JavaScript Basics       | [here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) |

## Technical Overview

The codebase has two components: frontend and backend. The `main` branch of the repository is set to run on Heroku (a popular cloud platform). I've set this all up for you so you don't need to worry about how this hosting works, but I'll be giving a quick overview on Wednesday to make it feel less "magic".

### Frontend

The frontend codebase contains all of the code to control what you see on the screen when you use the website. It is written in HTML/CSS/JavaScript.
- HTML provides the basic structure of each page
- CSS is used to control the formatting and layout of the HTML content
- JavaScript is used to control the behaviour of different elements on the page

When running (either on Heroku or locally), the files in the frontend directory are available at `<siteurl>/<filename>`. The `index.html` home page is also available at `<siteurl>` and all HTML files can be accessed without the `.html` extension (i.e. `tetris-feb2022.herokuapp.com/game.html` and `tetris-feb2022.herokuapp.com/game` will both route to the same page).

Lots of websites use frameworks or libraries rather than "Vanilla JavaScript" to put together the site (you may have heard of React, Angular, Vue.js or many more, for example). These provide useful in-build functionality that makes it easier to build complex applications. In this project, we will not be using any specific library/framework in the frontend so that we can focus on writing code that we control rather than integrating with a specific "black box" that does things for us.

Larger projects also often use TypeScript (for both frontend and backend) rather than JavaScript. TypeScript is a language that builds on top of JavaScript to add some new features. For simplicity, we will be using JavaScript for this project in both the front-end and back-end code.

### Backend

The backend codebase is a web application written using Node.js/Express. This serves two main purposes:
- Redirects users to the correct frontend page when they go to its URL.
- Implements "endpoints" - code that the website running in the browser can call to get, modify or delete information stored in the backend. These will generally be accessed using the url `<siteurl>/api/<endpoint_name>`

The first of these points, redirecting to the correct page, is already set up to work in the backend - so you don't need to worry about this! I'll be explaing how it works (for interest only) on Wednesday morning.

Depending on the features that we want to add to our Tetris game, we will have to add some endpoints to the backend codebase. We can discuss these once we've decided what we want our game to do!

## Running Locally

To test your changes whilst you are developing, you will need to be able to run the website locally. This means that the backend code is running on your own computer and you can access it in a browser without having to deploy the app publically over the internet.

To run and access the website locally, you can do the following:

- Make sure that all of the dependencies are installed
  - Dependencies are external pieces of software that our code relies on
  - These are defined in `package.json`, and can be installed with the command `npm install`
- Run the app locally
  - This command has already been set up for you (in `package.json`)
  - You can run the app with `npm start`
- Visit the website
  - After you have run `npm start` you should see `"App listening at http://localhost:3000"`
  - `localhost` is the default name for your own computer
  - Now, for example, if you visit `http://localhost:3000/createGame.html` you will see the version of the create game page that would be generated by your version of the code

## How to Contribute Code

This section will all be covered by a presentation on the first day, so don't worry about this until we've spoken about Git/GitHub! It should be a useful reminder in future though!

Git can be a bit confusing if you're using it for the first time. If you're unsure about any step, just drop me a message and I'll join your breakout room to help. 

### Initial Repository Setup

- Clone the repo:
  - This creates a local copy of the code that you can make changes to on your computer. You can do this with the following command line command: 
  - `git clone https://github.com/cameronmccormack/Tetris-WorkExperience2022.git`
  - (It's also possible to clone with SSH if you'd prefer, but I'll assume that if you want to use SSH you already know how to do it!)

### Working on a Feature

Try not to make changes on the `main` branch, this branch should always only contain code that has been reviewed. Development work should be done on a feature branch. However, don't worry if you accidentally work on `main`! Just let me know and I'll help you move it over to a feature branch.

- Make sure you are on the `main` branch and that it is up to date:
  - `git checkout main`
  - `git pull`
- Create a branch for your feature:
  - `git checkout -b [your-own-feature-branch-name]`
- Make some code changes
- Add your changes:
  - (if you want to check what changes you have): `git status`
  - `git add [yourFiles.example]`
  - `git commit -m "sensible message here, e.g. add a line piece to the library"`
  - You can (and probably should) do this process multiple times on your branch as you gradually add code to acheive the feature
- Push the changes to GitHub:
  - If it's the first time you have pushed this branch:
    - `git push --set-upstream origin [your-own-feature-branch-name]`
  - If you have pushed this branch before:
    - `git push`

### Requesting a Review

Once you are happy with your code, you can open GitHub in a browser and do the following:
- Navigate to the page for the repository [here](https://github.com/cameronmccormack/Tetris-WorkExperience2022)
- Select "Pull requests" in the bar at the top
- Click the "New pull request" button
- Set the branches as follows:
  - base: `main` (this should be the default)
  - compare: `your-own-feature-branch-name`
- Click "Create pull request"
- Add a sensible title and description of your changes, then click "Create pull request"
- I will then review your changes and either make some comments or approve it:
  - If I make comments, you can make the changes on your branch locally and `git push` to update the code in GitHub
  - If I approve it, we can merge it into `main`. Wahey!

## Running Tetris After the Work Experience Week

To be updated after the work experience week.
