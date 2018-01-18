# Health News

## Overview
A full stack (MERN) app that allows users to get top medical articles from Medical News Today and provide options to read or to save to database for later reading.

### Demo
* Heroku: [Health News](https://health-news.herokuapp.com/)

<img src="https://github.com/nguyendviet/health-news/blob/master/github-photos/health-news.png" width="400"/>  <img src="https://github.com/nguyendviet/health-news/blob/master/github-photos/health-news-1.png" width="400"/>

### Logic
* Users click Get Articles button to getarticles from Medical News Today. Users then can choose to view articles on their website or to save articles' links to my database.
* Users can go to the Saved Articles page to read saved articles or to remove them.
* The app won't get articles that have been already saved in my database to prevent duplicates.

## Installation
Make sure you've already installed yarn. For more information, please read the [Yarn Documentation](https://yarnpkg.com/lang/en/docs/install/).

After cloning the repo to your local machine, go to its folder and run:
```
$ yarn install
```
Next, go to folder **client/**:
```
$ cd client
```
Install dependencies for the client:
```
$ yarn install
```
Then go back to the root folder:
```
$ cd ..
```
Start express and react at the same time:
```
$ yarn start
```
If you've done everything correctly, you should see your default brower loading ```localhost:3000```, then the app's main page:

<img src="https://github.com/nguyendviet/health-news/blob/master/github-photos/health-news-2.png" width="400"/>

## Technologies
* MERN: MongoDB - ExpressJS - ReactJS - NodeJS
* npm: mongoose, axios, react-router-dom...
* NewsAPI.org

## Author
* **Viet Nguyen** - *Solo developer*