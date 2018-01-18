## Synopsis

Weatherly is the culmination of a ten day project for Turing School of Software and Design. The project guidelines required us to use React as the framework and make API calls to the Weather Underground for data. Further detail are [here](http://frontend.turing.io/projects/weathrly.html). Upon entering the website, it prompts the user to input a city and state or a zipcode. When the submit button is pressed, another page pops up showing the current conditions, the weather prediction for the next seven hours and the next ten days. Instructions to install the React Starter Kit and node autocomplete package are located in the installation section.

## Code Example

Upon load, the code checks local storage to see if the user has input a location before. If so, the website loads the weather information. If not, the website loads the Welcome component and the Search component. A user is then prompted to input a City, State or a zipcode to find the weather for their location. An autocomplete node package was installed from our previous projects ([complete-me](http://frontend.turing.io/projects/complete-me.html)) and populated with a list of the 1000 most popular cities. When a city is added to the input, a list of suggestions starting with the string frgament typed is displayed underneath the input. When the submit button is clicked, an api call is made. If the call is unsuccessful, an error message is displayed on the Welcome Page. If the call is successful, a Weather Page is displayed.

## Installation

### React Starter Kit & Autocomplete

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```

## API Reference

The [Weather Underground Website](https://www.wunderground.com/weather/api/) provided free access to the api.

## Tests

Note: tests are a work in progress since they are formatted for the project before I forked it.

Tests use Jest and Enzyme. The React Stater Kit is already installed with Jest, Enzyme, Babel and ESlint.

To Run Enzyme
```js
npm test (to test all files)
npm test fileName.test.js (to test one file)
```

To Run ESlint
 ```js
 npm run eslint
 ```

## Contributors
  Project leads:
    Valentino Valentine @valentinovtino
    Casey Dallavalle @cbdallavalle
    
  API:
    Weather Underground
    
## ScreenShots
  Mobile
<img width="338" alt="screen shot 2018-01-17 at 10 06 10 pm" src="https://user-images.githubusercontent.com/28467245/35081678-b80648fa-fbd2-11e7-8558-20d19be25769.png">

<img width="339" alt="screen shot 2018-01-17 at 10 04 21 pm" src="https://user-images.githubusercontent.com/28467245/35081664-9a8c067a-fbd2-11e7-8fb2-fb80d545b3a0.png">

<img width="353" alt="screen shot 2018-01-17 at 10 06 24 pm" src="https://user-images.githubusercontent.com/28467245/35081683-c0e97d34-fbd2-11e7-81a5-c7ba17ebc5cb.png">

Desktop
<img width="1089" alt="screen shot 2018-01-17 at 10 10 00 pm" src="https://user-images.githubusercontent.com/28467245/35081778-53e760b0-fbd3-11e7-9874-04c2b896e584.png">

<img width="1083" alt="screen shot 2018-01-17 at 10 10 20 pm" src="https://user-images.githubusercontent.com/28467245/35081781-56fd6de4-fbd3-11e7-9bef-5028c5077b6c.png">

<img width="1088" alt="screen shot 2018-01-17 at 10 10 30 pm" src="https://user-images.githubusercontent.com/28467245/35081784-5dff23da-fbd3-11e7-8584-bd6cdba97bda.png">

<img width="1088" alt="screen shot 2018-01-17 at 10 10 49 pm" src="https://user-images.githubusercontent.com/28467245/35081788-61e07e72-fbd3-11e7-8fca-
