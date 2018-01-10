import apikey from '../__mocks__/apikey';

export default {
  returnWeatherAPI(zip) {
    return fetch(`http://api.wunderground.com/api/${apikey}/conditions/forecast/forecast10day/hourly/q/${zip}.json`)
      .then(response => response.json())
  }
}